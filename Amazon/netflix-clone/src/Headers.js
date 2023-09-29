import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { initialState } from './reducer';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Headers(props) {

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }
    const [{ basket, user }] = useStateValue();
    console.log(basket);
    return (
        <nav className={styles.header}>
            {/* logo on the left->img */}
            <Link to="/">
                <img
                    className={styles.header__logo}
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=" not uploaded" />
            </Link>
            {/* Search box */}
            <div className={styles.header__search}>
                <input text='text' className={styles.header__searchInput} />
                <SearchIcon className={styles.header__searchIcon} />
            </div>

            <div className={styles.header__nav}>
                {/* 4 Links */}
                {/* 1st link */}
                {/* we use <Link> instead of <a> because <Link> will cause whole page to refresh whereas <Link> will not refresh whole html page */}
                <Link to="/login" className={styles.header__link}>
                    <div onClick={login} className={styles.header__option}>
                        <span className={styles.header__optionLineOne}>Hello{user?.email}</span>
                        <span className={styles.header__optionLineTwo}>{user ? 'Sign Out' : 'Sign in'} </span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className={styles.header__link}>
                    <div className={styles.header__option}>
                        <span className={styles.header__optionLineOne}>Returns</span>
                        <span className={styles.header__optionLineTwo}>& Orders</span>
                    </div>
                </Link >
                {/* 3rd link Basket icon*/}
                <Link to="/" className={styles.header__link}>
                    <div className={styles.header__option}>
                        <span className={styles.header__optionLineOne}>Your</span>
                        <span className={styles.header__optionLineTwo}>Prime</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    {/* Basket icon with number */}
                    <div className={styles.header__optionBasket}>
                        <ShoppingBasketIcon />
                        <span className={`${styles.header__optionLineTwo} ${styles.header_BasketCount}`}>{basket?.length}</span>
                    </div>
                </Link>
            </div >
        </nav >
    )
}

export default Headers
