import React, { useEffect, useState } from "react";
import styles from "./Cardapio.module.css"
import Marmita from "../../assets/marmita01.png"
import baiao from "../../assets/baiao.png"
import Arroz from "../../assets/arroz.png"




export const Cardapio = () => {

    const [dataCardapio, setDataCardapio] = useState([

        {
            produto: "Baião de 2",
            categoria: "Tradicionais"

        },
        {
            produto: "Arroz",
            categoria: "Tradicionais"
        },
        {
            produto: "Macarão",
            categoria: "Tradicionais"
        },
        {
            produto: "salada Crua",
            categoria: "Saladas"
        },
        {
            produto: "Frango Apassarinho",
            categoria: "Carnes"
        },
        {
            produto: "Frango Cozido",
            categoria: "Carnes"
        },
        {
            produto: "Filé de Frango Frito",
            categoria: "Carnes"
        },
        {
            produto: "Boi Cozido",
            categoria: "Carnes"
        },
        {
            produto: "Linguiça Assada",
            categoria: "Carnes"
        },
        {
            produto: "Bisteca de Porco",
            categoria: "Carnes"
        },
        {
            produto: "Carde de Sol",
            categoria: "Carnes"
        },
        {
            produto: "salada Cozida",
            categoria: "Saladas"
        },
        {
            produto: "Feijão de caldo",
            categoria: "Feijões"
        },
        {
            produto: "Feijão Tropeiro",
            categoria: "Feijões"
        },
       

    ])

    const [baiaoArroz, setbaiaoArroz] = useState();


    const [categorias, setCategorias] = useState([]);
    const [cardapioItem, setCardapioItem] = useState([])
    const [caunt, setCaunt] = useState(1)

   let fundo = true
    
 
    const hendleCardapio = (item) => {
        
        
           // verifica se item tem o fundo "" e add uma cor  e add img  conrespondente
           if( item.target.style.backgroundColor === ""){
    
            if(
                item.target.nextElementSibling.innerText === "Frango Apassarinho" ||
                item.target.nextElementSibling.innerText === "Frango Cozido" ||
                item.target.nextElementSibling.innerText === "Filé de Frango Frito" ||
                item.target.nextElementSibling.innerText === "Boi Cozido" ||
                item.target.nextElementSibling.innerText === "Linguiça Assada" ||
                item.target.nextElementSibling.innerText === "Bisteca de Porco" ||
                item.target.nextElementSibling.innerText === "Carde de Sol" 
                
            ){
                if(caunt <= 2){
                    item.target.style.backgroundColor = "#FB9400"
                    setCaunt(caunt + 1)
                }else{
                    setCaunt(3)
                }
    
           
            }else{
                item.target.style.backgroundColor = "#FB9400"
            }
    
            
            if(item.target.nextElementSibling.innerText === "Baião de 2" || item.target.nextElementSibling.innerText === "Arroz"){
                // add img do baiao ou arroz 
               setbaiaoArroz( item.target.nextElementSibling.innerText === "Baião de 2" ? baiao :  item.target.nextElementSibling.innerText === "Arroz" ? Arroz : baiao)
            }
             
        }else {
            if(item.target.nextElementSibling.innerText === "Baião de 2" || item.target.nextElementSibling.innerText === "Arroz"){
                setbaiaoArroz("")
            }else{
                setCaunt(caunt - 1)

            }

            item.target.style.backgroundColor = ""
            // filtrando array sem sucesso
        
            const cardapioFill = cardapioItem.filter((el)=> el !== item.target.nextElementSibling.innerText )
            console.log(cardapioFill)
            setCardapioItem(cardapioFill)
            fundo = false
         
        }


          // pegando todos os span 
        const select = document.querySelectorAll("span")
    
        select.forEach((e)=> {
             
  
              if(item.target.nextElementSibling.innerText === "Baião de 2" ){
                 
                  if(e.nextElementSibling.innerText === "Arroz" || e.nextElementSibling.innerText === "Feijão de caldo" || e.nextElementSibling.innerText === "Feijão Tropeiro" ) {
                      e.style.backgroundColor = ""
                  }
                  
              }
             
  
              if(item.target.nextElementSibling.innerText === "Arroz" ){
                 
                  if(e.nextElementSibling.innerText === "Baião de 2") {
                      e.style.backgroundColor = ""
                  }
                  
              }
  
              if(item.target.nextElementSibling.innerText === "Feijão de caldo" || item.target.nextElementSibling.innerText === "Feijão Tropeiro"  ){
                 // verifica se a opçao baiao e desmarca
                  if(e.nextElementSibling.innerText === "Baião de 2") {
                      e.style.backgroundColor = ""
                  }
                  // verifica a opçao arroz e verifica se cor e fundo e "" para manter ou nao a img do arroz
                  if(e.nextElementSibling.innerText === "Arroz"){
                      e.style.backgroundColor === "" ?  setbaiaoArroz('') : setbaiaoArroz(Arroz) 
                  }
                  
              }
  
              
              if(item.target.nextElementSibling.innerText === "Feijão de caldo" ){
                 
                  if(e.nextElementSibling.innerText === "Feijão Tropeiro") {
                      e.style.backgroundColor = ""
              
                  }
                
              }
  

              if(item.target.nextElementSibling.innerText === "Feijão Tropeiro" ){
                 
                  if(e.nextElementSibling.innerText === "Feijão de caldo") {
                      e.style.backgroundColor = ""
                  }

              }
                //  salvando no array
               
              if( e.style.backgroundColor !== "" && fundo){
                    const newCardapio = Array.from(new Set([...cardapioItem, e.nextElementSibling.innerText]));
                    setCardapioItem(newCardapio)
                    console.log("add")
                    fundo = true

              }
              
        })

    }


    useEffect(() => {
        const categoriasUnicas = Array.from(
            new Set(dataCardapio.map((item) => item.categoria))
            
        );
        setCategorias(categoriasUnicas);
        console.log(cardapioItem)
        
    }, [dataCardapio, cardapioItem]);


   const hendleInputs = () => {
   
        return  categorias.map((categoria, key) => (
            
            <div className={styles.div} key={key}>
                <h3>{categoria}</h3>

                {dataCardapio
                    .filter((item) => item.categoria === categoria)
                    .map((item, index) => (
                        <div key={index}>
                            <span className={styles.select}
                                onClick={(item) => hendleCardapio(item)}
                            >
                            </span>
                            <label htmlFor={item.produto}>{item.produto}</label>
                        </div>
                    ))
                }
                
            </div>
            
        ))
       
   }

   const teste = (res) => {


           
   }

   
    return (
        <section className={styles.container_cardapio}>

            <div className={styles.left_box}>

                <div className={styles.area_box_header}>

                    <h2>Cardápio</h2>
                    <p>
                        Monte sua Marmitex selecionando as Opções a baixo
                    </p>

                </div>

                <div className={styles.area_box}>
                    {hendleInputs()}
                </div>

            </div>

            <div className={styles.rigth_box}>
                <div className={styles.area_marmitex}>
                    <img src={Marmita} alt="" />
                    <img className={styles.baiao_img} src={baiaoArroz} alt="" />
                </div>
            </div>

        </section>
    )
}