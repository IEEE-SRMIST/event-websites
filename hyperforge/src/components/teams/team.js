import React from 'react'
import team from '../../utils/people'


const Team = () => {
  return (
    <div id="teams" className='text-lexand pb-20 text-white px-10 lg:px-20 xl:px-60' style={{ position: 'relative', zIndex: '1' }}>
      <h1 className="text-robotomono text-3xl pb-10 text-center lg:text-left pl-4 ">Meet The Team!</h1>
      <p className='text-lexand max-w-2xl text-justify pl-3'>Our talented team consists of experienced professionals who are passionate about blockchain technology and its potential. Learn more about the individuals behind HyperForge and their contributions to this exciting event. </p>
      <div className="list-none pt-20 grid justify-center mx-auto md:grid-cols-2 lg:grid-cols-4">
        {team.map((member, idx) => (
          <a href={member.linkedin} key={idx} target="_blank" >
            <div className=' h-36 w-36 mt-6 mx-auto my-auto  '>
            <img src={member.image} className=' h-full w-full rounded-full object-cover  ' alt="speaker" />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Team