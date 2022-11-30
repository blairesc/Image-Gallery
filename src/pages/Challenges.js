import React from 'react'
import ChallengeCard from '../components/ChallengeCard'
import PastChallengeCard from '../components/PastChallengeCard'

const Challenges = () => {
  return (
    <div>
      <h1 className='text-center text-4xl text-gray-800 font-semibold py-4 mb-8'>Challenges</h1>
      <ChallengeCard />
      <ChallengeCard />

      <div className='bg-black pb-4'>
        <h1 className='text-center text-4xl text-white font-semibold py-4 mb-8'>Past Challenges</h1>
        <PastChallengeCard />
        <PastChallengeCard />
        <PastChallengeCard />
      </div>
    </div>
  )
}

export default Challenges