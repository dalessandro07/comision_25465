import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Contador from './Contador';

const ItemDetail = ({ item }) => {
    const [seleccionado, setSeleccionado] = useState(false);

    const onAdd = (cantidadSeleccionada) => {
        console.log('Añadir al carrito', cantidadSeleccionada);
        setSeleccionado(cantidadSeleccionada);
    };

    //useNavegate()

    return (
        <article className="itemDetail">
            <img src={item.image} alt="" />
            <div className="titulos">
                <h3>{item.title}</h3>
                <p className="precio">${item.price}</p>
                <div className="rates">
                    <Rate
                        onChange={(val) => {
                            console.log(val);
                        }}
                        allowHalf
                        count={5}
                        value={item.rating?.rate}
                    />
                    <span>Rates : {item.rating?.count}</span>
                </div>
                <p className="descripcion">{item.description}</p>
                <Contador stock={5} initial={1} onAdd={onAdd} />
                <Link to="/carrito">carrito</Link>
            </div>
        </article>
    );
};

export default ItemDetail;
