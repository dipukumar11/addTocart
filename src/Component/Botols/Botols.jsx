import { useEffect } from "react";
import { useState } from "react";
import Botol from "../Botol/Botol";
import './Botols.css'


const Botols = () => {
    const [ botols, setbotols]= useState([])
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch('Botol.json')
        .then(Response => Response.json())
        .then(data => setbotols(data))
    },[])
  
   const botolClick = botol =>{
    const NewCart = [...cart, botol]
    setCart(NewCart)
   }
   



    return (
        <div>
          
          <h1>Total Botol :{botols.length} </h1>
         
         <h1>Cart: {cart.length}</h1>

            <div className="box2">
                {
                    botols.map(botol=><Botol key={botol.id} 
                        botol={botol}
                        botolClick={botolClick}
                        ></Botol>)
                }
            </div>
        </div>
    );
};

export default Botols;