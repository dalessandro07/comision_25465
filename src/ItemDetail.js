import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

const ItemDetail = ({item}) => {
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
        </article>
    )
}

export default ItemDetail