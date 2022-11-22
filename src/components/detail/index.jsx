import React from 'react'
import { useParams } from 'react-router-dom'
import "./style.css"


const items = [
  {id:0,cat:"tech",name:"Auriculares gamer inalámbricos HyperX Cloud Stinger Core Wireless + 7.1 negro",price:"$17.399",image:"https://http2.mlstatic.com/D_NQ_NP_604648-MLA46478026978_062021-O.webp"},  
  {id:1,cat:"tech",name:"Ventilador 3en1 Bestron Ven-fh1209 3 Palas 80w 1,70mts Cuota",price:"$9.999",image:"https://http2.mlstatic.com/D_NQ_NP_627561-MLA48626520552_122021-O.webp"},  
  {id:2,cat:"home",name:"Colchon",price:"$34.971",image:"https://http2.mlstatic.com/D_NQ_NP_643479-MLA48403939234_122021-O.webp"},  
  {id:3,cat:"outdoor",name:"Bicicleta Mtb Firebird 19293 R26 18v Power V-brake Pc",price:"$34.000",image:"https://http2.mlstatic.com/D_NQ_NP_810188-MLA52286501344_112022-O.webp"},  
  {id:4,cat:"tech",name:"Smart Tv",price:"$85.999",image:"https://http2.mlstatic.com/D_NQ_NP_886670-MLA44628265236_012021-O.webp"}
]


const Index = () => {
  const params = useParams();

  console.log(items[parseInt(params.id)])
  return (
    <>
<div class="wrapper">
    <div class="product-img">
      <img src={items[parseInt(params.id)].image}  alt={items[parseInt(params.id)].name} height="420" width="327"/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>{items[parseInt(params.id)].name}</h1>
      </div>
      <div class="product-price-btn">
        <p>{items[parseInt(params.id)].price}</p>
        <button type="button" onClick={click => alert("Comprado")}>buy now</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default Index