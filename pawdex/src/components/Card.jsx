import { Link } from "react-router-dom";


export default function Card({pal,capturar,capturado}){


return(

<div className={capturado ? "card capturado":"card"}>


<img 
src={pal.imagem}
alt={pal.nome}
/>


<h2>

#{String(pal.id).padStart(3,"0")}

</h2>


<h2>

{pal.nome}

</h2>



<div className="tipo">

{pal.tipo}

</div>




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

Ver detalhes

</Link>


<br/>


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