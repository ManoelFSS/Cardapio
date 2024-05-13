import React from "react";
import {Routes, Route} from "react-router-dom"
import { Home } from "./componentes/home/Home";
import { Cardapio } from "./componentes/cardapio/Cardapio";

export const Rotas = () =>{
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home/>}
                />
                <Route
                    path="/Cardapio"
                    element={<Cardapio/>}
                />
            </Routes>
        </>
    )
}