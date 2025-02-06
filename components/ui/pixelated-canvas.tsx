'use client';

import type React from 'react';
import { useRef, useEffect } from 'react';

class Pixel {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  color: string;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    speed: number,
    delay: number,
    animationSpeed: number = 1
  ) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed * animationSpeed; // Adjust speed
    this.size = 0;
    this.sizeStep = Math.random() * 0.4 * animationSpeed; // Adjust growth rate
    this.minSize = 0.5;
    const maxSizeInteger = 2;
    this.maxSize = this.getRandomValue(this.minSize, maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep =
      (Math.random() * 4 + (this.width + this.height) * 0.01) * animationSpeed;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = 2 * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.x + centerOffset,
      this.y + centerOffset,
      this.size,
      this.size
    );
  }

  appear() {
    this.isIdle = false;

    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }

    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }

    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }

    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;

    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.1;
    }

    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }

    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

interface PixelHoverEffectProps extends React.ComponentProps<'div'> {
  colors?: string[];
  gap?: number;
  speed?: number;
  noFocus?: boolean;
  animationSpeed?: number;
}

const PixelHoverEffect: React.FC<PixelHoverEffectProps> = ({
  children,
  colors = ['#f8fafc', '#f1f5f9', '#cbd5e1'],
  gap = 5,
  speed = 35,
  noFocus = false,
  animationSpeed = 1, // Default value
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeObserver = new ResizeObserver(() => initCanvas());
    resizeObserver.observe(container);

    function createPixels() {
      if (!canvas || !ctx) return;
      pixelsRef.current = [];
      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          const delay = getDistanceToCanvasCenter(x, y);
          if (delay)
            pixelsRef.current.push(
              new Pixel(
                canvas,
                ctx,
                x,
                y,
                color,
                speed * 0.001,
                delay,
                animationSpeed
              ) // Pass animationSpeed
            );
        }
      }
    }

    function initCanvas() {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const width = Math.floor(rect.width);
      const height = Math.floor(rect.height);

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      createPixels();
    }

    function getDistanceToCanvasCenter(x: number, y: number) {
      if (!canvas) return;
      const dx = x - canvas.width / 2;
      const dy = y - canvas.height / 2;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function animate(fnName: 'appear' | 'disappear') {
      if (!canvas) return;
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let allIdle = true;
      for (const pixel of pixelsRef.current) {
        pixel[fnName]();
        if (!pixel.isIdle) allIdle = false;
      }

      if (allIdle) {
        cancelAnimationFrame(animationRef.current!);
      } else {
        animationRef.current = requestAnimationFrame(() => animate(fnName));
      }
    }

    function handleAnimation(name: 'appear' | 'disappear') {
      cancelAnimationFrame(animationRef.current!);
      animationRef.current = requestAnimationFrame(() => animate(name));
    }

    container.addEventListener('mouseenter', () => handleAnimation('appear'));
    container.addEventListener('mouseleave', () =>
      handleAnimation('disappear')
    );

    if (!noFocus) {
      container.addEventListener('focusin', (e) => {
        if (e.currentTarget === e.target) handleAnimation('appear');
      });
      container.addEventListener('focusout', (e) => {
        if (e.currentTarget === e.target) handleAnimation('disappear');
      });
    }

    initCanvas();

    return () => {
      resizeObserver.disconnect();
      container.removeEventListener('mouseenter', () =>
        handleAnimation('appear')
      );
      container.removeEventListener('mouseleave', () =>
        handleAnimation('disappear')
      );
      if (!noFocus) {
        container.removeEventListener('focusin', () =>
          handleAnimation('appear')
        );
        container.removeEventListener('focusout', () =>
          handleAnimation('disappear')
        );
      }
      cancelAnimationFrame(animationRef.current!);
    };
  }, [colors, gap, speed, noFocus, animationSpeed]); // Add animationSpeed to dependencies

  return (
    <div
      ref={containerRef}
      {...props}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
      {children}
    </div>
  );
};

export default PixelHoverEffect;
