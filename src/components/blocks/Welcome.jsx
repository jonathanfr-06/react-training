import '../../../src/assets/css/components/blocks/welcome.css'
import red from '../../../src/assets/images/blocks/red.jpg'
import blue from '../../../src/assets/images/blocks/blue.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Welcome() {

    return (
        <div class='welcome-block'>
            <Carousel class='carousel-block' height="450px" dynamicHeight={true} autoPlay={true} infiniteLoop={true} showArrows={false} showIndicators={true} showStatus={false} interval={5000}>
            <img className='carrousel-image' src={red} alt='Sunset' />
            <img className='carrousel-image' src={blue} alt='Fjord mountains' />
            </Carousel>
        </div>
    )
}

export default Welcome;