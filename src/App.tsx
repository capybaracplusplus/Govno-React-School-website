import './App.css'
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Question from './Main/Question/Question';
import Teachgers_Slider from './Main/Teachgers_Slider/Teachgers_Slider'
import SliderPhoto from './Main/SliderPhoto/SliderPhoto'
import Achievements from './Main/Achievements/Achievements'
import PhotoOfDirector from './Main/PhotoOfDirector/PhotoOfDirector'


function App() {
    return (
        <>
            <Header />
            <main className='Main'>
                <SliderPhoto />
                <Achievements />
                <PhotoOfDirector />
                <Teachgers_Slider />
                <Question />
            </main>
            <Footer />
        </>
    )
}

export default App;
