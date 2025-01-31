import React, { useState } from 'react';
import logoAlameda from '../../../utils/alameda/Logo.webp';
import ubicacion1 from '../../../utils/alameda/Ubicacion1.webp';
import ubicacion2 from '../../../utils/alameda/Ubicacion2.webp';
import metros from '../../../utils/alameda/Metros-cuadrados.webp';
import habitacion from '../../../utils/alameda/Habitaciones.webp';
import bano from '../../../utils/alameda/Bano.webp';
import otros from '../../../utils/alameda/Casa.webp';
import planta from '../../../utils/alameda/Planta.webp';
import logoSolo from '../../../utils/alameda/LogoSolo.webp';
import acceso from '../../../utils/alameda/Figura1.webp';
import independencia from '../../../utils/alameda/Figura2.webp';
import ambiente from '../../../utils/alameda/Figura3.webp';
import Imagen1 from '../../../utils/alameda/Imagen1.webp';
import Imagen3 from '../../../utils/alameda/Imagen3.webp';
import Imagen4 from '../../../utils/alameda/Imagen4.webp';
import Imagen5 from '../../../utils/alameda/Imagen5.webp';
import Imagen7 from '../../../utils/alameda/Imagen7.webp';
import Imagen8 from '../../../utils/alameda/Imagen8.webp';
import Imagen9 from '../../../utils/alameda/Imagen9.webp';
import Imagen10 from '../../../utils/alameda/Imagen10.webp';
import Imagen11 from '../../../utils/alameda/Imagen11.webp';
import Imagen12 from '../../../utils/alameda/Imagen12.webp';
import Imagen13 from '../../../utils/alameda/Imagen13.webp';
import Mapa from '../../../utils/alameda/mapa.webp';
import emailjs from '@emailjs/browser';




const Sauce = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    autorizacion: false,
  });
  const fotos = [Imagen1, Imagen3, Imagen4,Imagen5,Imagen7,Imagen8,Imagen9,Imagen10,Imagen11,Imagen12,Imagen13];
  const googleMapsUrl = `https://www.google.com/maps/place/7JWG%2BR5,+Sincelejo,+Sucre,+Colombia/@9.297062,-75.374562,14z/data=!4m5!3m4!1s0x8e59144841172957:0xfd54006d98c481fc!8m2!3d9.2970625!4d-75.3745625?hl=es-ES&entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D`;


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
      to_email: 'mvergara@enfoqueconstructores.com', // Define el destinatario aquí,
      proyecto:"Alameda"
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
    <div className='alameda'>
      <div className='banner-alameda'>
        <div className='banner-alameda-info'>
          <img className='logoAlameda' src={logoAlameda} alt="logoAlameda" />
          <h1>Proyecto de casas</h1>
          <div className='banner-ubicacion-alameda'>
            <img src={ubicacion1} alt="ubicacionNaranja" />
            <h2>Sincelejo<br></br>Sucre</h2>
          </div>
          <h3>*|Casas con posibilidad de ampliación a segundo piso</h3>
        </div>
        <div className='form-alameda'>
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
            <button className='btnNaranjaAlameda' type="submit">Solicitar Información</button>
            <div className='btnNaranjaAlameda2'>
              <a href="https://wa.link/fgp87p" target="_blank" rel="noopener noreferrer">Contactar un asesor</a>
            </div>
          </form>
        </div>
      </div>
      <div className='proyecto-alameda'>
        <h1>Proyecto de casas <br></br> desde $150.000.000</h1>
      </div>
      <div className='descubre-alameda'>
        <div className='descubre-alameda-texto'>
        <p><strong>Bienvenidos a Alameda, un exclusivo proyecto de casas en Sincelejo - Sucre, </strong>
        diseñado para quienes buscan tranquilidad, seguridad y un espacio propio para disfrutar en familia.  Con 180 viviendas cuidadosamente construidas, tendrás un hogar con patio y antejardín en un entorno que inspira comunidad y calidad de vida.
        <strong> ¡Descubre cómo vivir de una manera única y especial!</strong> </p>
        <div className='btnNaranjaNavbar'>
          <a href="https://drive.google.com/drive/folders/1Fjm5bHGXnTKuoF68ZOlEcfpvVpiWH7zL" target="_blank" rel="noopener noreferrer">Avance de obra</a>
        </div>
        </div>
        <div className="galerias-fotos-alameda">
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
      <div className='espacios-alameda'>
        <h1>Espacios<br></br> amplios y <br></br>  cómodos</h1>
        <div className='lineaVerticalAzulClaro'></div>
        <p>Casas de 44 m2 en lotes de 72 m2 y con placa para construir segundo piso. </p>
        <div className='lineaVerticalAzulClaro'></div>
        <div className='info-alameda'>
          <div className='info-alameda-img'>
          <img src={metros} alt="metros" />
          <img src={habitacion} alt="habitaciones" />
          <img src={bano} alt="banos" />
          <img src={otros} alt="otros" />

          </div>
          <div className='info-alameda-texto'>
            <p>44 m2 con posibilidad de ampliación.</p>
            <p>2 habitaciones.</p>
            <p>1 baño.</p>
            <p>Patio, cocina, sala-comedor y antejardín.</p>
          </div>
        </div>
      </div>
      <div className='planta-alameda'>
        <h1>Planta arquitectónica</h1>
        <img src={planta} alt="planta" />
      </div>
      <div className='comodidades-alameda'>
        <h1>Excelentes comodidades de la urbanización para compartir en familia</h1>
        <div className='lineaVerticalAzulClaro'></div>
        <div className='comodidades-alameda-lista'>
          <div className='salon'>
            <img className="logoSolo" src={logoSolo} alt="logoSolo" />
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
      <div className='ubicacion-alameda'>
        <div className='ubicacion-alameda-info'>
          <img src={ubicacion2} alt="ubicacion" />
          <h1>Fácil acceso <br></br>por vía principal</h1>
          <h2>Sincelejo - Sucre</h2>
  
        </div>
        <div className='ubicacion-alameda-maps'>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <img src={Mapa} alt="Mapa" />
          </a>
        </div>


      </div>
      <div className='alameda-eleccion'>
        <h1>Vivir en casa no es solo un sueño, <br></br> <strong>en Alameda es una realidad hecha para ti.</strong>  </h1>
        
      </div>
      <div className='alameda-info'>
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
      <div className='contactenos-alameda'>
        <div className='contactenos-alameda-info'>
          <h1>Contáctanos y recibe asesoría personalizada </h1>
          <div className='btnNaranjaAlamedaContacto'>
            <a href="https://wa.link/fgp87p" target="_blank" rel="noopener noreferrer">¡Hablemos aquí!</a>  
          </div>
          <p>O diligencia nuestro formulario <br></br>para ser contactado(a) por uno de
          nuestros asesores.</p>
        </div>
        <div className='form-alameda'>
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
            <button className='btnNaranjaAlameda' type="submit">Solicitar Información</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Sauce;