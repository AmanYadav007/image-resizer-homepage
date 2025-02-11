import { Star, Users } from 'lucide-react'
import { MetricProps } from '@/types'

const Metric = ({ icon, value, label }: MetricProps) => (
  <div className="flex items-center gap-2">
    {icon}
    <span className="font-semibold">{value} {label}</span>
  </div>
)

export const Metrics = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
      <Metric 
        icon={<Star className="w-5 h-5 fill-current text-yellow-500" />}
        value="4.8"
        label="rating"
      />
      <Metric 
        icon={<Users className="w-5 h-5 text-blue-500" />}
        value="300+"
        label="users trust us"
      />
    </div>
  )
}

