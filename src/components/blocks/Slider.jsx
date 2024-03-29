import '../../../src/assets/css/components/blocks/slider.css'
import React, { useState, useEffect } from 'react';
import { getRandomPicture } from '../../services/lorempicsum';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    const [images, setImages] = useState([]);

    async function getImg() {
        for (let i = 0; i < 3; i++) {
            const newImage = await getRandomPicture(1800, 450);
            setImages(prevImages => [...prevImages, newImage]);
        }
    }
    useEffect(() => {
        setImages([]);
        getImg();
    }, []);

    return (
        <div className='slider-block'>
            <Carousel className='carousel-block' autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={true} showStatus={false} interval={5000}>
                {images.map((image) => (
                    <img className='carrousel-image' src={image} alt='Sunset' />
                ))}
            </Carousel>
        </div>
    )
}

export default Slider;