import React from 'react'
import {useData} from '../../context/dataContext'
import Header from '../Header/Header'
const Cart = () => {
    const {state : {cart}} = useData()
    return (
        <div>
            <Header />
            {cart.length > 0 ? cart.map(each => <h1>{each.productName}</h1>) : <h1>cart is emppty</h1>}
        </div>
    )
}

export default Cart;