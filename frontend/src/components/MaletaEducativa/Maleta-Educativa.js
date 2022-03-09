import React, { Component } from 'react'
import Interrogacion from '../../assets/sites/interrogacion.png'
import Descarga from '../..//assets/sites/Descarga.png'

export default class MaletaEducativa extends Component {
  render() {
    return (
      <div className="row">
          <div className='container-fluid'>
              
              <div className='banner '>
              <img src="https://www.programamesoamerica.iom.int/sites/all/themes/custom/iom2015/css-update/img/maleta-header-background-1.jpg" class="img-fluid" alt="banner"/>
              </div>
              <p>&nbsp;</p>
              <p>&nbsp;</p>

            <div className='container'>  
              <div className='preguntas' style={{ padding: "15px" }}>
                 <div className='row'>
                      <div className='col-12 mx-auto'>
                          <center><h1 style={{color: "blue"}}>¿Qué es la maleta educativa?</h1></center>
                          <p>&nbsp;</p>
                          <p>&nbsp;</p>
                          <p>                                            
                              La maleta educativa es una caja de herramientas para maestros, formadores y 
                              organizaciones comunitarias que deseen implementar dinámicas para informar 
                              sobre temas de migración. Pueden ser utilizadas como parte de actividades 
                              escolares y comunales, o insertadas a mediano plazo en programas académicos 
                              de instituciones educativas.
                          </p>
                      </div>
                  </div>
              </div>
          
          <div className='container'>
            <div className='container'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6 col-md-offset-1'>
                            <div className='panel panel-default'>
                              <div className='panel-heading'>
                                <div className='row'>
                                  <div>
                                    <img alt='' className='iconoIzquierdaGrande' src={Interrogacion}></img>
                                  </div>  
                                </div>
                                <div className='row'>
                                <div>
                                    <div className='tituloPilares'>
                                      <h4>
                                        <span>
                                          <span>
                                            <strong>
                                              <span >
                                                <center>CÓMO</center>
                                              </span>
                                            </strong>
                                          </span>
                                        </span>
                                      </h4>
                                      <h4>
                                        <span>
                                          <span>
                                            <strong>
                                              <span>
                                              <center>
                                                SE USA
                                              </center>
                                              </span>
                                            </strong>
                                          </span>
                                        </span>
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                  <div className='col-md-6 col-md-offset-1'>
                            <div className='panel panel-default'>
                              <div className='panel-heading'>
                                <div className='row'>
                                  <div>
                                    <img alt='' className='iconoIzquierdaGrande' src={Descarga}></img>
                                  </div>  
                                </div>
                                <div className='row'>
                                <div>
                                    <div className='tituloPilares'>
                                      <h4>
                                        <span>
                                          <span>
                                            <strong>
                                              <span >
                                                <center>DESCARGA</center>
                                              </span>
                                            </strong>
                                          </span>
                                        </span>
                                      </h4>
                                      <h4>
                                        <span>
                                          <span>
                                            <strong>
                                              <span>
                                              <center>
                                                RECURSOS
                                              </center>
                                              </span>
                                            </strong>
                                          </span>
                                        </span>
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>                        
                      </div>                        
                      </div>
                      </div>
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                      <hr/>
                      </div>
                      </div>
                      </div>
                      

    )
  }
}
