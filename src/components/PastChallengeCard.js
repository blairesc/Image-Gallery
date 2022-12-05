import React from 'react'
import ChallengeCardImages from './ChallengeCardImages'
import PastCardFeature from './PastCardFeature'

const PastChallengeCard = ({ title, text, numOfImages, images }) => {
  return (
    <div className='grid place-items-center lg:grid-cols-2 gap-x-4 mb-14'>
        <ChallengeCardImages images={images} numOfImages={numOfImages} />
        <PastCardFeature title={title} text={text}  />
    </div>
  )
}

export default PastChallengeCard