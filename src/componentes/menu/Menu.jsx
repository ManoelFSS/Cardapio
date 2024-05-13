import React from "react"
import styles from "./Menu.module.css"
import { Link } from "react-router-dom"


export const Menu_navigation = () => {
    return (
        <section className={styles.nav_bar}>
            <h1>Comida • Boa </h1>
            <nav>
                <ul>
                    <li><Link to={"/"} className={styles.link}>Inicio</Link></li>
                    <li><Link to={"/Cardapio"} className={styles.link}>Cadápio</Link></li>
                    <li><Link className={styles.link}>Serviços</Link></li>
                    <li><Link className={styles.link}>Contato</Link></li>
                </ul>
            </nav>
        </section>
    )
}