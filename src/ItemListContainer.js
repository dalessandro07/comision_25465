import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"

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

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()
    
    //console.log(idCategoria)

    useEffect(() => {
        
        toast.info("🦄 Trayendo productos...")
        
        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                console.log(idCategoria)
                res(productosIniciales)
                //rej(productosIniciales)
            },2000)
        })
        
        pedido
        .then((resultado)=>{
            toast.dismiss()
            setProductos(resultado)
        })
        .catch((error)=>{
            toast.error("Error al traer los productos")
        })
        .finally(()=>{
            setLoading(false)
        })
        

    },[idCategoria])

    if(loading){
        return <h1>Cargando...</h1>
    }else{
        return <ItemList productos={productos}/>
    }
}

export default ItemListContainer