import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import { CgShoppingBag } from "react-icons/cg"

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>DOCE LAR DA CACA</span>

            </div>
            <div className={css.right}>
                <div className={css.menu}></div>
                <ul className={css.menu}>
                    <li>Coleções</li>
                    <li>Marcas</li>
                    <li>Promoções</li>
                    <li>Vendas</li>
                    <li>Contato</li>
                </ul>
                Menu
                <input type="text" name="" className={css.search} />
                <CgShoppingBag className={css.cart} />
                <span></span>
            </div>

        </div>
    )
}

export default Header