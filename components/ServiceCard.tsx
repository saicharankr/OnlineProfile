import { FunctionComponent } from "react"
import {IService} from '../type'

const ServiceCard: FunctionComponent<{ service: IService }> = ({ service: { Icon, title, desc } }) => {
  const createMarkUp = () => {
    return {
      __html:desc
    }
  }
  return (
    <div className="flex items-center w-full p-2 lg:space-x-4 ">
      <Icon  className="w-20 h-20 p-2 text-green-500"/>
      <div>
        <h4 className="font-bold font-Averia">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkUp()} />
      </div>
    </div>
  )
}

export default ServiceCard
