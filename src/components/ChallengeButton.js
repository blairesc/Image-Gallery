import React from 'react'

const ChallengeButton = ({ text }) => {
  return (
    <div>
        <button className='bg-black text-white font-semibold cursor border py-1.5 md:py-3 px-6 rounded-md border-black hover:bg-white hover:text-black'>
            {text}
        </button>
    </div>
  )
}

export default ChallengeButton