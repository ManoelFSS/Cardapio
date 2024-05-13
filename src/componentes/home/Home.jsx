import React from "react"
import styles from "./Home.module.css"
import Marmitex from "../../assets/marmitex01.png"
import {Link} from "react-router-dom"

export const Home = () => {
    return (
        <section className={styles.conainer_home}>
            <div className={styles.left_box}>
                <div className={styles.icone_text}>
                    <span>😋</span>
                    <h4>Perde tempo não!</h4>
                </div>
                <h2>
                    O Marmitex
                    mais Barato e Saboroso
                    da Sua Cidade ! 
                </h2>
                <p>
                    O Restaurante Comida Boa traz para você sabor e qualidade.<br/>
                    contamos com um Cardápio variado, Então
                    Peça já o seu..
                </p>
                <Link to={"/Cardapio"}>
                    <button>Montar Cardápio</button>
                </Link>
            </div>
            <div className={styles.rigth_box}>
                <img src={Marmitex} alt="" />
            </div>
        </section>
    )
}