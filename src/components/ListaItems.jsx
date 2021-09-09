import { Data } from "./fetchData"


const ListaItems = (props,callback) =>{
    const productos = Data("Productos")
    const productosAmostrar = []
    
    for(const data in productos){
        if(productos[data].idCategoria === props){
            productosAmostrar.push(productos[data])
        }
    }
    // console.log(productosAmostrar)
    callback = productosAmostrar
    return callback
}


export default ListaItems