import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Question from './pages/Main/Question/Question';
import Teachgers_Slider from './pages/Main/Teachgers_Slider/Teachgers_Slider';
import SliderPhoto from './pages/Main/SliderPhoto/SliderPhoto';
import Achievements from './pages/Main/Achievements/Achievements';
import PhotoOfDirector from './pages/Main/PhotoOfDirector/PhotoOfDirector';

function App() {
    return (
        <>
            <Header /> 
            <main className='Main'>
                <Routes>
                    <Route path="/" element={
                        <>
                            <SliderPhoto />
                            <Achievements />
                            <PhotoOfDirector />
                            <Teachgers_Slider />
                            <Question />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
