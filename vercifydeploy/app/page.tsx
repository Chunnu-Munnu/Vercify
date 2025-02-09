"use client"
import React, { useEffect, useRef, useState} from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, CheckCircle, AlertTriangle, Zap, ArrowRight, Brain, Sparkles } from 'lucide-react';
import Navbar from '@/components/navbar';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      const { clientX, clientY } = 'touches' in e ? e.touches[0] : e;
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={ref} className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="fixed inset-0 bg-black">

        {/* Background Grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(0,0,0,0) 70%)',
            x: useTransform(x, (value) => value - 250),
            y: useTransform(y, (value) => value - 250),
          }}
        />
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(0,0,0,0) 70%)',
            x: useTransform(x, (value) => value - 400),
            y: useTransform(y, (value) => value - 400),
            rotate: useTransform(x, [-400, 400], [-15, 15]),
          }}
        />
      </div>

      <div className="relative min-h-screen">

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-50" />

        <div className="relative container mx-auto px-6 pt-20 pb-20">
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-20"
          >
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-5xl font-black bg-gradient-to-r from-white via-blue-600 to-purple-800 bg-clip-text text-transparent">
                Vercify
              </span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, 0] 
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
              />
              <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-purple-600 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Truth at the
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-800 to-blue-800 bg-clip-text text-transparent">
                  Speed of AI
                </span>
              </h1>
              <p className="text-bold text-white mb-12 max-w-xl">
                Experience real-time fact verification powered by cutting-edge artificial intelligence. 
                Uncover truth in seconds.
              </p>
              <motion.a
                href="/homee"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center px-12 py-4 text-lg font-bold overflow-hidden rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-size-200 transition-all duration-500 hover:bg-right-100"
              >
                <span className="relative z-10 flex items-center">
                  Try Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Sparkles className="ml-2 w-5 h-5" />
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: "radial-gradient(circle, rgba(139,92,246,0.8) 0%, rgba(0,0,0,0) 70%)",
                    x: useTransform(mouseX, [0, 1000], [-100, 100]),
                    y: useTransform(mouseY, [0, 1000], [-100, 100]),
                  }}
                />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: <Brain className="w-8 h-8 text-pink-600" />,
                  title: "AI-Powered",
                  description: "Advanced neural networks for precise verification",
                },
                {
                  icon: <Zap className="w-8 h-8 text-yellow-600" />,
                  title: "1 s Speed",
                  description: "Lightning-fast results in seconds",
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-800" />,
                  title: "Secure & Private",
                  description: "Enterprise-grade security protocols",
                },
                {
                  icon: <AlertTriangle className="w-8 h-8 text-red-800" />,
                  title: "Fake News Shield",
                  description: "Real-time misinformation detection",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-black backdrop-blur-xl border border-gray-800/50 hover:border-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -5, 10, 10] }}
                    transition={{ duration: 0.4 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold mt-5 mb-2 bg-gradient-to-r from-white to-purple-800 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-sm bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              { value: "100+", label: "Facts Verified Daily" },
              { value: "95.0%", label: "Accuracy Rate" },
              { value: "1s", label: "Response Time" },].map((stat, index) => (
              <motion.div key={index}
                whileHover={{ scale: 1.05 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-800/50 overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    x: useTransform(mouseX, [0, 1000], [-100, 100]),
                    y: useTransform(mouseY, [0, 1000], [-100, 100]),
                  }}
                />
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.2 }}
                    className="text-4xl text-bold bg-gradient-to-r from-purple-600 via-blue-800 to-purple-800 bg-clip-text text-transparent"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}