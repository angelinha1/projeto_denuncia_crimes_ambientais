import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import PowerBI from './pages/PowerBI/PowerBI'
import Contato from './pages/Contato/Contato'
import Artigos from './pages/Artigos/Artigos'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'


function ApplicationRoutes() {
    return(
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/powerbi" element={<PowerBI />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/artigos" element={<Artigos />} />
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}

export default ApplicationRoutes