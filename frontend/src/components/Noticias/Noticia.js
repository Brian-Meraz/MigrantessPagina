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
                        <h1 style={{ color: "orange" }}>??Qu?? es Somos Colmena?</h1>
                        <div className='row'>
                            <div className='col-8'>
                                <p style={{ color: "white" }}>
                                Somos Colmena by IOMX, es una iniciativa de la Organizaci??n Internacional para las Migraciones que implementa la metodolog??a de comunicaci??n para el desarrollo (C4D). Trabaja para impulsar a las personas a encontrar informaci??n sobre la migraci??n regular, as?? como los riesgos y las alternativas a la migraci??n irregular. En 2020, el proceso C4D en la regi??n se ha adaptado para motivar el cambio de comportamiento, considerando el impacto de COVID-19 en las necesidades de la audiencia objetivo y el contexto comunitario.
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
                                <h3 style={{ color: "orange" }}>An??lisis</h3>
                                <p>Conoza la audiencia</p>
                                <p>
                                    <strong>Realice una investigaci??n para comprender el contexto de un problema, identifique las audiencias objetivo, descubra sus conocimientos, actitudes y comportamientos.</strong>
                                </p>
                            </div>
                            <div className='col-3' style={{ backgroundColor: "white", paddingLeft: "50px", paddingRight: "50px", margin: "10px"}}>
                                <img style={{ marginTop: "-40px" }} src="https://www.programamesoamerica.iom.int/sites/default/files/paso_2.png" class="img-fluid" alt="icon"/>
                                <h3 style={{ color: "yellow" }}>Dise??o estrat??gico</h3>
                                <p>Conozca c??mo conectar con su audiencia</p>
                                <p>
                                    <strong>Establezca objetivos inteligentes, determine los mejores canales de comunicaci??n para la difusi??n y dise??e una estrategia de comunicaci??n.</strong>
                                </p>
                            </div>
                            <div className='col-3' style={{ backgroundColor: "white", paddingLeft: "50px", paddingRight: "50px", margin: "10px"}}>
                                <img style={{ marginTop: "-40px" }} src="https://www.programamesoamerica.iom.int/sites/default/files/paso_3.png" class="img-fluid" alt="icon"/>
                                <h3 style={{ color: "blue" }}>Desarrollo y pruebas</h3>
                                <p>??Esto funciona?</p>
                                <p>
                                    <strong>Los materiales y los mensajes se desarrollan, se prueban, se revisan y se vuelven a probar con el p??blico objetivo.</strong>
                                </p>
                            </div>
                        </div>
                        <div className='row float' style={{ padding: "15px" }}>
                            <div className='col-3' style={{ backgroundColor: "white", paddingLeft: "50px", paddingRight: "50px", margin: "10px"}}>
                                <img style={{ marginTop: "-40px" }} src="https://www.programamesoamerica.iom.int/sites/default/files/paso_4.png" class="img-fluid" alt="icon"/>
                                <h3 style={{ color: "cyan" }}>Implementaci??n</h3>
                                <p>??Distribuya el mensaje afuera!</p>
                                <p>
                                    <strong>Despliegue la actividad en los canales de comunicaci??n identificados del paso 2.</strong>
                                </p>
                            </div>
                            <div className='col-3' style={{ backgroundColor: "white", paddingLeft: "50px", paddingRight: "50px", margin: "10px"}}>
                                <img style={{ marginTop: "-40px" }} src="https://www.programamesoamerica.iom.int/sites/default/files/paso_5.png" class="img-fluid" alt="icon"/>
                                <h3 style={{ color: "red" }}>Monitoreo y evaluaci??n</h3>
                                <p>??Est?? funcionando? <br/> ??Cu??les son los resultados?</p>
                                <p>
                                    <strong>El monitoreo capta las actividades del d??a a d??a para obtener informaci??n. La evaluaci??n mide qu?? tan bien un programa logra los objetivos establecidos en el paso 2.</strong>
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
                                        <option value="Hait??">Hait??</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="Salvador">El Salvador</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="M??xico">M??xico</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Panam??">Panam??</option>
                                        <option value="RD">Rep??blica Dominicana</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                            <div className='col-3'>
                                <div><h4 style={{ color: "white" }}>A??o</h4></div>
                                <select class="form-select" id="inputGroupSelect01">
                                        <option selected>-A??o-</option>
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
                                    <option value="Hait??">Video</option>
                                    <option value="CR">Acercammiento</option>
                                    <option value="Salvador">Indicadores</option>
                                    <option value="Guatemala">Buenas practicas</option>
                                    <option value="Honduras">Curso</option>
                                    <option value="M??xico">Documento</option>
                                    <option value="Nicaragua">Noticia</option>
                                    <option value="Panam??">Publicacion link</option>
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
                                    Recursos especializados dise??ados por la OIM con un enfoque de responsabilidad comunicativa sobre la migraci??n.  Recomendados para profesionales, estudiantes y personas interesadas que deseen profundizar sus conocimientos en el tema.
                                    </p>
                                    <img src="https://www.programamesoamerica.iom.int/sites/default/files/botones/publicacion.png" width="250px" class="img-fluid" alt="banner"/>
                                </div>
                            </div><hr/>
                            <div className='row'>
                                <div className='col-4'>
                                    <img src="https://www.programamesoamerica.iom.int/sites/default/files/styles/node_teaser/public/imagenes_web25.jpg?itok=Nmw43eNL" class="img-fluid" alt="banner"/>
                                </div>
                                <div className='col-8' style={{ color:"white"}}>
                                    <h3>L??nea base para campa??a sobre migraci??n haitiana</h3>
                                    <p>
                                        El objetivo de esta estrategia de comunicaci??n es crear conciencia en la poblaci??n en Hait?? con intenci??n de migrar y personas en pa??ses de tr??nsito (Chile y Brasil principalmente) sobre los riesgos de la migraci??n irregular, especialmente en la sel va del Dari ??n en Panam??, ubicada en la frontera con Colombia.
                                    </p>
                                    <img src="https://www.programamesoamerica.iom.int/sites/default/files/botones/publicacion.png" width="250px" class="img-fluid" alt="banner"/>
                                </div>
                            </div><hr/>
                            <div className='row'>
                                <div className='col-4'>
                                    <img src="https://www.programamesoamerica.iom.int/sites/default/files/styles/node_teaser/public/imagenes_web15.jpg?itok=fR_3psQV" class="img-fluid" alt="banner"/>
                                </div>
                                <div className='col-8' style={{ color:"white"}}>
                                    <h3>L??nea base "Pi??nsalo 2 Veces" en Panam?? (2021)</h3>
                                    <p>
                                        La metodolog??a de Comunicaci??n para el Desarrollo se est?? implementando en Panam?? en la comunidad de La Chorrera, por medio de la campa??a ???Pi??nsalo 2 Veces???, que busca desarrollar capacidades en la poblaci??n migrante para reconocer ofertas y noticias falsas con fines de explotaci??n laboral y trata de personas. Esta l??nea base permite entender los conocimientos, actitudes y pr??cticas de las personas en torno a estas tem??ticas y arrojar evidencia que guiar?? la implementaci??n de la metodolog??a.
                                    </p>
                                    <img src="https://www.programamesoamerica.iom.int/sites/default/files/botones/publicacion.png" width="250px" class="img-fluid" alt="banner"/>
                                </div>
                            </div><hr/>
                        </div><br/>
                        <hr/>
                        <div className='copyright' style={{ color: "white" }}>
                            <p>
                                ?? 2020 | Organizaci??n Internacional para las Migraciones
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
