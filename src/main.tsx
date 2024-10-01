import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About/About'; // Импорт страницы "О нас"
import Header from './Header/Header.tsx';
import Footer from './Footer/Footer.tsx';
import Contacts from './pages/Contacts/contacts.tsx';
import Education from './pages/Education/education.tsx';
import Login from './pages/Login/login.tsx';
import News from './pages/News/news.tsx';
import Staff from './pages/Staff/staff.tsx';
import Vacancies from './pages/Vacancies/vacancies.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='education' element={<Education />} />
        <Route path='login' element={<Login />} />
        <Route path='news' element={<News />} />
        <Route path='staff' element={<Staff />} />
        <Route path='vacancies' element={<Vacancies />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
