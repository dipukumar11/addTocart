import './Botol.css'

const Botol = ({botol, botolClick}) => {
    console.log(botol)
    const {name,img,price}=botol;
    return (
        <div className="box">
            <h1>Product Name:{name} </h1>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={()=>botolClick(botol)} type="button">Buy Now</button>
            
        </div>
    );
};

export default Botol;