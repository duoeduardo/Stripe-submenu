import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'Producto',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/products' },
      { label: 'connect', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'Desarrolladores',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'librerias', icon: <FaBook />, url: '/products' },
      { label: 'Soporte', icon: <FaBook />, url: '/products' },
      { label: 'Tarifa', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'Compañia',
    links: [
      { label: 'Empresa', icon: <FaBriefcase />, url: '/products' },
      { label: 'Socios', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;
