import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

const App = () => {

    let valor_de_a = 1

    return (
        <>
            <Header/>
            <Main a={valor_de_a}>
                <h2>Hola Mundo!</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, est quibusdam? Enim dolorem similique sint iste ratione sequi qui! Non sapiente optio voluptatem vitae rem deleniti quis iste animi quae!</p>
            </Main>
            <Footer/>
        </>
    )
}

export default App