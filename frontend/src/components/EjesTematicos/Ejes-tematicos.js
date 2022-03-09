import React, { Component } from 'react'


export default class DatosMigratorios extends Component {
  render() {
    return (
            
                <div className='container-fluid'>
                    
                    <div className=''>
                    <img src="https://programamesoamerica.iom.int/sites/default/files/datos_migracion_banner.jpg"  alt=""/>
                    </div>
                  <div className='container'> 
                    <div className="row">            

                    <div className='colmena' style={{ padding: "15px" }}>
                        <div className='row'>
                            <div className='col-12'>
                                <p style={{ color: "white" }}>
                                La gestión de datos sobre migración es un eje esencial para el avance del Programa Regional sobre Migración, porque permite conocer de cerca los diferentes perfiles, contextos, tendencias y vulnerabilidades de las personas migrantes. Este eje cumple la función de realizar todo el ciclo de la gestión de la información (recopilación, limpieza, almacenamiento y análisis de datos), la cual funciona como herramienta para la toma de decisiones basadas en evidencia.
                                </p>
                                <p style={{ color: "white" }}>
                                La información generada a partir de estos procesos se difunde mediante la creación de productos de información como por ejemplo reportes de situación, infografías y mapas. Los documentos que va a encontrar en esta sección contiene datos actualizados sobre migración en la región.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-8'></div>
                        <div className='col-4 mx-auto'>
                            <img src="https://www.programamesoamerica.iom.int/sites/default/files/boton_centrodatos-es.png" class="img-fluid" alt="banner"/>
                        </div>
                    </div>

                    <br/>

                    <div className='documentos'>
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
                            </div>
                        </div>
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
    )
  }
}
