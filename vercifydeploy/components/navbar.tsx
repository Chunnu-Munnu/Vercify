'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      className="border-b bg-white/10 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex h-20 items-center px-10">
        <Link href="/" className="flex items-center space-x-10">
          <Image
            src="/icon.svg"
            alt="Vercify"
            width={115}
            height={32}
            className="h-8 w-30"
          />
        </Link>

        <div className="ml-10 flex gap-6">
          <NavItem href="/homee">Home</NavItem>
          <NavItem href="/features">Features</NavItem>
          <NavItem href="/community">Community</NavItem>
          <NavItem href="/suggestions">Suggestions</NavItem>
        </div>
      </div>
    </motion.nav>
  );
}

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }}>
    <Link href={href} className="text-white text-sm font-medium transition-all hover:text-primary">
      {children}
    </Link>
  </motion.div>
);
