'use client';

import { useRef } from 'react';
import { Color, DoubleSide, Mesh, ShaderMaterial, Vector2 } from 'three';
import { useFrame } from '@react-three/fiber';

export default function WavesMesh({ intensity = 0.5, speed = 0.5 }) {
  const meshRef = useRef<Mesh | null>(null);

  const shaderMaterial = new ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uIntensity: { value: intensity },
      uSpeed: { value: speed },
      uColorA: { value: new Color('#000000').toArray() },
      uColorB: { value: new Color('#888888').toArray() },
      uMouse: { value: new Vector2(0, 0) },
      uMouseIntensity: { value: 0.15 },
    },
    vertexShader: `
        uniform float uTime;
        uniform float uIntensity;
        uniform float uSpeed;
        uniform vec2 uMouse;
        uniform float uMouseIntensity;
        
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          vUv = uv;
          
          // Create wave effect
          float amplitude = uIntensity * 1.0;
          float frequency = 1.5;
          float time = uTime * uSpeed;
          
          // Calculate distance from vertex to mouse position in model space
          // We need to adjust for the mesh rotation
          vec2 vertexPosition = vec2(position.x, position.z);
          vec2 mouseInfluence = vec2(uMouse.x, uMouse.y);
          
          // Calculate mouse influence based on distance
          float distanceToMouse = length(vertexPosition - mouseInfluence * 5.0);
          float mouseEffect = uMouseIntensity * (1.0 - min(1.0, distanceToMouse / 5.0));
          
          // Basic wave pattern
          float baseElevation = 
            sin(position.x * frequency + time) * amplitude +
            sin(position.y * frequency * 0.8 + time) * amplitude;
            
          // Add mouse influence
          float mouseElevation = sin(distanceToMouse - time * 2.0) * mouseEffect;
          
          // Combine effects
          float elevation = baseElevation + mouseElevation;
          vElevation = elevation;
          
          vec3 newPosition = position + normal * elevation;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
    fragmentShader: `
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform float uTime;
        
        varying vec2 vUv;
        varying float vElevation;
        
        void main() {
          float mixStrength = (vElevation + 0.5) * 0.5;
          vec3 color = mix(uColorA, uColorB, mixStrength);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    side: DoubleSide,
  });
  useFrame((state) => {
    if (!meshRef.current) return;

    shaderMaterial.uniforms.uTime.value = state.clock.getElapsedTime();

    shaderMaterial.uniforms.uIntensity.value = intensity;
    shaderMaterial.uniforms.uSpeed.value = speed;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 4, 0, 0]}>
      <planeGeometry args={[10, 10, 128, 128]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
}
