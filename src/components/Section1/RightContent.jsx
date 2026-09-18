
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='p-6 flex flex-nowrap gap-10 h-full w-2/3 overflow-x-auto rounded-4xl'>
      {props.users.map(function(elem, idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
