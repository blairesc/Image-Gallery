import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';

const VideoGrid = ({ searchTerm }) => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch(`https://pixabay.com/api/videos/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${searchTerm}&pretty=true&per_page=121`)
            .then(res => res.json())
            .then(data => {
                setVideos(data.hits);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [searchTerm]);

    return (
    <div className='container mx-auto mb-5 px-6 md:px-10'>

        {!isLoading && videos.length === 0 && 
            <h1 className='mx-auto text-3xl text-center'> No visuals found for "<span className='italic text-slate-500'>{searchTerm}</span>"
             <br/> Try to refine your search. </h1> }

        {isLoading ? 
            <h1 className='mx-auto text-6xl text-center'>Loading...</h1> : 
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
                {videos.map(video => (
                    <VideoCard key={video.id} video={video}/>
                ))}
            </div>
        }
    </div>
    )
}

export default VideoGrid;