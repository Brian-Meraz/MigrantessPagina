import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Navegacion-Header
import Navigation from './components/Navigation'

//Footer
import Footer from './components/footer'

import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'


//Ejes Tematicos
import Comunicacion from './components/EjesTematicos/Comunicacion'
import DatosMigratorios from './components/EjesTematicos/DatosMigratorios'
import EjesTematicos from './components/EjesTematicos/Ejes-tematicos'
import Emergencias from './components/EjesTematicos/Emergencias'
import MigracionLaboral from './components/EjesTematicos/MigracionLaboral'

//Maleta Educativa
import MaletaEducativa from './components/MaletaEducativa/Maleta-Educativa'
import ComoUsar from './components/MaletaEducativa/ComoUsar'

//Noticias
import Noticia from './components/Noticias/Noticia'

//Quienes Somos
import QuienesSomos from './components/QuienesSomos/QuienesSomos'
import Nosotros from './components/QuienesSomos/Nosotros'

//Ventanillas
import Ventanillas from './components/ventanillas/Ventanillas'

import './App.css';

function App() {
  return (
    <Router>
    <div className="page-container">
    <div className='content-wrap'>
      <Navigation />    
        <Route path="/" exact component={NotesList} />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />

        <Route path='/ejes-tematicos/comunicacion' component={Comunicacion} />
        <Route path='/ejes-tematicos/datos-migratorios' component={DatosMigratorios} />
        <Route path='/ejes-tematicos' component={EjesTematicos} />
        <Route path='/ejes-tematicos/emergencias' component={Emergencias} />
        <Route path='/ejes-tematicos/migracion-laboral' component={MigracionLaboral} />
      
      
        <Route path='/maleta-educativa' component={MaletaEducativa} />
        <Route path='/maleta-educativa/como-usar' component={ComoUsar} />


        <Route path='/noticia' component={Noticia} />


        <Route path='/quienes-somos' component={QuienesSomos} />
        <Route path='/quienes-somos/nosotros' component={Nosotros} />


        <Route path='/ventanillas' component={Ventanillas} />
      </div>
      
      <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
