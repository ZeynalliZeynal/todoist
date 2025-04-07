'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { cn } from '@/lib/utils';

interface GradientMorphsProps {
  colorScheme?: 'vercel' | 'blue' | 'purple' | 'green' | 'rainbow';
  intensity?: number;
  speed?: number;
  className?: string;
}

export default function GradientMorphs({
  colorScheme = 'vercel',
  intensity = 0.5,
  speed = 0.5,
  className,
}: GradientMorphsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const timeRef = useRef<number>(0);
  const frameRef = useRef<number>(0);

  // Initialize the scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera (orthographic for full-screen quad)
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2() },
        uIntensity: { value: intensity },
        uSpeed: { value: speed },
        uColorA1: { value: new THREE.Color('#000000').toArray() },
        uColorA2: { value: new THREE.Color('#333333').toArray() },
        uColorB1: { value: new THREE.Color('#222222').toArray() },
        uColorB2: { value: new THREE.Color('#888888').toArray() },
      },
      vertexShader: `
        varying vec2 vUv;
        
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uResolution;
        uniform float uIntensity;
        uniform float uSpeed;
        uniform vec3 uColorA1;
        uniform vec3 uColorA2;
        uniform vec3 uColorB1;
        uniform vec3 uColorB2;
        
        varying vec2 vUv;
        
        // Simplex 2D noise
        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                   -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy));
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
          + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
            dot(x12.zw,x12.zw)), 0.0);
          m = m*m;
          m = m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }
        
        void main() {
          // Normalized pixel coordinates
          vec2 uv = vUv;
          float time = uTime * uSpeed;
          
          // Create multiple layers of noise with different frequencies and speeds
          float scale1 = 2.0 + sin(time * 0.1) * 0.5;
          float scale2 = 4.0 + cos(time * 0.15) * 0.5;
          float scale3 = 6.0 + sin(time * 0.2) * 0.5;
          
          float noise1 = snoise(uv * scale1 + vec2(time * 0.1, time * 0.08)) * 0.5 + 0.5;
          float noise2 = snoise(uv * scale2 + vec2(time * -0.15, time * 0.12)) * 0.5 + 0.5;
          float noise3 = snoise(uv * scale3 + vec2(time * 0.08, time * -0.1)) * 0.5 + 0.5;
          
          // Combine noise layers with different weights
          float combinedNoise = 
            noise1 * 0.5 + 
            noise2 * 0.3 + 
            noise3 * 0.2;
          
          // Apply intensity
          combinedNoise = pow(combinedNoise, 1.0 + (1.0 - uIntensity) * 2.0);
          
          // Create two gradient layers that morph independently
          vec2 gradientPos1 = vec2(
            0.5 + sin(time * 0.2) * 0.5,
            0.5 + cos(time * 0.3) * 0.5
          );
          
          vec2 gradientPos2 = vec2(
            0.5 + cos(time * 0.25) * 0.5,
            0.5 + sin(time * 0.35) * 0.5
          );
          
          // Calculate distances for radial gradients
          float dist1 = distance(uv, gradientPos1);
          float dist2 = distance(uv, gradientPos2);
          
          // Create smooth gradients
          float gradient1 = smoothstep(0.0, 1.5, dist1);
          float gradient2 = smoothstep(0.0, 1.5, dist2);
          
          // Mix colors based on gradients and noise
          vec3 color1 = mix(uColorA1, uColorA2, gradient1);
          vec3 color2 = mix(uColorB1, uColorB2, gradient2);
          
          // Final color mix with noise influence
          vec3 finalColor = mix(color1, color2, combinedNoise);
          
          // Output final color
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    });
    materialRef.current = material;

    // Create a full-screen quad
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Set initial size
    updateSize();

    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      updateSize();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);

      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // Update colors when colorScheme changes
  useEffect(() => {
    if (!materialRef.current) return;

    let colorA1, colorA2, colorB1, colorB2;

    switch (colorScheme) {
      case 'vercel':
        colorA1 = new THREE.Color('#000000');
        colorA2 = new THREE.Color('#333333');
        colorB1 = new THREE.Color('#222222');
        colorB2 = new THREE.Color('#888888');
        break;
      case 'blue':
        colorA1 = new THREE.Color('#000033');
        colorA2 = new THREE.Color('#0066ff');
        colorB1 = new THREE.Color('#003366');
        colorB2 = new THREE.Color('#00ccff');
        break;
      case 'purple':
        colorA1 = new THREE.Color('#330033');
        colorA2 = new THREE.Color('#6600ff');
        colorB1 = new THREE.Color('#660066');
        colorB2 = new THREE.Color('#cc00ff');
        break;
      case 'green':
        colorA1 = new THREE.Color('#003300');
        colorA2 = new THREE.Color('#00cc66');
        colorB1 = new THREE.Color('#006633');
        colorB2 = new THREE.Color('#66ff99');
        break;
      case 'rainbow':
        colorA1 = new THREE.Color('#ff0000');
        colorA2 = new THREE.Color('#0000ff');
        colorB1 = new THREE.Color('#00ff00');
        colorB2 = new THREE.Color('#ff00ff');
        break;
    }

    materialRef.current.uniforms.uColorA1.value = colorA1.toArray();
    materialRef.current.uniforms.uColorA2.value = colorA2.toArray();
    materialRef.current.uniforms.uColorB1.value = colorB1.toArray();
    materialRef.current.uniforms.uColorB2.value = colorB2.toArray();
  }, [colorScheme]);

  // Update intensity and speed when they change
  useEffect(() => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uIntensity.value = intensity;
  }, [intensity]);

  useEffect(() => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uSpeed.value = speed;
  }, [speed]);

  // Update renderer and camera size
  const updateSize = () => {
    if (
      !containerRef.current ||
      !rendererRef.current ||
      !cameraRef.current ||
      !materialRef.current
    )
      return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    rendererRef.current.setSize(width, height);
    materialRef.current.uniforms.uResolution.value.set(width, height);
  };

  // Animation loop
  const animate = () => {
    frameRef.current = requestAnimationFrame(animate);

    if (
      !sceneRef.current ||
      !cameraRef.current ||
      !rendererRef.current ||
      !materialRef.current
    )
      return;

    timeRef.current += 0.01;
    materialRef.current.uniforms.uTime.value = timeRef.current;

    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0 w-full h-full', className)}
    />
  );
}
