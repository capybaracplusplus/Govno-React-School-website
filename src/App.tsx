import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Question from './pages/Main/Question/Accordion';
import Teachgers_Slider from './pages/Main/Teachgers_Slider/Teachgers_Slider';
import SliderPhoto from './pages/Main/SliderPhoto/SliderPhoto';
import Achievements from './pages/Main/Achievements/Achievements';
import DirectorPhoto from './pages/Main/DirectorPhoto/DirectorPhoto';

function App() {
    return (
        <>
            <main className='Main'>
                <Routes>
                    <Route path="/" element={
                        <>
                            <SliderPhoto />
                            <div className='DirectorPhoto_Teachgers_Slider container'>
                                 <Achievements />
                                 <DirectorPhoto /> 
                            </div><Teachgers_Slider /> 
                            <Question />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
