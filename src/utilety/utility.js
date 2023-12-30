const getCart = ()=>{
    const getLcalCart = localStorage.getItem('cart')
    if(getLcalCart){
        return JSON.parse(getLcalCart)
    }
    return []

}


const addTocartLS = (id)=>{
    
    const setCardls = getCart()
    setCardls.push(id)
    seveCartTols(setCardls)
}

const seveCartTols = (cart)=>{
    const setCartStingifi = JSON.stringify(cart)
    localStorage.setItem('cart', setCartStingifi)
}