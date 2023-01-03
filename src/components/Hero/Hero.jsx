import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/lar.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
    return (
        <div className={css.container}>
            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}> Tudo de mais bonito para seu lar </span>
                <span className={css.text2}>Aqui dua casa vai ficar muito linda e confortável com dicas de decoração e muita beleza </span>

            </div>
            {/* middle side hero image  */}
            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img src={HeroImg} alt="" width={600} />
                <div className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span> Best Signup Offers</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>







    )
}

export default Hero