import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import Contador from './Contador';

const ItemDetail = ({item}) => {

    const onAdd = (cantidadSeleccionada) => {
        console.log('Añadir al carrito',cantidadSeleccionada)
    }

    //useNavegate()

    return (
        <article className="itemDetail">
            <img src={item.image} alt="" />
            <div className="titulos">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <div>
                <Rate onChange={(val)=>{console.log(val)}} allowHalf count={5} value={item.rating?.rate}/>
                <span>Rates : {item.rating?.count}</span>
                </div>
            </div>
            <p className="descripcion">{item.description}</p>
            <Contador stock={5} initial={1} onAdd={onAdd}/>
            <button>terminar compra</button>
        </article>
    )
}

export default ItemDetail