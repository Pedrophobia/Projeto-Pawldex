import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container">
      <h2>Bem-vindo ao Guia de Criaturas</h2>
      <p>Explore as espécies, verifique os seus atributos e gira a sua coleção de capturas.</p>
      <Link to="/listagem" className="btn-primary">
        Aceder à Listagem
      </Link>
    </div>
  );
}