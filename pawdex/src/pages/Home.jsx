import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container">
      <h2> Guia de Criaturas</h2>
      <p>Explore as espécies, verifique os seus atributos (esta faltando MUITOS pawls e alguns pawls estao errados).</p>
      <Link to="/listagem" className="btn-primary">
        Listagem
      </Link>
    </div>
  );
}