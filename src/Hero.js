import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero">
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Infraestructura de pagos para Internet</h1>
          <p>Millones de empresas de todos los tamaños, desde startups hasta grandes empresas, usan el software y las API de Stripe para aceptar pagos, enviar transferencias y gestionar sus actividades comerciales en Internet.</p>
        <button className='btn'>Empezar ahora</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
