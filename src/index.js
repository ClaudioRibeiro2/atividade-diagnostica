import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Listagem from './pages/listagem/Listagem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/listagem' element={<Listagem/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);