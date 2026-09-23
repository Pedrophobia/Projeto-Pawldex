import { useState } from "react";

import Card from "../components/Card";

import pawls from "../data/pawls.json";


export default function Listagem(){


const [pesquisa,setPesquisa]=useState("");

const [tipo,setTipo]=useState("Todos");


const [capturados,setCapturados]=useState([]);



function capturar(id){


if(capturados.includes(id)){


setCapturados(
capturados.filter(
(item)=>item!==id
)
)


}

else{


setCapturados(
[
...capturados,
id
]
)


}


}



const tipos=[
"Todos",
...new Set(
pawls.map(
(p)=>p.tipo
)
)
];



const filtrados=pawls.filter((pal)=>{


return (

pal.nome
.toLowerCase()
.includes(
pesquisa.toLowerCase()
)

&&

(tipo==="Todos" || pal.tipo===tipo)

)


});



return(


<div className="page-container">


<h2>
Pawldex
</h2>


<h3>
Capturados:
{capturados.length}/{pawls.length}
</h3>



<input

className="search"

placeholder="Pesquisar Pal..."

value={pesquisa}

onChange={
(e)=>setPesquisa(e.target.value)
}

/>



<select

value={tipo}

onChange={
(e)=>setTipo(e.target.value)
}

>

{
tipos.map(
(t)=>(

<option key={t}>
{t}
</option>

)
)

}

</select>



<div className="cards-grid">


{
filtrados.map(
(pal)=>(

<Card

key={pal.id}

pal={pal}

capturar={capturar}

capturado={
capturados.includes(pal.id)
}

/>

)

)

}


</div>


</div>


)

}