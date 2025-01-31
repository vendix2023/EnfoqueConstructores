import React, { useState } from 'react';
import logoAcacias from '../../../utils/acacias/Logo.webp';
import ubicacion1 from '../../../utils/acacias/Ubicacion1.webp';
import ubicacion2 from '../../../utils/acacias/Ubicacion2.webp';
import metros from '../../../utils/acacias/Metros-cuadrados.webp';
import habitacion from '../../../utils/acacias/Habitaciones.webp';
import bano from '../../../utils/acacias/Bano.webp';
import otros from '../../../utils/acacias/Casa.webp';
import planta from '../../../utils/acacias/Planta.webp';
import logoSolo from '../../../utils/acacias/LogoSolo.webp';
import acceso from '../../../utils/acacias/Figura1.webp';
import independencia from '../../../utils/acacias/Figura2.webp';
import ambiente from '../../../utils/acacias/Figura3.webp';
import Imagen1 from '../../../utils/acacias/Imagen1.webp';
import Imagen2 from '../../../utils/acacias/Imagen2.webp';
import Imagen3 from '../../../utils/acacias/Imagen3.webp';
import Imagen4 from '../../../utils/acacias/Imagen4.webp';
import Imagen5 from '../../../utils/acacias/Imagen5.webp';
import Imagen6 from '../../../utils/acacias/Imagen6.webp';
import Imagen7 from '../../../utils/acacias/Imagen7.webp';
import Imagen8 from '../../../utils/acacias/Imagen8.webp';
import Mapa from '../../../utils/acacias/mapa.webp';
import emailjs from '@emailjs/browser';




const Sauce = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    autorizacion: false,
  });
  const fotos = [Imagen1, Imagen2, Imagen3, Imagen4,Imagen5,Imagen6,Imagen7,Imagen8];

  const googleMapsUrl = `https://www.google.com/maps?ll=10.341112,-75.409567&z=10&t=m&hl=es-ES&gl=US&mapclient=embed&q=Dg.+35+Turbaco,+Bol%C3%ADvar`;


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
      to_email: 'iyoung@enfoqueconstructores.com', // Define el destinatario aquí,
      proyecto:"Acacias"
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
    <div className='acacias'>
      <div className='banner-acacias'>
        <div className='banner-acacias-info'>
          <img className='logoAcacias' src={logoAcacias} alt="logoAcacias" />
          <h1>Proyecto de casas</h1>
          <div className='banner-ubicacion-acacias'>
            <img src={ubicacion1} alt="ubicacionNaranja" />
            <h2>Turbaco<br></br>Bolivar</h2>
          </div>
          <h3>*|Casas con posibilidad de ampliación a segundo piso</h3>
        </div>
        <div className='form-acacias'>
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
            <button className='btnNaranjaAcacias' type="submit">Solicitar Información</button>
            <div className='btnNaranjaAcacias2'>
              <a href="https://wa.link/5rrb86" target="_blank" rel="noopener noreferrer">Contactar un asesor</a>
            </div>
          </form>
        </div>
      </div>
      <div className='proyecto-acacias'>
        <h1>Proyecto de casas <br></br> desde $166.400.000</h1>
      </div>
      <div className='descubre-acacias'>
      <div className='descubre-acacias-texto'>
        <p><strong>Las Acacias </strong>
        es más que un proyecto de casas, es la oportunidad de vivir como siempre soñaste. 
        <strong> Ubicado en Turbaco - Bolivar a tan solo 30 minutos de Cartagena, </strong> 
        con 500 viviendas independientes; disfrutarás de un hogar con patio y antejardín, ideal para ti y tu familia. 
        <strong>¡Conoce lo que hace de Las Acacias un lugar especial!</strong> </p>
        <div className='btnNaranjaNavbar'>
          <a href="https://drive.google.com/drive/folders/1Fjm5bHGXnTKuoF68ZOlEcfpvVpiWH7zL" target="_blank" rel="noopener noreferrer">Avance de obra</a>
        </div>
        </div>
        <div className="galerias-fotos-acacias">
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
      <div className='espacios-acacias'>
        <h1>Espacios<br></br> amplios y <br></br>  cómodos</h1>
        <div className='lineaVerticalNaranja'></div>
        <p>Casas de 61 m2 en lotes de 98 m2 y con placa para construir segundo piso.</p>
        <div className='lineaVerticalNaranja'></div>
        <div className='info-acacias'>
          <div className='info-acacias-img'>
          <img src={metros} alt="metros" />
          <img src={habitacion} alt="habitaciones" />
          <img src={bano} alt="banos" />
          <img src={otros} alt="otros" />

          </div>
          <div className='info-acacias-texto'>
            <p>61 m2 con posibilidad de ampliación. </p>
            <p>2 habitaciones.</p>
            <p>1 baño.</p>
            <p>Patio, cocina, sala-comedor y antejardín.</p>
          </div>
        </div>
      </div>
      <div className='planta-acacias'>
        <h1>Planta arquitectónica</h1>
        <img src={planta} alt="planta" />
      </div>
      <div className='comodidades-acacias'>
        <h1>Excelentes comodidades de la urbanización para compartir en familia</h1>
        <div className='lineaVerticalVerdeOscuro'></div>
        <div className='comodidades-acacias-lista'>
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
          <div className='elemento'>
            <img src={logoSolo} alt="logoSolo" />
            <p>Elemento de lista.</p>
          </div>
          <div className='lago'>
            <img src={logoSolo} alt="logoSolo" />
            <p>Lago.</p>
          </div>
        </div>
      </div>
      <div className='ubicacion-acacias'>
        <div className='ubicacion-acacias-info'>
          <img src={ubicacion2} alt="ubicacion" />
          <h1>Fácil acceso</h1>
          <h2>Turbaco - Bolivar</h2>
          <h3>A tan solo 30 minutos de Cartagena</h3>
        </div>
        <div className='ubicacion-acacias-maps'>
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <img src={Mapa} alt="Mapa" />
          </a>
        </div>


      </div>
      <div className='acacias-eleccion'>
        <h1>Si buscas un lugar que lo tenga todo, <br></br> <strong>Las Acacias te abre las puertas de tu nuevo hogar.</strong>  </h1>
        
      </div>
      <div className='acacias-info'>
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
      <div className='contactenos-acacias'>
        <div className='contactenos-acacias-info'>
          <h1>Contáctanos y recibe asesoría personalizada </h1>
          <div className='btnNaranjaAcaciasContacto'>
            <a href="https://wa.link/5rrb86" target="_blank" rel="noopener noreferrer">¡Hablemos aquí!</a>  
          </div>
          <p>O diligencia nuestro formulario <br></br>para ser contactado(a) por uno de
          nuestros asesores.</p>
        </div>
        <div className='form-acacias'>
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
            <button className='btnNaranjaAcacias' type="submit">Solicitar Información</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Sauce;