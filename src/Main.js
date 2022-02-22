const Main = ({ nombre : [uno]/* , edad  */}) => {

    //console.log(props)
    //console.log(test.nombre)
    //console.log(props.nombre)
    //console.log(props.edad)
    //const { nombre: name, edad: edad } = props
    //const { nombre, edad } = props
    //const [uno,dos,tres] = nombre

    return (
        <main>
            <h2>Bienvenido {uno}!</h2>
            {/* <p>Tu edad es {edad}</p> */}
        </main>
    );
}

export default Main;