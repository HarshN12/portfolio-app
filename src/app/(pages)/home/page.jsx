import Container from './Container'
import Hero from './hero'

function Home() {
    return (
        <div className='page Home'>
            <Hero/>
            <Container />
        </div>
    );
}

export default Home;