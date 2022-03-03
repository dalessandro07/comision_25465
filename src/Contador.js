import { useState } from "react"

const Contador = ({initial, stock}) => {

    let [estado, setEstado] = useState(initial)

    const handleSumar = () => {
        if(estado < stock){
            setEstado(estado + 1)
        }
    }

    const handleRestar = () => {
        setEstado(estado - 1)
    }


    const handleResetear = () => {
        setEstado(0)
    }

    return (
        <div>
            <p>Mi Contador va : {estado}</p>
            <button onClick={handleSumar}>sumar</button>
            <button onClick={handleResetear}>resetear</button>
            <button onClick={handleRestar}>restar</button>
        </div>
    )
}

export default Contador