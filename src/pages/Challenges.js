import React from 'react';
import ChallengeCard from '../components/ChallengeCard';
import Footer from '../components/Footer';
import PastChallengeCard from '../components/PastChallengeCard';

const Challenges = () => {
  const challengeProp = {
    title: 'Homepage Challenge: Red',
    text: 'Submit your best photos and videos featuring the color red!',
    numOfImages: '708',
    images: {
      img1: 'http://images.pexels.com/photos/3444345/pexels-photo-3444345.png?auto=compress&cs=tinysrgb&w=600',
      img2: 'http://images.pexels.com/photos/3694706/pexels-photo-3694706.jpeg?h=400&w=300&fit=crop&dpr=2',
      img3: 'http://images.pexels.com/photos/715134/pexels-photo-715134.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  };

  const pastChallengeProp1 = {
    title: 'All Out Autumn',
    text: 'Share your photos + videos in the US',
    numOfImages: '2.3K',
    images: {
      img1: 'http://images.pexels.com/photos/3089988/pexels-photo-3089988.jpeg?auto=compress&cs=tinysrgb&h=400&w=280&fit=crop&crop=focalpoint&dpr=2',
      img2: 'http://images.pexels.com/photos/2422503/pexels-photo-2422503.jpeg?auto=compress&cs=tinysrgb&h=200&w=180&fit=crop&crop=focalpoint&dpr=2',
      img3: 'http://images.pexels.com/photos/3081752/pexels-photo-3081752.jpeg?h=400&w=300&fit=crop&dpr=2'
    }
  };

  const pastChallengeProp2 = {
    title: 'New York',
    text: 'Share the tons of gems of this great state!',
    numOfImages: '15K',
    images: {
      img1: 'http://images.pexels.com/photos/887848/pexels-photo-887848.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      img2: 'http://images.pexels.com/photos/3889856/pexels-photo-3889856.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      img3: 'http://images.pexels.com/photos/12890572/pexels-photo-12890572.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    }
  };

  return (
    <div>
      <h1 className='text-center text-4xl text-gray-800 font-semibold py-4 mb-8'>Challenges</h1>
      <ChallengeCard {...challengeProp} />

      <div className='bg-black pb-4'>
        <h1 className='text-center text-4xl text-white font-semibold py-4 mb-8'>Past Challenges</h1>
        <PastChallengeCard {...pastChallengeProp1} />
        <PastChallengeCard {...pastChallengeProp2} />
      </div>

      <Footer bgColor='bg-black' textColor='text-white' />
    </div>
  )
}

export default Challenges;