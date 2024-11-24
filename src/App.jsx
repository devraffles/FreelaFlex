import './App.css';
import {useEffect} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useLocalStorage from "use-local-storage";



import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';

import Home from './pages/home/home.jsx';
import Proposta from './pages/proposta/proposta.jsx';
import List from './pages/projeto/list/list.jsx';
import Projeto from './pages/projeto/form/form.jsx';
import MyProjects from './pages/myprojects/myprojects.jsx';
import MyProposal from './pages/myproposals/proposals.jsx';
import AtualizarProjeto from './pages/projeto/form/AtualizarProjeto/AtualizarProjeto.jsx';
import NotFound from './pages/notfound/notfound.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {
  const [isDark, setisDark] = useLocalStorage("isDark", false);
  
  useEffect(() => {
    AOS.init();
  }, [])





  return (
      <BrowserRouter>
        <div className="App" data-theme={isDark ? "dark" : "light"}>
          <Header 
            isChecked={isDark}
            handleChange={() => setisDark(!isDark)}/>
            <Routes>

              <Route path='/' element={< Home/>} />
              <Route path='/proposta' element={<Proposta />} />
              <Route path='/projeto' element={<List />} />
              <Route path='/atualiza/projeto/:id' element={<AtualizarProjeto />} />
              <Route path='/criar/projeto' element={<Projeto />} />
              <Route path='/myprojects' element={<MyProjects />}/>
              <Route path='/myproposals' element={<MyProposal/>}/>
              <Route path='*' element={<NotFound/>}/>

            </Routes>
          <Footer 
            isChecked={isDark}
            handleChange={() => setisDark(!isDark)}/>
        </div>
      </BrowserRouter>
  );
}