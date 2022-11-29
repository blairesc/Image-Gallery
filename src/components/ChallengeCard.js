import React from 'react'
import ChallengeCardFeature from './ChallengeCardFeature'
import ChallengeCardImages from './ChallengeCardImages'

const ChallengeCard = () => {
  return (
    <div className='grid place-items-center md:grid-cols-2 md:gap-x-4 md:gap-y-24 mb-14'>
        <ChallengeCardImages />
        <ChallengeCardFeature />
    </div>
  )
}

export default ChallengeCard