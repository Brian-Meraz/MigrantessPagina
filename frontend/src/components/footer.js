import React, { Component } from 'react'
import Footer from '../assets/img/logo_footer_web-es_0.png'


export default class footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className='container'>
            <div className='row'>
                {/* First Coulum */}
                <div className='col'>
                    <ul className='list-unstyled'>
                        <li>
                            <img src={Footer} className='navbar-brand' alt=''></img>
                        </li>
                    </ul>
                </div>
                {/* Second Coulum */}
                <div className='col'>
                    <ul className='list-unstyled'>
                        <li><b>Cotacto</b></li>
                        <li><b>Oficina Regional para Centroamérica, Norteamérica y el Caribe</b></li>
                        <li>Correo Electrónico: iomsanjose2@iom.int</li>
                        <li>Vacantes Disponibles</li>
                    </ul>
                </div>
                {/** */}
            </div>
        </div>
      </div>
    )
  }
}
