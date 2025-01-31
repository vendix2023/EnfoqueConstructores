import React, { useState } from 'react';
import logoPiamonte from '../../../utils/piamonte/Logo.webp';
import ubicacion1 from '../../../utils/piamonte/Ubicacion1.webp';
import ubicacion2 from '../../../utils/piamonte/Ubicacion2.webp';
import metros from '../../../utils/piamonte/Metros-cuadrados.webp';
import habitacion from '../../../utils/piamonte/Habitaciones.webp';
import bano from '../../../utils/piamonte/Bano.webp';
import otros from '../../../utils/piamonte/Casa.webp';
import planta from '../../../utils/piamonte/Planta.webp';
import logoSolo from '../../../utils/piamonte/LogoSolo.webp';
import acceso from '../../../utils/piamonte/Figura1.webp';
import independencia from '../../../utils/piamonte/Figura2.webp';
import ambiente from '../../../utils/piamonte/Figura3.webp';
import Imagen1 from '../../../utils/piamonte/Imagen1.webp';
import Imagen2 from '../../../utils/piamonte/Imagen2.webp';
import Imagen3 from '../../../utils/piamonte/Imagen3.webp';
import Imagen4 from '../../../utils/piamonte/Imagen4.webp';
import Mapa from '../../../utils/piamonte/mapa.webp';
import emailjs from '@emailjs/browser';




const Sauce = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    autorizacion: false,
  });
  const fotos = [Imagen1, Imagen2, Imagen3, Imagen4];
  const googleMapsUrl = `https://www.google.com/maps?ll=10.312563,-75.397937&z=14&t=m&hl=es-ES&gl=US&mapclient=embed&q=8J72%2B2R+Turbaco,+Bol%C3%ADvar`;


  const [indiceActual, setIndiceActual] = useState(0);

  const siguienteFoto = () => {
    setIndiceActual((prev) => (prev + 1) % fotos.length);
  };

  const anteriorFoto = () => {
    setIndiceActual((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

 

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("handleOnSubmit")

    const templateParams = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      celular: formData.celular,
      autorizacion: formData.autorizacion ? 'Sí' : 'No',
      to_email: 'escrituracion6@enfoqueconstructores.com', // Define el destinatario aquí,
      proyecto:"Piamonte"
    };

    console.log(templateParams)

    emailjs
      .send(
        'service_25ja9cm', // Reemplaza con tu Service ID
        'template_ulhn4x8', // Reemplaza con tu Template ID
        templateParams,
        'KZxSEnh7Eaym3oClF' // Reemplaza con tu Public Key
      )
      .then(
        (response) => {
          alert('Formulario enviado correctamente. ¡Pronto te contactaremos!');
          console.log('SUCCESS!', response.status, response.text);
          setFormData({
            nombre: '',
            apellido: '',
            email: '',
            celular: '',
            autorizacion: false,
          });
        },
        (error) => {
          alert('Hubo un error al enviar el formulario');
          console.error('FAILED...', error);
        }
      );
  };
  return (
    <div className='piamonte'>
      <div className='banner-piamonte'>
        <div className='banner-piamonte-info'>
          <img src={logoPiamonte} alt="logoPiamonte" />
          <h1>Proyecto de casas</h1>
          <div className='banner-ubicacion-piamonte'>
            <img src={ubicacion1} alt="ubicacionNaranja" />
            <h2>Turbaco<br></br>Bolivar</h2>
          </div>
          <h3>*|Casas con posibilidad de ampliación a segundo piso</h3>
        </div>
        <div className='form-piamonte'>
          <form onSubmit={handleOnSubmit}>
            <div>
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Apellido</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Celular</label>
              <input
                type="text"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                required
              />
            </div>
            <div className='autorizo-checkbox'>
              <label className='autorizo'>
                <input
                  type="checkbox"
                  name="autorizacion"
                  checked={formData.autorizacion}
                  onChange={handleChange}
                  required
                />
                Autorizo el tratamiento de mis datos personales y <br></br> políticas de privacidad
              </label>
            </div>
            <button className='btnNaranjaPiamonte' type="submit">Solicitar Información</button>
            <div className='btnNaranjaPiamonte2'>
              <a href="https://wa.link/ox86uj" target="_blank" rel="noopener noreferrer">Contactar un asesor</a>
            </div>
          </form>
        </div>
      </div>
      <div className='proyecto-piamonte'>
        <h1>Proyecto de casas <br></br> desde $146.900.000</h1>
      </div>
      <div className='descubre-piamonte'>
        <div className='descubre-piamonte-texto'>
        <p><strong>Bienvenido a Piamonte, </strong>
        un lugar donde cada casa tiene su propio espacio y cada familia encuentra su hogar.
        <strong> Con 700 unidades de vivienda en Turbaco - Bólivar, </strong> 
         este proyecto ofrece tranquilidad, seguridad y la oportunidad de ser parte de una comunidad única.
        <strong> ¿Listo para vivirlo?  </strong> </p>
        <div className='btnNaranjaNavbar'>
          <a href="https://drive.google.com/drive/folders/1Fjm5bHGXnTKuoF68ZOlEcfpvVpiWH7zL" target="_blank" rel="noopener noreferrer">Avance de obra</a>
        </div>
        </div>
        <div className="galerias-fotos-piamonte">
         <button className="btn-flecha izquierda" onClick={anteriorFoto}>
            &#8249;
          </button>
          <div className="contenedor-foto">
            <img src={fotos[indiceActual]} alt={`Foto ${indiceActual + 1}`} />
          </div>
          <button className="btn-flecha derecha" onClick={siguienteFoto}>
            &#8250;
          </button>
        </div>

      </div>
      <div className='espacios-piamonte'>
        <h1>Espacios<br></br> amplios y <br></br>  cómodos</h1>
        <div className='lineaVerticalVerde'></div>
        <p>Casas de 43 m2 en lotes de 84 m2 y con placa para construir segundo piso.</p>
        <div className='lineaVerticalVerde'></div>
        <div className='info-piamonte'>
          <div className='info-piamonte-img'>
          <img src={metros} alt="metros" />
          <img src={habitacion} alt="habitaciones" />
          <img src={bano} alt="banos" />
          <img src={otros} alt="otros" />

          </div>
          <div className='info-piamonte-texto'>
            <p>43 m2 con posibilidad de ampliación.</p>
            <p>2 habitaciones.</p>
            <p>1 baño.</p>
            <p>Patio, cocina, sala-comedor y antejardín.</p>
          </div>
        </div>
      </div>
      <div className='planta-piamonte'>
        <h1>Planta arquitectónica</h1>
        <img src={planta} alt="planta" />
      </div>
      <div className='comodidades-piamonte'>
        <h1>Excelentes comodidades de la urbanización para compartir en familia</h1>
        <div className='lineaVerticalVerdeOscuro'></div>
        <div className='comodidades-piamonte-lista'>
          <div className='salon'>
            <img src={logoSolo} alt="logoSolo" />
            <p>Zonas de entretenimiento.</p>
          </div>
          <div className='juegos'>
            <img src={logoSolo} alt="logoSolo" />
            <p>Juegos infantiles.</p>
          </div>
          <div className='sendero'>
            <img src={logoSolo} alt="logoSolo" />
            <p>Sendero.</p>
          </div>
          <div className='cancha'>
            <img src={logoSolo} alt="logoSolo" />
            <p>Cancha múltiple.</p>
          </div>
        </div>
      </div>
      <div className='ubicacion-piamonte'>
        <div className='ubicacion-piamonte-info'>
          <img src={ubicacion2} alt="ubicacion" />
          <h1>Fácil acceso <br></br> por la vía principal</h1>
          <h2>Turbaco - Bolivar</h2>
        </div>
        <div className='ubicacion-piamonte-maps'>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <img src={Mapa} alt="Mapa" />
          </a>
        </div>


      </div>
      <div className='piamonte-eleccion'>
        <h1>Construir momentos inolvidables comienza en una casa y <strong>Piamonte es tu mejor decisión.</strong>  </h1>
        
      </div>
      <div className='piamonte-info'>
        <div className='acceso'>
          <img src={acceso} alt="acceso" />
          <p>Fácil acceso y excelente ubicación</p>
        </div>
        <div className='independencia'>
          <img src={independencia} alt="independencia" />
          <p>Independencia y tranquilidad</p>
        </div>
        <div className='ambiente'>
          <img src={ambiente} alt="ambiente" />
          <p>Ambiente tranquilo y natural</p>
        </div>
      </div>
      <div className='contactenos-piamonte'>
        <div className='contactenos-piamonte-info'>
          <h1>Contáctanos y recibe asesoría personalizada </h1>
          <div className='btnNaranjaPiamonteContacto'>
            <a href="https://wa.link/ox86uj" target="_blank" rel="noopener noreferrer">¡Hablemos aquí!</a>  
          </div>
          <p>O diligencia nuestro formulario <br></br>para ser contactado(a) por uno de
          nuestros asesores.</p>
        </div>
        <div className='form-piamonte'>
          <form onSubmit={handleOnSubmit}>
            <div>
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Apellido</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Celular</label>
              <input
                type="text"
                name="celular"
                value={formData.celular}
                onChange={handleChange}
                required
              />
            </div>
            <div className='autorizo-checkbox'>
              <label className='autorizo'>
                <input
                  type="checkbox"
                  name="autorizacion"
                  checked={formData.autorizacion}
                  onChange={handleChange}
                  required
                />
                Autorizo el tratamiento de mis datos personales y <br></br> políticas de privacidad
              </label>
            </div>
            <button className='btnNaranjaPiamonte' type="submit">Solicitar Información</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Sauce;