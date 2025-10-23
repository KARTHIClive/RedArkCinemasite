import ServiceCard from '../ServiceCard'
import { Film } from 'lucide-react'

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ServiceCard
        title="Film Editing"
        description="Professional editing services with the latest software and expert editors to bring your vision to life"
        icon={Film}
      />
    </div>
  )
}
