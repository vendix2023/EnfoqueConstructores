import React, { useState,useEffect } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom'; // Usamos NavLink para manejar la clase activa
import Menu from '../utils/navbar/menu.webp';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isProyectosOpen, setIsProyectosOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);


  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(event.target)) {
        setMenuActive(false);
        setIsProyectosOpen(false);
        setSelectedCity(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const selectCity = (city) => {
    setSelectedCity(city);
  };
  

  const toggleProyectosMenu = () => {
    setIsProyectosOpen(prevState => !prevState);  
    //setIsProyectosOpen(!isProyectosOpen);
  };


  const handleMenuToggle = () => {
    setMenuActive(!menuActive); // Alterna el estado
  };

  return (
    <nav className='navbar'>
      <div className="logo-container">
        <img className="logo" src="/LogoEC.webp" alt="Logo" /> 
      </div>

      <div className={`menu-content ${menuActive ? 'active' : ''}`}>
        <ul className='navbar-menu'>
          <li><a href="/">INICIO</a></li>
          <li><a href="/conocenos">CONÓCENOS</a></li>
          <li>
          <NavLink
            to="#"
            onClick={toggleProyectosMenu}
            className={({ isActive }) => 
              isActive || isProyectosOpen ? 'active' : ''
            }
          >
            PROYECTOS
          </NavLink>
          {isProyectosOpen && (
            <ul >
              <li
                className="union-item"
                onMouseEnter={() => selectCity('Union')}
                onMouseLeave={() => selectCity(null)}
              >
                La Unión
                {selectedCity === 'Union' && (
                  <ul>
                    <li>
                      <NavLink to="/proyectos/union/Sauces">Los Sauces</NavLink>
                    </li>
                    
                  </ul>
                )}
              </li>
              
              <li
                className="bolivar-item"
                onMouseEnter={() => selectCity('Bolivar')}
                onMouseLeave={() => selectCity(null)}
              >
                Bolivar
                {selectedCity === 'Bolivar' && (
                  <ul >
                    <li>
                      <NavLink to="/proyectos/bolivar/Piamonte">Piamonte</NavLink>
                    </li>
                    <li>
                      <NavLink to="/proyectos/bolivar/Acacias">Las Acacias</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="sucre-item"
                onMouseEnter={() => selectCity('Sucre')}
                onMouseLeave={() => selectCity(null)}
              >
                Sucre
                {selectedCity === 'Sucre' && (
                  <ul >
                    <li>
                      <NavLink to="/proyectos/sucre/Alameda">Alameda</NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li className='proxLanzamientos'><a href="/lanzamientos">PRÓXIMOS LANZAMIENTOS</a></li>
        <li className='servicioCliente'><a href="/servicio">SERVICIO AL CLIENTE</a></li>

          
        </ul>
      </div>

      <div className="menu-icon" onClick={handleMenuToggle}>
        <img src={Menu} alt="Menu" />
      </div>

      <div className='navbar-pc'>
        <ul className='navbar-menu'>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>INICIO</NavLink></li>
          <li><NavLink to="/conocenos" className={({ isActive }) => (isActive ? 'active' : '')}>CONÓCENOS</NavLink></li>
          <li>
          <NavLink
            to="#"
            onClick={toggleProyectosMenu}
            className={({ isActive }) => 
              isActive || isProyectosOpen ? 'active' : ''
            }
          >
            PROYECTOS
          </NavLink>
          {isProyectosOpen && (
            <ul>
              <li
                onMouseEnter={() => selectCity('Union')}
                onMouseLeave={() => selectCity(null)}
              >
                La Unión
                {selectedCity === 'Union' && (
                  <ul >
                    <li>
                      <NavLink to="/proyectos/union/Sauces">Los Sauces</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              
              <li
                onMouseEnter={() => selectCity('Bolivar')}
                onMouseLeave={() => selectCity(null)}
              >
                Bolivar
                {selectedCity === 'Bolivar' && (
                  <ul>
                    <li>
                      <NavLink to="/proyectos/bolivar/Piamonte">Piamonte</NavLink>
                    </li>
                    <li>
                      <NavLink to="/proyectos/bolivar/Acacias">Las Acacias</NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => selectCity('Sucre')}
                onMouseLeave={() => selectCity(null)}
              >
                Sucre
                {selectedCity === 'Sucre' && (
                  <ul >
                    <li>
                      <NavLink to="/proyectos/sucre/Alameda">Alameda</NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li className='proxLanzamientos'><NavLink to="/lanzamientos" className={({ isActive }) => (isActive ? 'active' : '')}>PRÓXIMOS LANZAMIENTOS</NavLink></li>
        <li className='servicioCliente'><a href="/servicio">SERVICIO AL CLIENTE</a></li>
        </ul>
      </div>

      
    </nav>
  );
};


export default Navbar;
