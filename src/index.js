//1) Necesitamos la variable React en scope
//ES6 Module : import React from "react"
//CommonJS : const React = require("react") 
import React from 'react'

//2) Necesitamos la variable ReactDOM en scope
import ReactDOM from 'react-dom'

//3) Necesitamos un componente en scope
/* 
function App () {
    return "Hola Mundo"
}
*/
import App from './App'
import "./estilos.css"

//const App = () => "Hola Mundo Flecha sin retorno y sin import de react"

//4) Necesitamos poner el componente en el DOM
//ReactDOM.render(<App></App>,document.getElementById("root"))
ReactDOM.render(<App/>,document.getElementById("root"))