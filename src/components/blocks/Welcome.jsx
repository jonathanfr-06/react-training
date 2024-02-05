import '../../../src/assets/css/components/blocks/welcome.css'
import red from '../../../src/assets/images/blocks/red.jpeg'
import blue from '../../../src/assets/images/blocks/blue.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Welcome() {

    return (
        <div class='welcome-block'>
            <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} interval={5000}>
            <img className='carrousel-image' src={red} alt='Fjord mountains' />
            <img className='carrousel-image' src={blue} alt='Fjord mountains' />
            </Carousel>
        </div>
    )
}

export default Welcome;