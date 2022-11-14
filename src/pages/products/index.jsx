import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonGroup from '../../layouts/ButtonGroup';
import ItemListContainer from '../../layouts/ItemListContainer'
import "./style.css"




const items = [
                    {id:0,cat:"tech",name:"Auriculares gamer inalámbricos HyperX Cloud Stinger Core Wireless + 7.1 negro",price:"$17.399",image:"https://http2.mlstatic.com/D_NQ_NP_604648-MLA46478026978_062021-O.webp"},  
                    {id:1,cat:"home",name:"Ventilador 3en1 Bestron Ven-fh1209 3 Palas 80w 1,70mts Cuota",price:"$9.999",image:"https://http2.mlstatic.com/D_NQ_NP_627561-MLA48626520552_122021-O.webp"},  
                    {id:2,cat:"home",name:"Colchon",price:"$34.971",image:"https://http2.mlstatic.com/D_NQ_NP_643479-MLA48403939234_122021-O.webp"},  
                    {id:3,cat:"outdoor",name:"Bicicleta Mtb Firebird 19293 R26 18v Power V-brake Pc",price:"$34.000",image:"https://http2.mlstatic.com/D_NQ_NP_810188-MLA52286501344_112022-O.webp"},  
                    {id:4,cat:"tech",name:"Smart Tv",price:"$85.999",image:"https://http2.mlstatic.com/D_NQ_NP_886670-MLA44628265236_012021-O.webp"}
                ]




const Index = () => {
    const navigate = useNavigate();
    const detail = (id) => {
        navigate(`/details${id}`,{state: id})
    }
  return (
    <>
    <ButtonGroup class="group"/>
    <ItemListContainer>
    {items.map(item => 
      <div class="d-flex justify-content-center container mt-5">
      <div class="card p-3 bg-white"><i class="fa fa-apple"></i>
          <div class="about-product text-center mt-2"><img src={item.image} width="300"/>
              <div>
                  <h4>#{item.id}</h4>
                  <h6 class="mt-0 text-black-50">{item.name}</h6>
              </div>
          </div>
          <div class="d-flex justify-content-between total font-weight-bold mt-4"><span>Total</span><span>{item.price}</span></div>
          <div class="d-flex justify-content-between total font-weight-bold mt-4"><span>More Details</span><span><i class="bi bi-zoom-in po" onClick={click => detail(item.id)}></i></span></div>

      </div>
  </div>)}
    </ItemListContainer>
    
    </>
  )
}

export default Index