import React from 'react'
import classes from './CheckoutProduct.module.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct(props) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(props.id, props.title, props.image, props.price, props.rating);
    const RemoveFromBasket = () => {

        console.log("remove item");
        dispatch(
            {
                type: "REMOVE_FROM_BASKET",
                id: props.id,
            }
        )
    }

    return (
        <div className={classes.CheckoutProduct}>
            <img className={classes.checkoutProduct__image} src={props.image} />
            <div className={classes.checkoutProduct__info}>
                <p className={classes.checkoutProduct__title}>{props.title}</p>
                <p className={classes.checkoutProduct__price}>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className={classes.checkoutProduct__rating}>
                    {Array(props.rating)
                        .fill()
                        .map((star) => {
                            return (
                                <p>star</p>
                            )
                        })}
                </div>
                <button onClick={RemoveFromBasket}>Remove from Button</button>

            </div>
        </div>
    )
}

export default CheckoutProduct


