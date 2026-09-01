'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Reveal({ children, className, delay = 0, y = 24, once = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay }}
      viewport={{ once, margin: '-80px' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
