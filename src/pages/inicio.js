import React, { useState } from 'react';
import '../App.css';
import BannerHome from '../utils/inicio/Banner-Home.webp';
import Constructor from '../utils/inicio/constructor.webp';
import Vivienda from '../utils/inicio/vivienda.webp';
import LogosProyectos from '../utils/inicio/Logos-proyectos.webp';
import Grua from '../utils/inicio/Grua.webp';
import emailjs from '@emailjs/browser';

const Inicio = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    autorizacion: false,
  });
  /*
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization", // O "LocalBusiness" si tienes ubicación física
    "name": "Enfoque constructores",
    "url": "https://www.enfoqueconstructores.com",
    "logo": "https://sandiamercadeo.com/logoSC.png",
    "description": "Somos una agencia especializada en estrategias de marketing digital, gestión de redes sociales, publicidad digital, SEO y SEM, y diseño de landing pages.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57 320 619 2322",
      "contactType": "CEO",
      "areaServed": "Colombia",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://www.instagram.com/sandiacreativemarketing?igsh=cTV1cDYxM2x4czBv"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Marketing",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Estrategias de Marketing Digital",
            "description": "Creamos estrategias personalizadas para hacer crecer tu negocio en línea."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Gestión de Redes Sociales",
            "description": "Administramos tus redes sociales para maximizar el alcance y engagement de tu marca."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Publicidad Digital",
            "description": "Campañas publicitarias en Google Ads, Facebook Ads, y otras plataformas."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "SEO y SEM",
            "description": "Mejora tu posicionamiento en los motores de búsqueda y aumenta tu visibilidad."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Diseño y Desarrollo de Landing Pages",
            "description": "Diseñamos y desarrollamos landing pages efectivas con dominio propio."
          }
        }
      ]
    }
  };*/
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
      to_email: 'servicioalcliente@enfoqueconstructores.com', // Define el destinatario aquí,
      tipo: formData.tipoUsuario === "Soy constructor" ? "Construcción" : "Vivienda"
    };

    console.log(templateParams)

    emailjs
      .send(
        'service_25ja9cm', // Reemplaza con tu Service ID
        'template_w4dndmd', // Reemplaza con tu Template ID
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
            tipo:'',
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
    <div className='inicio'>
       {/*<Helmet>
          <title>Enfoque construtores</title>
          <meta name="description" content="Agencia de marketing digital especializada en SEO, SEM, y gestión de redes sociales." />
          <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>*/}
      <img className="BannerHome" src={BannerHome} alt="BannerHome" />
      <div className='aliados'>
        <div className='aliadosInfo'>
          <h2>Nos encargamos que la construcción y la compra de vivienda sean procesos más simples, eficientes y seguros.</h2>
          <div className='cuadro-gris-btn'>
            <h3>¿Eres constructor o buscas vivienda?</h3>
            <div className='btnGrisClaro'>
              <a href="#contacto">Haz clic aquí</a>
            </div>
            <h3>Para ponernos en contacto</h3>
          </div>   
        </div>
        <div className='constructor-vivienda'>
          <div className='constructor'>
            <img className="constructor" id="elemento1" src={Constructor} alt="Constructor" />
            <h3 id="elemento2">Si eres <strong>constructor</strong></h3>
            <p id="elemento3">Nos encargamos de la gestión administrativa,
              jurídica y financiera de tus proyectos, para
                que te enfoques en lo más importante: construir.
                Además, vendemos tus desarrollos al cliente final,
                  asegurando que lleguen a las personas indicadas.</p>

          </div>
          <div className='vivienda'>
            <img className="vivienda" id="elemento1" src={Vivienda} alt="Vivienda" />
            <h3 id="elemento2">Si <strong>buscas vivienda</strong></h3>
            <p id="elemento3">Para invertir o vivir, te conectamos con 
              proyectos confiables y bien gestionados, 
              brindándote acompañamiento en cada paso hasta 
              la entrega de tu nuevo hogar.</p>
          </div>

        </div>
      </div>
      <div className='proyectos-list'>
        <div className='proyectos-list-info'>
          <div className='lineaVertical'></div>
          <div className='proyectos-list-info-text'>
            <h1 style={{color: 'var(--naranja)'}}>Más de 16</h1>
            <h1 style={{color: '#fff'}}>proyectos</h1>
            <h1 style={{color: '#fff'}}>desarrollados</h1>
            <p>Conoce algunos de ellos</p>
          </div>
        </div>
        <div className='LogosProyectosDiv'>
          <img className='LogosProyectos' src={LogosProyectos} alt="LogosProyectos" />
        </div>
        
      </div>
      <div className='clientes'>
        <div className='clientes-logo'>
          <h1>Conoce algunos de nuestros clientes</h1>
          <div className="ovalGrey">
            <div className="circleDarkGrey"></div>
          </div>
          <img className='grua' src={Grua} alt="Grua" />
        </div>
        <dvi className='clientes-info'>
          <ul>
            <li>Promotora Altos de Plan Parejo S.A.S.</li>
            <li>Promotora Mirador de Plan Parejo S.A.S.</li>
            <li>Promotora las Heliconias S.A.S.</li>
            <li>Promotora Karakolí S.A.S.</li>
            <li>Palo Santo Construcciones .S.A.S.</li>
            <li>Promotora Piamonte S.A.S</li>
            <li>Promotora Oro Blanco S.A.S.</li>
            <li>Promotora Mandala S.A.S.</li>
            <li>Promotora Los Nogales S.A.S.</li>
            <li>Promotora Arboleda S.A.S.</li>
            <li>Virente Construcciones S.A.S.</li>
            <li>Promotoa Navio S.A.S.</li>
            <li>Promotora Andalucía S.A.S.</li>
          </ul>
        </dvi>

      </div>
      <div className='constructor-vivienda-form'>
        <div className='mensaje-constructor-vivienda'>
          <h2>Eres constructor o buscas vivienda?</h2>
          <h3>Diligencia nuestro formulario para ser contactado(a)
            en el menor tiempo posible y brindarte toda la información.</h3>
        </div>

        
        <div className='form-inicio'>
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
                <label>¿Eres constructor o buscas vivienda?</label>
                <select
                  name="tipoUsuario"
                  value={formData.tipoUsuario}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="constructor">Soy constructor</option>
                  <option value="busco-vivienda">Busco vivienda</option>
                </select>
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
              <div className='autorizo-checkbox-inicio'>
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
              <button className='btnNaranjaAcacias' type="submit">Enviar información</button>
            </form>
          </div>
          </div>
     
      
      
    
    </div>
  );
};

export default Inicio;
