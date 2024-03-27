import { useState, useEffect } from "react";

const MiApi = () => {
  
const [data, setdata] = useState([]);
const [busqueda, setBusqueda] = useState('')


  const dragonBall = async ()=>{
    const url = 'https://dragonball-api.com/api/characters';
    const res = await fetch(url);
    const { items } = await res.json();
    const dataOrdenada = items.sort((a, b) => a.name.localeCompare(b.name))
    setdata(dataOrdenada)
  }

  const handleBusqueda = (e)=>{
    setBusqueda(e.target.value)
  }
    useEffect(()=>{
        dragonBall();
    }, [])
    
    
  return( 

  <div className="todo">
    <input className="search" type="text" value={busqueda} onChange={handleBusqueda} placeholder="Buscar Personaje"/>
    {data
    .filter((items)=> 
    items.name.toLowerCase().includes(busqueda.toLowerCase()))
    .map((items, index)=>(
      <div className="container">
        <div className="card" key={index}>
        <img className="imagen" src={items.image} alt={items.name}/>
        <h1 className="titulo">{items.name}</h1>
        <p className="parrafo">Poder de pela: {items.ki}</p>
        <p className="parrafo">Raza: {items.race}</p>
        <p className="parrafo">Descripción: {items.description}</p>
        </div>
</div>
    ))
    
    }
    
    </div>
  );
};

export default MiApi;

// Hora que quede es a las 1:39