import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';


const ImageGrid = ({ searchTerm }) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${searchTerm}&image_type=photo&per_page=51`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [searchTerm]);

    return (
    <div className='container mx-auto mb-5 px-6 md:px-4'>

        {!isLoading && images.length === 0 && 
            <h1 className='mx-auto text-3xl text-center'> No visuals found for "<span className='italic text-slate-500'>{searchTerm}</span>"
             <br/> Try to refine your search. </h1> }

        {isLoading ? 
            <h1 className='mx-auto text-6xl text-center'>Loading...</h1> : 
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-4'>
                {images.map(image => (
                    <ImageCard key={image.id} image={image}/>
                ))}
            </div>
        }
    </div>
    )
}

export default ImageGrid;