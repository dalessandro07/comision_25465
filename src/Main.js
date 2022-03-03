import { Container } from 'react-bootstrap'
import Contador from './Contador';
import { useEffect, useState } from "react"

let productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300
    }
]


const Main = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    //useEffect(function [,array]) => void
    //Este efecto se va a ejecutar en el primer render y despues de cada render

    //Este efecto se va a ejecutar SOLO en el primer render y nunca mas
    useEffect(() => {
        console.log("Ejecutando useEffect")
        //Aca quiero pedir los productos

        //
        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })
        
        pedido
        .then((resultado)=>{
            console.log("Estuvo bien")
            setProductos(resultado)
        })
        .catch((error)=>{
            console.log("Estuvo mal")
        })

    },[])


    return (
        <Container as="main">
            <h2>Bienvenido!</h2>
            <button onClick={() => setLoading(!loading)}>toggle</button>
            <ul>
                {productos.map((producto)=>{
                    return <li key={producto.id}>{producto.nombre}</li>
                })}
            </ul>
            <Contador stock={5} initial={1} />
        </Container>
    );
}

export default Main;

/**
 * 
 * 1- Arranca el componete la primera vez (mount)
 * 2- Se hace el primer render
 * 3- Conseguir la info
 * 4- Vuelvo a renderizar el componente
 * 
 */