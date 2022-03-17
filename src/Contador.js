import { useState } from "react"

const Contador = ({initial, stock,onAdd}) => {

    let [estado, setEstado] = useState(initial)

    const handleSumar = () => {
        if(estado < stock){
            setEstado(estado + 1)
        }
    }

    const handleRestar = () => {
        if(estado > initial){
            setEstado(estado - 1)
        }
        
    }
    
    const handleAgregar = () => {
        //setEstado(0)
        onAdd(estado)
    }

   /*  const handleKeyUp = (e) => {
        //console.log(e)
        //console.log(e.target.value)
    } */

    return (
        <div>
            <p>Mi Contador va : {estado}</p>
            {/* <input type="text" onKeyUp={handleKeyUp}/> */}
            <button onClick={handleSumar}>sumar</button>
            <button onClick={handleAgregar}>confirmar cantidad seleccionada</button>
            <button onClick={handleRestar}>restar</button>
        </div>
    )
}

export default Contador