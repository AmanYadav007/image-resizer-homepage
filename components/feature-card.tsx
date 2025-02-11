'use client'

import { motion } from 'framer-motion'
import { FeatureCardProps } from '@/types'

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div 
      className="p-6 bg-gray-50 rounded-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  )
}

