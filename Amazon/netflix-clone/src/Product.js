import React, { useState } from 'react'
import style from './Product.module.css'
import { initialState } from './reducer'
import { useStateValue } from './StateProvider'

function Product(props) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:
            {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating
            }
        })
    }
    console.log(basket);
    console.log(props.rating);
    return (
        <div className={style.product}>
            <div className={style.product__info}>
                <p>{props.title}</p>
                <p className={style.prdouct__price}>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className={style.product__rating}>
                    {Array(props.rating)
                        .fill()
                        .map((star) => {
                            return (
                                <p>star</p>
                            )
                        })}
                </div>
            </div>
            <img src={props.image} />
            <button onClick={addToBasket} >Add to basket</button>
        </div>
    )
}

export default Product
