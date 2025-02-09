'use client';
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

function Suggestions() {
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;

    const mailtoLink = `mailto:vercify09@gmail.com?subject=VERCIFY SUGGESTION&body=${encodeURIComponent(suggestion)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-2xl rounded-xl border bg-card text-card-foreground shadow-lg p-6 relative"
        whileHover={{ scale: 1.02 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className= "from-white to-purple-800 bg-clip-text text-transparent bg-gradient-to-r"> Submit a Suggestion </span>
        </motion.h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="suggestion" className="block text-sm font-medium mb-2">
              Your Suggestion
            </label>
            <motion.textarea
              id="suggestion"
              rows={5}
              className="w-full rounded-lg border bg-background px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              placeholder="Share your ideas for improving Vercify..."
              whileFocus={{ scale: 1.01, boxShadow: '0px 0px 10px rgba(255,255,255,0.2)' }}
            />
          </div>
          <motion.button
            type="submit"
            disabled={!suggestion.trim()}
            className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 px-5 py-3 text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: suggestion.trim() ? 1.05 : 1 }}
            whileTap={{ scale: suggestion.trim() ? 0.95 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <Send className="h-5 w-5" />
            Submit Suggestion
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Suggestions;