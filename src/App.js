import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

const App = () => {

    const persona = {
        nombre: "Juan",
        edad: "30"
    }

    const nombre = "Horacio"

    return (
        <>
            <Header nombre={nombre}/>
            {/* <Main nombre={nombre}/> */}
            {/* <Main nombre="Horacio" edad={32} /> */}
            {/* <Main persona={persona}/> */}
            <Main nombre={["uno","dos","tres"]} />

            <Footer/>
        </>
    )
}

export default App