import { ReactNode } from 'react'

export interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export interface StepCardProps {
  number: number
  title: string
  description: string
}

export interface MetricProps {
  icon: ReactNode
  value: string
  label: string
}

