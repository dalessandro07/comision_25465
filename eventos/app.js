const btn_1 = document.querySelector('#btn_1');
const input = document.querySelector('input');
const link = document.querySelector('a');

const hacerClick = (e) => {
    e.preventDefault()
    //e.stopPropagation()
    //console.dir(e.target)
    console.log("Click en boton")
    //console.dir(btn_1)
    //console.log("Click")
    //return undefined
    //return ()=>{}
}

//hacerClick()

btn_1.addEventListener("click",hacerClick/* ,true */)


document.body.addEventListener("click",(e)=>{
    //console.log(e.target)
    //e.stopPropagation()
    console.log("Click en el body")
}/* ,true */)

document.addEventListener("click",()=>{
    console.log("Click en el documento")
}/* ,true */)



/* btn_1.addEventListener("click",()=>{
    console.log("Otro gato!")
}) */
//btn_1.onclick = hacerClick

/* link.addEventListener("click",(e)=>{
    console.log(e)
    e.preventDefault()
}) */

/* input.addEventListener("keydown",(e)=>{
    
    if(e.key == "f"){
        e.preventDefault()
    }
}) */

/* document.addEventListener("mouseover",(e)=>{
    //console.log({X : e.clientX , Y : e.clientY})
}) */

//btn_1.addEventListener("click",hacerClick())
//btn_1.addEventListener("click",1+1)
//btn_1.addEventListener("click",2)
//btn_1.addEventListener("click",()=>{})
//btn_1.addEventListener(a,b)
//Funcion.bind(null,a,b) / Funcion.call(null,a,b) / Funcion.apply(null,a,b)