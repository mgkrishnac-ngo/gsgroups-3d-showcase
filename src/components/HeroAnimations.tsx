import { motion } from 'framer-motion';

// Animation 1: Gradient Morph Orbs
export const GradientMorphOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute w-96 h-96 rounded-full opacity-20"
      style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)', top: '10%', left: '10%' }}
      animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-80 h-80 rounded-full opacity-15"
      style={{ background: 'radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)', bottom: '10%', right: '10%' }}
      animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 40, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-64 h-64 rounded-full opacity-10"
      style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

// Animation 2: Floating Grid Lines
export const FloatingGridLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.div
        key={`h-${i}`}
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        style={{ top: `${(i + 1) * 12}%` }}
        animate={{ opacity: [0.2, 0.6, 0.2], scaleX: [0.8, 1, 0.8] }}
        transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
      />
    ))}
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={`v-${i}`}
        className="absolute h-full w-px bg-gradient-to-b from-transparent via-secondary to-transparent"
        style={{ left: `${(i + 1) * 16}%` }}
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
      />
    ))}
  </div>
);

// Animation 3: Particle Wave
export const ParticleWave = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
        style={{ left: `${(i / 20) * 100}%`, top: '50%' }}
        animate={{
          y: [0, Math.sin(i * 0.8) * 60, 0],
          opacity: [0.2, 0.7, 0.2],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
      />
    ))}
  </div>
);

// Animation 4: Diagonal Sweep
export const DiagonalSweep = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-full w-32 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
        style={{ transform: 'skewX(-20deg)' }}
        animate={{ x: ['-200%', '300%'] }}
        transition={{ duration: 6 + i, repeat: Infinity, ease: 'linear', delay: i * 1.5 }}
      />
    ))}
  </div>
);

// Animation 5: Pulsing Rings
export const PulsingRings = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
    {Array.from({ length: 4 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-primary/20"
        style={{ width: `${(i + 1) * 200}px`, height: `${(i + 1) * 200}px` }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
      />
    ))}
  </div>
);

// Animation 6: Aurora Waves
export const AuroraWaves = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute -bottom-1/2 left-0 right-0 h-full opacity-20"
      style={{ background: 'linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.15) 40%, hsl(var(--secondary) / 0.1) 70%, transparent 100%)', borderRadius: '50% 50% 0 0' }}
      animate={{ y: [0, -30, 0], scaleX: [1, 1.05, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -bottom-1/3 left-0 right-0 h-full opacity-15"
      style={{ background: 'linear-gradient(180deg, transparent 0%, hsl(var(--accent) / 0.1) 50%, transparent 100%)', borderRadius: '50% 50% 0 0' }}
      animate={{ y: [0, -20, 0], scaleX: [1.05, 1, 1.05] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    />
  </div>
);
