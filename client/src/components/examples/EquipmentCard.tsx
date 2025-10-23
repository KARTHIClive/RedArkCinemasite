import EquipmentCard from '../EquipmentCard'
import { Camera } from 'lucide-react'
import cameraImage from '@assets/generated_images/Professional_camera_equipment_0a850baa.png'

export default function EquipmentCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <EquipmentCard
        title="Camera Unit"
        description="Professional cinema cameras for every production need"
        features={['4K/6K/8K Capture', 'RED & ARRI Systems', 'Complete Lens Packages']}
        image={cameraImage}
        icon={Camera}
      />
    </div>
  )
}
