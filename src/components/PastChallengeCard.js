import React from 'react'
import ChallengeCardImages from './ChallengeCardImages'
import PastCardFeature from './PastCardFeature'

const PastChallengeCard = () => {
  return (
    <div className='grid place-items-center lg:grid-cols-2 lg:gap-x-4 lg:gap-y-24 mb-14'>
        <ChallengeCardImages />
        <PastCardFeature />
    </div>
  )
}

export default PastChallengeCard