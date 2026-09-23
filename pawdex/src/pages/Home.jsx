import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container">
      <h2> Guia de Criaturas</h2>
      <p>Explore as espécies, verifique os seus atributos.</p>
      <Link to="/listagem" className="btn-primary">
        Listagem
      </Link>
    </div>
  );
}