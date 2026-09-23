import { Link } from "react-router-dom";


export default function Card({pal,capturar,capturado}){


return(

<div className={
capturado 
? "card capturado"
: "card"
}>


<img 
src={pal.imagem}
alt={pal.nome}
/>


<h2>
{pal.nome}
</h2>


<p>
Tipo: {pal.tipo}
</p>


<div className="atributos">

<p>
⚔ Ataque: {pal.atributos.ataque}
</p>

<p>
🛡 Defesa: {pal.atributos.defesa}
</p>

<p>
⚡ Velocidade: {pal.atributos.velocidade}
</p>


</div>


<Link 
className="btn-primary"
to={`/pal/${pal.id}`}
>

Detalhes

</Link>


<button
className="btn-capturar"
onClick={()=>capturar(pal.id)}
>

{
capturado
?
"Capturado ✓"
:
"Capturar"
}


</button>


</div>


)

}