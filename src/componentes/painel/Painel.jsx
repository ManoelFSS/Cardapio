import React from "react"
import styles from "./Painel.module.css"
import { Menu_navigation } from "../menu/Menu"
import { Rotas } from "../../Rotas"

export const Painel = () => {
    return (
        <>
            <header className={styles.header}>
                <Menu_navigation/>
            </header>
            <main className={styles.main}>
                <Rotas/>
            </main>
        </>
    )
}