import React from 'react'
import ChallengeCardFeature from './ChallengeCardFeature'
import ChallengeCardImages from './ChallengeCardImages'

const ChallengeCard = ({ title, text, numOfImages, images }) => {
  return (
    <div className='grid place-items-center lg:grid-cols-2 gap-x-4 mb-14'>
        <ChallengeCardImages images={images} numOfImages={numOfImages} />
        <ChallengeCardFeature title={title} text={text}  />
    </div>
  )
}

export default ChallengeCard