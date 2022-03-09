import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import head from '../assets/img/logo_70anos_webes.png';

export default class Navigation extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className='container'>
                    <div className='row'>
                        {/* First Coulum */}
                        <div className='col'>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link className="navbar-brand" to="/">
                                        <img src={head} className="img-fluid" alt=''></img>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Second Coulum */}
                        <div className='col'>
                            <ul className='list-unstyled'>
                                <form>
                                    <div className='mb-3'>
                                        <label>Espanol</label>
                                        <label>| Ingles</label>
                                        <li>
                                            <Link className='navbar-brand' to="/">
                                                <input type="search" className="form-control" id="SearchInput" placeholder='Buscar'></input> 
                                                <i className='material-icons'>search</i>
                                            </Link>
                                        </li>
                                    </div>
                                </form>
                            </ul>
                        </div>
                        {/** */}
                    </div>
                </div>
                <nav className='navbar navbar-expand-lg p-3'>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <div className='container'>
                            <ul className='navbar-nav ml-auto'>
                                {/*Quienes Somos */}
                                <li className='nav-item'>
                                    <Link to='/quienes-somos' className='nav-link text-white'>Quienes Somos</Link>
                                </li>
                                {/*Ejes Tematicos */}
                                <li className='nav-item'>
                                    <Link to='/ejes-tematicos' className='nav-link text-white'>Ejes Tematicos</Link>
                                </li>
                                {/* Noticias */}
                                <li className='nav-item'>
                                    <Link to='/noticia' className='nav-link text-white'>Noticias</Link>
                                </li>
                                {/* Ventanillas Informativas */}
                                <li className='nav-item'>
                                    <Link to='/ventanillas' className='nav-link text-white'>Ventanillas Informativas</Link>
                                </li>
                                {/* Maleta Educativa */}
                                <li className='nav-item'>
                                    <Link to='/maleta-educativa' className='nav-link text-white'>Maleta Educativa</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}