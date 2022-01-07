import { FunctionComponent } from "react"
import { IService } from '../type'

const ServiceCard: FunctionComponent<{ service: IService }> = ({ service: { Icon, title, desc } }) => {

  return (
    <div className="flex items-center w-full p-2">
      <div className="p-1">
        <Icon className="w-10 h-10 text-green-500" />
      </div>
      <div>
        <h4 className="font-bold font-Ubuntu">{title}</h4>
        <p className="text-sm font-Averia text-left py-2">{desc}</p>
      </div>
    </div>
  )
}

export default ServiceCard
