import React from 'react'
import ChallengeCardFeature from './ChallengeCardFeature'
import ChallengeCardImages from './ChallengeCardImages'

const ChallengeCard = () => {
  return (
    <div className='grid place-items-center lg:grid-cols-2 lg:gap-x-4 lg:gap-y-24 mb-14'>
        <ChallengeCardImages />
        <ChallengeCardFeature />
    </div>
  )
}

export default ChallengeCard