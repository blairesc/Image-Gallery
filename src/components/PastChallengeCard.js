import React from 'react'
import ChallengeCardImages from './ChallengeCardImages'
import PastCardFeature from './PastCardFeature'

const PastChallengeCard = () => {
  return (
    <div className='grid place-items-center md:grid-cols-2 md:gap-x-4 md:gap-y-24 mb-14'>
        <ChallengeCardImages />
        <PastCardFeature />
    </div>
  )
}

export default PastChallengeCard