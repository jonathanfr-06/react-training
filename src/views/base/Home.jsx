import Header from '../../../src/components/reusables/header.jsx'
import Welcome from '../../../src/components/blocks/Welcome.jsx'
import List from '../../../src/components/products/List.jsx'

function Home()
{
    return (
        <div>
            <Header />
            <Welcome />
            <List />
        </div>
    )
}

export default Home;