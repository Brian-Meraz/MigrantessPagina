import React, { Component } from 'react';

import Salvador from '../../assets/sites/6._el_salvador_0.png';
import Nicaragua from '../../assets/sites/7._nicaragua.png';
import Mexico from '../../assets/sites/3._mexico_0.png';




export default class Noticia extends Component {
  render() {
    return (

        
      <div className="row">
                <div className='container-fluid'>
                    
                    <div className='banner '>
                    <img src="https://www.programamesoamerica.iom.int/sites/default/files/banner_c4d_eng.png" class="img-fluid" alt="banner"/>
                    </div>
                    <hr/>
                    <div className='container'>
                    <div className='titleBanner'>
                    <div className='row'>
                          <div className='col-md-4 col-md-offset-1'>
                            <div className='panel panel-default'>
                              <div className='panel-heading'>
                                <div className='row'>
                                  <div>
                                    <img alt='' className='iconoIzquierdaGrande' src={Salvador}></img>
                                  </div>                
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-md-offset-1">
                            <div className="panel panel-default" >
                              <div className="panel-heading">
                               <div className="row">
                                <div>
                                  <img alt="" className="iconoIzquierdaGrande" src={Nicaragua}></img>
                                </div>
                              </div>
                              </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-md-offset-1">
                              <div className='panel panel-default'>
                              <div className='panel-heading'>
                                <div className='row'>
                                  <div>
                                    <img alt='' className='iconoIzquierdaGrande' src={Mexico}></img>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                        </div>
                        <hr />







                    <div className='colmena' style={{ padding: "15px" }}>
                        <h1 style={{ color: "orange" }}>¿Qué es Somos Colmena?</h1>
                        <div className='row'>
                            <div className='col-8'>
                                <p style={{ color: "white" }}>
                                Somos Colmena by IOMX, es una iniciativa de la Organización Internacional para las Migraciones que implementa la metodología de comunicación para el desarrollo (C4D). Trabaja para impulsar a las personas a encontrar información sobre la migración regular, así como los riesgos y las alternativas a la migración irregular. En 2020, el proceso C4D en la región se ha adaptado para motivar el cambio de comportamiento, considerando el impacto de COVID-19 en las necesidades de la audiencia objetivo y el contexto comunitario.
                                </p>
                            </div>
                            <div className='col-4'>
                                <img src="https://www.programamesoamerica.iom.int/sites/default/files/ilustracion_que_es.png" class="img-fluid" alt="banner"/>
                            </div>
                        </div>
                    </div>
                    <div className='pasos' style={{ backgroundColor: "orange", width: "1500px", marginLeft: "-150px", paddingLeft: "100px", paddingTop: "50px" }}>
                        <h1 style={{ color: "white" }}>5 pasos para desarrollar un proceso de C4D</h1>
                        <div style={{ height: "50px" }}></div>
                        <div className='row' style={{ padding: "15px" }}>
                            <div className='col-3' style={{ backgroundColor: "white", paddingLeft: "50px", paddingRight: "50px", margin: "10px"}}>
                                <img style={{ marginTop: "-40px" }} src="https://www.programamesoamerica.iom.int/sites/default/files/paso_1.png" class="img-fluid" alt="icon"/>
                                <h3 style={{ color: "orange" }}>Análisis</h3>
                                <p>Conoza la audiencia</p>
                                <p>
                                    <strong>Realice una investigación para comprender el contexto de un problema, identifique las audiencias objetivo, descubra sus conocimientos, actitudes y comportamientos.</strong>
                                </p>
                            </div>
                            <div className='col-3' style={{ backgroundColor: "white", paddingLeft: "50px", paddingRight: "50px", margin: "10px"}}>
                                <img style={{ marginTop: "-40px" }} src="https://www.programamesoamerica.iom.int/sites/default/files/paso_2.png" class="img-fluid" alt="icon"/>
                                <h3 style={{ color: "yellow" }}>Diseño estratégico</h3>
                                <p>Conozca cómo conectar con su audiencia</p>
                                <p>
                                    <strong>Establezca objetivos inteligentes, determine los mejores canales de comunicación para la difusión y diseñe una estrategia de comunicación.</strong>
                                </p>
                            </div>
                            <div className='col-3' style={{ backgroundColor: "white", paddingLeft: "50px", paddingRight: "50px", margin: "10px"}}>
                                <img style={{ marginTop: "-40px" }} src="https://www.programamesoamerica.iom.int/sites/default/files/paso_3.png" class="img-fluid" alt="icon"/>
                                <h3 style={{ color: "blue" }}>Desarrollo y pruebas</h3>
                                <p>¿Esto funciona?</p>
                                <p>
                                    <strong>Los materiales y los mensajes se desarrollan, se prueban, se revisan y se vuelven a probar con el público objetivo.</strong>
                                </p>
                            </div>
                        </div>
                        <div className='row float' style={{ padding: "15px" }}>
                            <div className='col-3' style={{ backgroundColor: "white", paddingLeft: "50px", paddingRight: "50px", margin: "10px"}}>
                                <img style={{ marginTop: "-40px" }} src="https://www.programamesoamerica.iom.int/sites/default/files/paso_4.png" class="img-fluid" alt="icon"/>
                                <h3 style={{ color: "cyan" }}>Implementación</h3>
                                <p>¡Distribuya el mensaje afuera!</p>
                                <p>
                                    <strong>Despliegue la actividad en los canales de comunicación identificados del paso 2.</strong>
                                </p>
                            </div>
                            <div className='col-3' style={{ backgroundColor: "white", paddingLeft: "50px", paddingRight: "50px", margin: "10px"}}>
                                <img style={{ marginTop: "-40px" }} src="https://www.programamesoamerica.iom.int/sites/default/files/paso_5.png" class="img-fluid" alt="icon"/>
                                <h3 style={{ color: "red" }}>Monitoreo y evaluación</h3>
                                <p>¿Está funcionando? <br/> ¿Cuáles son los resultados?</p>
                                <p>
                                    <strong>El monitoreo capta las actividades del día a día para obtener información. La evaluación mide qué tan bien un programa logra los objetivos establecidos en el paso 2.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className='col-4 mx-auto'>
                        <img src="https://www.programamesoamerica.iom.int/sites/default/files/websiteboton_es.png" class="img-fluid" alt="banner"/>
                    </div>

                    <div className='documentos'>
                        <h1 style={{ color: "orange" }}>Documentos</h1>
                        <div className='row'>
                            <div className='col-3'>
                                <div><h4 style={{ color: "white" }}>Buscar</h4></div>
                                <input type="text" class="form-control" placeholder="Buscar..." aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div className='col-3'>
                                <div><h4 style={{ color: "white" }}>Pais</h4></div>
                                    <select class="form-select" id="inputGroupSelect01">
                                        <option selected>-Cualquiera-</option>
                                        <option value="Belice">Belice</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Guayana">Guayana</option>
                                        <option value="Haití">Haití</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="Salvador">El Salvador</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="México">México</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Panamá">Panamá</option>
                                        <option value="RD">República Dominicana</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                            <div className='col-3'>
                                <div><h4 style={{ color: "white" }}>Año</h4></div>
                                <select class="form-select" id="inputGroupSelect01">
                                        <option selected>-Año-</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                    </select>                            </div>
                            <div className='col-3'>
                                <div><h4 style={{ color: "white" }}>Categoria</h4></div>
                                <select class="form-select" id="inputGroupSelect01">
                                    <option selected>-Cualquiera-</option>
                                    <option value="Belice">Actividades</option>
                                    <option value="Dominica">Materiales</option>
                                    <option value="Guayana">Publicacion</option>
                                    <option value="Haití">Video</option>
                                    <option value="CR">Acercammiento</option>
                                    <option value="Salvador">Indicadores</option>
                                    <option value="Guatemala">Buenas practicas</option>
                                    <option value="Honduras">Curso</option>
                                    <option value="México">Documento</option>
                                    <option value="Nicaragua">Noticia</option>
                                    <option value="Panamá">Publicacion link</option>
                                </select>
                                </div>
                        </div><br/>
                        <div className='documentosItems'>
                            <div className='row'>
                                <div className='col-4'>
                                    <img src="https://www.programamesoamerica.iom.int/sites/default/files/styles/node_teaser/public/miniatura-web-migracion-y-periodiso-01.jpg?itok=_dJ5palK" class="img-fluid" alt="banner"/>
                                </div>
                                <div className='col-8' style={{ color:"white"}}>
                                    <h3>Recursos sobre Migracion y periodismo</h3>
                                    <p>
                                    Recursos especializados diseñados por la OIM con un enfoque de responsabilidad comunicativa sobre la migración.  Recomendados para profesionales, estudiantes y personas interesadas que deseen profundizar sus conocimientos en el tema.
                                    </p>
                                    <img src="https://www.programamesoamerica.iom.int/sites/default/files/botones/publicacion.png" width="250px" class="img-fluid" alt="banner"/>
                                </div>
                            </div><hr/>
                            <div className='row'>
                                <div className='col-4'>
                                    <img src="https://www.programamesoamerica.iom.int/sites/default/files/styles/node_teaser/public/imagenes_web25.jpg?itok=Nmw43eNL" class="img-fluid" alt="banner"/>
                                </div>
                                <div className='col-8' style={{ color:"white"}}>
                                    <h3>Línea base para campaña sobre migración haitiana</h3>
                                    <p>
                                        El objetivo de esta estrategia de comunicación es crear conciencia en la población en Haití con intención de migrar y personas en países de tránsito (Chile y Brasil principalmente) sobre los riesgos de la migración irregular, especialmente en la sel va del Dari én en Panamá, ubicada en la frontera con Colombia.
                                    </p>
                                    <img src="https://www.programamesoamerica.iom.int/sites/default/files/botones/publicacion.png" width="250px" class="img-fluid" alt="banner"/>
                                </div>
                            </div><hr/>
                            <div className='row'>
                                <div className='col-4'>
                                    <img src="https://www.programamesoamerica.iom.int/sites/default/files/styles/node_teaser/public/imagenes_web15.jpg?itok=fR_3psQV" class="img-fluid" alt="banner"/>
                                </div>
                                <div className='col-8' style={{ color:"white"}}>
                                    <h3>Línea base "Piénsalo 2 Veces" en Panamá (2021)</h3>
                                    <p>
                                        La metodología de Comunicación para el Desarrollo se está implementando en Panamá en la comunidad de La Chorrera, por medio de la campaña “Piénsalo 2 Veces”, que busca desarrollar capacidades en la población migrante para reconocer ofertas y noticias falsas con fines de explotación laboral y trata de personas. Esta línea base permite entender los conocimientos, actitudes y prácticas de las personas en torno a estas temáticas y arrojar evidencia que guiará la implementación de la metodología.
                                    </p>
                                    <img src="https://www.programamesoamerica.iom.int/sites/default/files/botones/publicacion.png" width="250px" class="img-fluid" alt="banner"/>
                                </div>
                            </div><hr/>
                        </div><br/>
                        <hr/>
                        <div className='copyright' style={{ color: "white" }}>
                            <p>
                                © 2020 | Organización Internacional para las Migraciones
                            </p>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
            
    )
  }
}
