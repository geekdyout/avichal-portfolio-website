import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import resumeData from '../data/resumeData';

const Home: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Enhanced Gravity Lens Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions with higher pixel density
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Enhanced Particle Class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      color: string;
      vx: number;
      vy: number;
      baseColor: string;
      noise: number;

      constructor(width: number, height: number) {
        this.baseSize = Math.random() * 2 + 1;
        this.size = this.baseSize;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseColor = `hsl(${Math.random() * 60 + 220}, 100%, 70%)`;
        this.color = this.baseColor;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.noise = Math.random();
      }

      update(mouse: { x: number; y: number }, width: number, height: number) {
        // Enhanced mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // More complex gravity lens effect
        if (distance < 200) {
          // Adaptive force based on proximity
          const force = Math.pow((200 - distance) / 200, 2);

          // Non-linear velocity adjustment
          this.vx += (dx / distance) * force * 0.3;
          this.vy += (dy / distance) * force * 0.3;

          // Size and color variation
          this.size = this.baseSize * (1 + force * 2);
          this.color = `hsla(${
            parseInt(this.baseColor.split('(')[1]) + force * 50
          }, 100%, 70%, ${1 - force * 0.5})`;
        } else {
          // Gradual return to original state
          this.size = this.baseSize;
          this.color = this.baseColor;
        }

        // Add subtle Perlin-like noise
        this.vx += (Math.random() - 0.5) * 0.05;
        this.vy += (Math.random() - 0.5) * 0.05;

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Velocity dampening
        this.vx *= 0.97;
        this.vy *= 0.97;

        // Wrap around edges with smoother transition
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.size;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow
      }
    }

    // Particle system
    const particles: Particle[] = [];

    // Create particles with dynamic count
    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    createParticles();

    // Mouse position tracking
    let mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(mouse, canvas.width, canvas.height);
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-5"
        style={{ pointerEvents: 'none' }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold space-font text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-neon">Hello, I'm</span>
              <br />
              {resumeData.name}
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-space-accent mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {resumeData.title}
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {resumeData.bio}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/projects">
                <motion.button 
                  className="px-6 py-3 bg-space-accent text-white rounded-md hover:bg-neon hover:text-space-dark transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button 
                  className="px-6 py-3 border border-neon text-neon rounded-md hover:bg-neon hover:text-space-dark transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="hidden md:block md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="relative w-full h-80">
              <div className="absolute inset-0 bg-space-purple rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-space-blue rounded-full opacity-40"></div>
              <div className="absolute inset-8 bg-space-dark rounded-full flex items-center justify-center">
                <div className="text-6xl text-neon space-font font-bold animate-float">AV</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Home;