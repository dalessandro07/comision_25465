import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <article>
            <h2>{producto.nombre}</h2>
            <img src="https://picsum.photos/200/150"/>
            <p>Precio : ${producto.precio}</p>
            <Link to={`/producto/${producto.id}`}>ver detalle</Link>
        </article>
    )
}

export default Item