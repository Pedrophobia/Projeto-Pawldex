import {useParams} from "react-router-dom";

import pawls from "../data/pawls.json";

import BackButton from "../components/BackButton";


export default function Detalhes(){


const {id}=useParams();


const pal=pawls.find(
(p)=>p.id===Number(id)
);



return(

<div className="page-container">


<BackButton/>


<h1>
{pal.nome}
</h1>


<img 
src={pal.imagem}
width="250"
/>


<h3>
Tipo:
{pal.tipo}
</h3>


<h3>
Ataque:
{pal.atributos.ataque}
</h3>


<h3>
Defesa:
{pal.atributos.defesa}
</h3>


<h3>
Velocidade:
{pal.atributos.velocidade}
</h3>


</div>

)

}