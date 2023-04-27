import React from 'react'
import { TiTickOutline } from 'react-icons/ti'
import { IoClose } from 'react-icons/io5'
import { RiCloseCircleLine } from 'react-icons/ri'
import StatesIcon from './StatesIcon'
import CommonButton from './CommonButton'


const TaskCard = (props) => {
  const {title,description, dueDate, states} = props
  return (
    <div className='relative mt-5 p-5 border-2 border-neutral-900 shadow-2xl hover:scale-105 transition delay-75'>
      <div className='absolute top-2 right-2 cursor-pointer'><RiCloseCircleLine className='text-4xl text-red-600' /></div>
      <div className='flex justify-between  items-center text-4xl pt-5'>
        <div className=' space-y-4 '>
          <div >
            <span className='font-semibold'>Task : </span>
            <span className='font-bold'>{title}</span>

          </div>
            <div>
              <span className='font-semibold'>Description : </span>
              <span className='font-bold'>{description}</span>
            </div>
          <div>
            <span className='font-semibold'>Date : </span>
            <span className='font-bold'>{dueDate}</span>
          </div>

        </div>
        <div className='flex flex-col justify-start items-end '>


          {states === "done" ? <StatesIcon icon={<TiTickOutline className='text-5xl text-white' />} bgColor={"bg-green-600"} />
          :<StatesIcon icon={<IoClose className='text-5xl text-white'/>} bgColor ={"bg-red-600"}/>}

        </div>
      </div>
      <div className='flex justify-evenly items-center pt-4'>
        <CommonButton title={"Mark as done"} width={"w-60"} bgColor={"bg-green-600"} bgHoverColor={""} borderColor={"border-green-700"} hoverBorderColor={"border-sky-800"} />
        <CommonButton title={"Mark as cancel"} width={"w-60"} bgColor={"bg-red-600"} bgHoverColor={""} borderColor={"border-red-700"} hoverBorderColor={"border-sky-800"} />
      </div>

    </div>
  )
}

export default TaskCard