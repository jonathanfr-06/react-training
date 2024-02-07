import '../../../src/assets/css/components/blocks/welcome.css'
import red from '../../../src/assets/images/blocks/red.jpg'
import blue from '../../../src/assets/images/blocks/blue.jpg'
import night from '../../../src/assets/images/blocks/night.jpeg'
import green from '../../../src/assets/images/blocks/green.jpeg'



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Welcome() {

    return (
        <div class='welcome-block'>
            <Carousel className='carousel-block' autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={true} showStatus={false} interval={5000}>
            <img className='carrousel-image' src={red} alt='Sunset' />
            <img className='carrousel-image' src={blue} alt='Fjord mountains' />
            <img className='carrousel-image' src={green} alt='Green landscape mountains' />
            <img className='carrousel-image' src={night} alt='Night mountains' />



            </Carousel>
        </div>
    )
}

export default Welcome;