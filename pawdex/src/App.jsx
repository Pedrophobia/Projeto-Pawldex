import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Listagem from "./pages/Listagem";
import Detalhes from "./pages/Detalhes";

import "./App.css";


function App(){

return(

<BrowserRouter>

<div className="app-layout">

<Header/>

<main className="content">

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/listagem" element={<Listagem/>}/>

<Route path="/pal/:id" element={<Detalhes/>}/>

</Routes>

</main>


<Footer/>

</div>


</BrowserRouter>


)

}

export default App;