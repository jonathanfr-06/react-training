import '../../../src/assets/css/components/blocks/welcome.css'
import red from '../../../src/assets/images/blocks/red.jpg'
import blue from '../../../src/assets/images/blocks/blue.jpg'


function Welcome() {

    return (
        <div class='welcome-block'>
            <img className='carrousel-image' src={red} alt='Fjord mountains' />
            <img className='carrousel-image' src={blue} alt='Fjord mountains' />
        </div>
    )
}

export default Welcome;