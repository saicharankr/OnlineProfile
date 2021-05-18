import { FunctionComponent } from "react"
import { ISkill } from "../type"

const Bar: FunctionComponent<{
  data:ISkill
}> = ({ data: { Icon, name, level } }) => {
  
  const bar_width = `${level}%`

  const createMarkUp = () => {
    return {
      __html:name
    }
  }
  
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-white-200 ">
      <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-green-500" style={{width:bar_width}}>
        <Icon className="mr-3"/>
      <h1 className="px-2 text-xl font-light text-left break-words font-Averia" dangerouslySetInnerHTML={createMarkUp()}/>
      </div>
     
    </div>
  )
}

export default Bar
