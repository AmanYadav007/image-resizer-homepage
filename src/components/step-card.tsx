import { StepCardProps } from '@/types'

export const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="text-center" role="listitem">
      <div 
        className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto"
        aria-hidden="true"
      >
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

