import React, { useEffect, useState } from "react";
import styles from "./Cardapio.module.css";

import Marmita from "../../assets/marmita01.png";
import Baiao from "../../assets/baiao02.jpg";
import Arroz from "../../assets/arroz.png";
import SaladaCrua from "../../assets/saladaCrua.png";
import SaladaCozida from "../../assets/saladaCozida.png";
import FeijaoCaldo from "../../assets/caldo04.png";
import FeijaoTropeiro from "../../assets/tropeiro03.png";
import Macarao from "../../assets/macarao.png";
import FrangoFrito from "../../assets/frangoFrito.png";
import FrangoCozido from "../../assets/frangoCozido.png";
import FileFrango from "../../assets/fileFrango.png";

export const Cardapio = () => {
  const [dataCardapio] = useState([
    { produto: "Baião de 2", categoria: "Tradicionais" },
    { produto: "Arroz", categoria: "Tradicionais" },
    { produto: "Macarão", categoria: "Tradicionais" },
    { produto: "Salada Crua", categoria: "Saladas" },
    { produto: "Frango Apassarinho", categoria: "Carnes" },
    { produto: "Frango Cozido", categoria: "Carnes" },
    { produto: "Filé de Frango Frito", categoria: "Carnes" },
    { produto: "Boi Cozido", categoria: "Carnes" },
    { produto: "Linguiça Assada", categoria: "Carnes" },
    { produto: "Bisteca de Porco", categoria: "Carnes" },
    { produto: "Carde de Sol", categoria: "Carnes" },
    { produto: "Salada Cozida", categoria: "Saladas" },
    { produto: "Feijão de caldo", categoria: "Feijões" },
    { produto: "Feijão Tropeiro", categoria: "Feijões" },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [carnes, setCarnes] = useState([]);
  const [macarao, setMacarao] = useState("");
  const [baiao, setBaiao] = useState("");
  const [arroz, setArroz] = useState("");
  const [caldoTropeiro, setcaldoTropeiro] = useState("");
  const [saladaCrua, setSaladaCrua] = useState("");
  const [saladaCozida, setSaladaCozida] = useState("");

  const [countCarnes, setCountCarnes] = useState(0);

  const handleCardapio = (item, index) => {
    const productName = item.target.nextElementSibling.innerText;
    const span = item.target;

    if (!selectedItems.includes(productName)) {
      // Adiciona o item selecionado
      if (
        (productName === "Frango Apassarinho" ||
          productName === "Frango Cozido" ||
          productName === "Filé de Frango Frito" ||
          productName === "Boi Cozido" ||
          productName === "Linguiça Assada" ||
          productName === "Bisteca de Porco" ||
          productName === "Carde de Sol") &&
        countCarnes < 2
      ) {
        setCountCarnes(countCarnes + 1);
        setSelectedItems(Array.from(new Set([...selectedItems, productName])));
        span.classList.add(styles.ativo);
        
        if(productName === "Frango Apassarinho"){
          setCarnes([...carnes,{ nome:FrangoFrito, id: index}])
        }

        if(productName === "Frango Cozido"){
          setCarnes([...carnes,{nome: FrangoCozido, id: index}])
        }

        if(productName === "Filé de Frango Frito" ){
          setCarnes([...carnes, {nome: FileFrango, id:index}])
        }

        if(productName === "Boi Cozido" ){
          setCarnes([...carnes, BoiCozido])
        }

        if(productName === "Linguiça Assada"  ){
          setCarnes([...carnes, Linguica])
        }

        if(productName === "Bisteca de Porco"  ){
          setCarnes([...carnes, Bisteca])
        }

        if(productName === "Bisteca de Porco"  ){
          setCarnes([...carnes, Bisteca])
        }

        if(productName === "Carde de Sol" ){
          setCarnes([...carnes, solCarne])
        }
       
      }
    
      if (
        !(productName === "Frango Apassarinho" ||
          productName === "Frango Cozido" ||
          productName === "Filé de Frango Frito" ||
          productName === "Boi Cozido" ||
          productName === "Linguiça Assada" ||
          productName === "Bisteca de Porco" ||
          productName === "Carde de Sol")
      ) {
        setSelectedItems( Array.from(new Set([...selectedItems, productName])));
        span.classList.add(styles.ativo);
        
      } else {
        console.log("Limite de seleção de carnes atingido!");
        
      }

      if (productName === "Baião de 2") {
        setBaiao(Baiao );
        setArroz("")
        
      }
      if (productName === "Arroz") {
        setArroz(Arroz);
        setBaiao("")
        
      }

      if (productName === "Feijão de caldo" || productName === "Feijão Tropeiro") {
        setcaldoTropeiro(productName === "Feijão de caldo" ? FeijaoCaldo : FeijaoTropeiro); 
        setBaiao("")
      }

      if(productName === "Salada Crua" ){
        setSaladaCrua(SaladaCrua)
      }

      if(productName === "Salada Cozida" ){
        setSaladaCozida(SaladaCozida)
      }

      if (productName === "Macarão") {
        setMacarao(Macarao);
      }


    } else {
      // Remove o item selecionado
      const updatedItems = selectedItems.filter(
        (item) => item !== productName
      );
     
      setSelectedItems(updatedItems);

      if (productName === "Salada Crua" || productName === "Salada Cozida") {
        span.classList.remove(styles.ativo);

        if(productName === "Salada Crua" ){
          setSaladaCrua("")
        }
  
        if(productName === "Salada Cozida" ){
          setSaladaCozida("")
        }
      }

      if (productName === "Feijão de caldo" || productName === "Feijão Tropeiro") {
        span.classList.remove(styles.ativo);
      }

      if (productName === "Macarão" || productName === "Arroz" || productName === "Baião de 2") {
        span.classList.remove(styles.ativo);
      }

      if (productName === "Macarão") {
        setMacarao("");
      }


      if (
        productName === "Frango Apassarinho" ||
        productName === "Frango Cozido" ||
        productName === "Filé de Frango Frito" ||
        productName === "Boi Cozido" ||
        productName === "Linguiça Assada" ||
        productName === "Bisteca de Porco" ||
        productName === "Carde de Sol"
      ) {
     
        setCountCarnes(countCarnes - 1);
        span.classList.remove(styles.ativo);
        //aaaaaaaaaaaaaaaaaaaaaaaa

        const updatedItems = carnes.filter(
          (el) => el.id !== index
        );


        setCarnes(updatedItems)

      }    

    }

    const circles = document.querySelectorAll("span")
    circles.forEach((circle)=>{
        if(productName === "Baião de 2"){
          
            span.classList.add(styles.ativo);
            setcaldoTropeiro("")

            if(circle.nextElementSibling.innerText === "Arroz" || circle.nextElementSibling.innerText === "Feijão de caldo" || circle.nextElementSibling.innerText === "Feijão Tropeiro"  )[
                circle.classList.remove(styles.ativo)
               
            ]
            
        }


        if(productName === "Arroz"){
            span.classList.add(styles.ativo);
            if(circle.nextElementSibling.innerText === "Baião de 2"){
                circle.classList.remove(styles.ativo)
            }
        }

        if(productName === "Feijão de caldo"){
            span.classList.add(styles.ativo);
           
            if(circle.nextElementSibling.innerText === "Feijão Tropeiro" || circle.nextElementSibling.innerText === "Baião de 2"){
                circle.classList.remove(styles.ativo)
            }
        }

        if(productName === "Feijão Tropeiro"){
          span.classList.add(styles.ativo);
  
          if(circle.nextElementSibling.innerText === "Feijão de caldo" || circle.nextElementSibling.innerText === "Baião de 2"){
              circle.classList.remove(styles.ativo)
          }
      }

    })

     // Remover arroz e feijão se Baião de 2 for selecionado
    if (productName === "Baião de 2") {
      const updatedItems = selectedItems.filter(
        (item) => item !== "Arroz" && item !== "Feijão de caldo" && item !== "Feijão Tropeiro"
      );
      updatedItems.push("Baião de 2")
      setSelectedItems(Array.from(new Set(updatedItems)));

    }

    if (productName === "Arroz") {
      const updatedItems = selectedItems.filter(
        (item) => item !== "Baião de 2"
      );
      updatedItems.push("Arroz")
      setSelectedItems(Array.from(new Set(updatedItems)));
      
    }

    if (productName === "Feijão de caldo") {
      const updatedItems = selectedItems.filter(
        (item) => item !== "Baião de 2" && item !== "Feijão Tropeiro"
      );
      updatedItems.push("Feijão de caldo")
      setSelectedItems(Array.from(new Set(updatedItems)));
      
    }

    if (productName === "Feijão Tropeiro") {
      const updatedItems = selectedItems.filter(
        (item) => item !== "Baião de 2" && item !== "Feijão de caldo"
      );
      updatedItems.push("Feijão Tropeiro")
      setSelectedItems(Array.from(new Set(updatedItems)));
     
    }

  };

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  const hendleInputs = () => {
    const categorias = Array.from(
      new Set(dataCardapio.map((item) => item.categoria))
    );

    return categorias.map((categoria, key) => (
      <div className={styles.div} key={key}>
        <h3>{categoria}</h3>
        {dataCardapio
          .filter((item) => item.categoria === categoria)
          .map((item, index) => (
            <div key={index}>
              <span
                className={styles.select}
                onClick={(item) => handleCardapio(item, index)}
              ></span>
              <label htmlFor={item.produto}>{item.produto}</label>
            </div>
          ))}
      </div>
    ));
  };

  return (
    <section className={styles.container_cardapio}>
      <div className={styles.left_box}>
        <div className={styles.area_box_header}>
          <h2>Cardápio</h2>
          <p>Monte sua Marmitex selecionando as Opções abaixo</p>
        </div>
        <div className={styles.area_box}>{hendleInputs()}</div>
      </div>
      <div className={styles.right_box}>
        <div className={styles.area_marmitex}>
          <img src={Marmita} alt="" />
          <img className={styles.baiao_img} src={baiao} alt="" />
          <img className={styles.arroz_img} src={arroz} alt="" />
          <img className={styles.saladaCozida_img} src={saladaCozida} alt="" />
          <img className={styles.saladaCrua_img} src={saladaCrua} alt="" />
          <img className={styles.FeijaoCaldoTropeiro_img} src={caldoTropeiro} alt="" />
          {macarao ? <img className={styles.macarao_img} src={macarao} alt="" /> : ""}
          {carnes.length >= 1 ? <img className={styles.carne01_img} src={carnes[0].nome} alt="" /> : ""}
          {carnes.length >= 2 ? <img className={styles.carne02_img} src={carnes[1].nome} alt="" /> : ""} 
        </div>
      </div>
    </section>
  );
};
