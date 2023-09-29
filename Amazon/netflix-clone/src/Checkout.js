import React from 'react'
import { useStateValue } from './StateProvider'
import classes from './Checkout.module.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className={classes.checkout}>
            <div >
                <img className={classes.checkout__ad} src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="hgfghf" />
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2 className={classes.h2}>Your Shopping basket is empty</h2>
                        </div>
                    ) :
                        (
                            <div>
                                <h2 className={classes.checkout__title}>Your Shopping Basket</h2>
                                {basket?.map((item) =>
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                )}
                            </div>
                        )
                }
            </div>
            {

                basket.length > 0 && (
                    <div className={classes.checkout__right}>
                        <Subtotal />
                    </div>
                )
            }
        </div>
    )
}

export default Checkout
