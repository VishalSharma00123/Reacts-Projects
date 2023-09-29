import React from 'react'
import style from './Home.module.css'
import myImage from './image.png'
import Product from './Product'

function Home() {
    return (
        <main>
            <div className={style.home}>
                <img
                    className={style.home__image}
                    src={myImage} alt="not uploaded" />

                {/* product id,title,price,rating.image */}
            </div>
            <div className={style.home__row}>
                <Product
                    id={12345}
                    title={'The Lean Startup: low Constant Innovation'}
                    price={117.96}
                    rating={5}
                    image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg'} />
                <Product
                    id={12346}
                    title={'Fastrack New Limitless FS1 Smart Watch|Biggest 1.95" Horizon Curve Display|SingleSync BT Calling v5.3|Built-in Alexa|Upto 5 Day Battery|ATS Chipset with Zero Lag|100+ Sports Modes|150+ Watchfaces'}
                    price={'1,795'}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/615f7xtX5LL._UX522_.jpg"} />
            </div>
            <div className={style.home__row}>
                <Product
                    id={12347}
                    title={'Bodyband Hand Grip Workout Strengthener, Adjustable Hand Gripper for Men & Women for Gym Workout Hand Exercise Equipment to Use in Home for Forearm Exercise'}
                    price={139}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/51df0s6DzmL._SX679_.jpg"} />
                <Product
                    id={12348}
                    title={`ASIAN Men's Wonder-13 Sports Running Shoes`}
                    price={'2.300'}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/61utX8kBDlL._UY675_.jpg"} />
                <Product
                    id={12349}
                    title={'The Monk Who Sold His Ferrari'}
                    price={219}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/417WFuXHHzL._SX322_BO1,204,203,200_.jpg"} />
            </div>
            <div className={style.home__row}>
                <Product
                    id={12350}
                    title={'Sony Bravia 195 cm (77 inches) XR Series 4K Ultra HD Smart OLED Google TV XR-77A80L (Black)'}
                    price={'4,13,990'}
                    rating={5}
                    image={"https://m.media-amazon.com/images/I/81sFUK4Sv0L._SX466_.jpg"} />

            </div>
            {/* product  */}
        </main>
    )
}

export default Home
