import React, { Component } from 'react'
import Gobernanza from '../../assets/sites/1._gobernanza.png';
import Alianzas from '../../assets/sites/2._alianzas.png';
import Emergencias from '../../assets/sites/3.emergencias.png';
import Comunicacion from '../../assets/sites/4._comunicacion.png';




export default class QuienesSomos extends Component {
  render() {
    return (
      <div className='main-container'>
        <div className='container'>
          <div className='row'>
            <section className='col-sm-12'>
              <div className='region region-content'>
                <section className='block block-system clearfix'>
                  <article className='node node-page clearfix' about='/quienes-somos'>
                    <div className='row'>
                      <div className='col-md-10 col-md-offset-1'>
                        <h1>
                          <span>
                            <span>
                              <strong>
                                <span>¿QUIÉNES SOMOS?</span>
                              </strong>
                            </span>
                          </span>
                        </h1>
                        <p> &nbsp; </p>
                        <p>
                          11 años fortaleciendo las capacidades gubernamentales para gestionar la migración de forma sostenible y humana.
                        </p>
                        <p>
                          El Programa Regional sobre Migración es implementado por la"<a href='https://www.iom.int/es' rel='noopener noreferrer'>Organización Internacional para las Migraciones</a>  
                          (OIM) con el financiamiento de la Oficina de Población, Refugiados y Migración (PRM) 
                          del Departamento de Estado de los Estados Unidos.
                        </p>
                      </div>
                    </div>
                    <p> &nbsp; </p>
                    
                    <div className='row'>
                      <div className='col-md-10 col-md-offset-1'>
                        <h2 className='page-title'>
                          <span>
                            <strong>
                              <span>
                                <span>Nuestros 4 pilares son:</span>
                              </span>
                            </strong>
                          </span>
                        </h2>
                      </div>
                    </div>
                    <p> &nbsp; </p>

                    <div className='container'>
                      <div className='panel-group'>
                        <div className='row'>
                          <div className='col-md-4 col-md-offset-1'>
                            <div className='panel panel-default'>
                              <div className='panel-heading'>
                                <div className='row'>
                                  <div>
                                    <img alt='' className='iconoIzquierda' src={Gobernanza}></img>
                                  </div>
                                  <div>
                                    <div className='tituloPilares'>
                                      <h4>
                                        <span>
                                          <span>
                                            <strong>
                                              <span>
                                                Gobernanza
                                              </span>
                                            </strong>
                                          </span>
                                        </span>
                                      </h4>
                                      <h4>
                                        <span>
                                          <span>
                                            <strong>
                                              <span>de la migración</span>
                                            </strong>
                                          </span>
                                        </span>
                                      </h4>
                                    </div>
                                    <p>&nbsp;</p>
                                  </div>
                                </div>
                                <p className='alinearderecha'>
                                  <span>
                                    <a className='accordion-toggle accordion-icono collapsed' data-parent='#accordion'
                                    data-toggle='collapse' href='#collapseOne'>
                                      <span className='alinearVerMas'> Ver mas</span>
                                    </a>
                                  </span>
                                </p>
                              </div>
                              <div className="panel-collapse collapse" id="collapseOne">
                                <div className="panel-body">
                                  <p>
								                    Apoyamos el diseño de políticas, normativas, 
                                    estrategias y procedimientos para promover la 
                                    migración regular en la región y la generación 
                                    de datos e información, para la toma de decisiones 
                                    y el diseño de políticas basadas en evidencia.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-md-offset-1">
                            <div className="panel panel-default" >
                              <div className="panel-heading">
                               <div className="row">
                                <div>
                                  <img alt="" className="iconoIzquierda" src={Alianzas}></img>
                                </div>
                                <div>
                                  <div className="tituloPilares">
                                    <h4>
                                      <span>
                                        <span >
                                          <strong>
                                            <span>Alianzas</span>
                                          </strong>
                                        </span>
                                      </span>
                                    </h4>
                                    <h4>
                                      <span >
                                        <span >
                                          <strong>
                                            <span >y Cooperación</span>
                                          </strong>
                                        </span>
                                      </span>
                                    </h4>
                                  </div>
                                  <p>&nbsp;</p>
                                </div>
                              </div>
                              <p className="alinearderecha">
                                <span>
                                  <a className="accordion-toggle accordion-icono" data-parent="#accordion" data-toggle="collapse" href="#collapseDos" >
                                    <span className="alinearVerMas">Ver más</span>
                                  </a>
                                </span>
                              </p>
                              </div>
                                <div className="panel-collapse collapse" id="collapseDos">
                                  <div className="panel-body">
                                    <p>Fortalecemos la cooperación y diálogo regional, bilateral y local sobre migración.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>



                        <div className='row'>
                          <div className='col-md-4 col-md-offset-1'>
                            <div className='panel panel-default'>
                              <div className='panel-heading'>
                                <div className='row'>
                                  <div>
                                    <img alt='' className='iconoIzquierda' src={Emergencias}></img>
                                  </div>
                                  <div>
                                    <div className='tituloPilares'>
                                      <h4>
                                        <span>
                                          <span>
                                            <strong>
                                              <span>
                                                Gobernanza
                                              </span>
                                            </strong>
                                          </span>
                                        </span>
                                      </h4>
                                      <h4>
                                        <span>
                                          <span>
                                            <strong>
                                              <span>de la migración</span>
                                            </strong>
                                          </span>
                                        </span>
                                      </h4>
                                    </div>
                                    <p>&nbsp;</p>
                                  </div>
                                </div>
                                <p className='alinearderecha'>
                                  <span>
                                    <a className='accordion-toggle accordion-icono collapsed' data-parent='#accordion'
                                    data-toggle='collapse' href='#collapseOne'>
                                      <span className='alinearVerMas'> Ver mas</span>
                                    </a>
                                  </span>
                                </p>
                              </div>
                              <div className="panel-collapse collapse" id="collapseOne">
                                <div className="panel-body">
                                  <p>
								                    Apoyamos el diseño de políticas, normativas, 
                                    estrategias y procedimientos para promover la 
                                    migración regular en la región y la generación 
                                    de datos e información, para la toma de decisiones 
                                    y el diseño de políticas basadas en evidencia.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-md-offset-1">
                            <div className="panel panel-default" >
                              <div className="panel-heading">
                               <div className="row">
                                <div>
                                  <img alt="" className="iconoIzquierda" src={Comunicacion}></img>
                                </div>
                                <div>
                                  <div className="tituloPilares">
                                    <h4>
                                      <span>
                                        <span >
                                          <strong>
                                            <span>Alianzas</span>
                                          </strong>
                                        </span>
                                      </span>
                                    </h4>
                                    <h4>
                                      <span >
                                        <span >
                                          <strong>
                                            <span >y Cooperación</span>
                                          </strong>
                                        </span>
                                      </span>
                                    </h4>
                                  </div>
                                  <p>&nbsp;</p>
                                </div>
                              </div>
                              <p className="alinearderecha">
                                <span>
                                  <a className="accordion-toggle accordion-icono" data-parent="#accordion" data-toggle="collapse" href="#collapseDos" >
                                    <span className="alinearVerMas">Ver más</span>
                                  </a>
                                </span>
                              </p>
                              </div>
                                <div className="panel-collapse collapse" id="collapseDos">
                                  <div className="panel-body">
                                    <p>Fortalecemos la cooperación y diálogo regional, bilateral y local sobre migración.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>



                      </div>
                    </div>
                  </article>
                </section>
              </div>
            </section>
          </div>
        </div>
                
      </div>
    )
  }
}
