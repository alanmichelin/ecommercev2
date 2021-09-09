import { Data } from "./fetchData"


const ListaItems = (props) =>{
    // busca los items por categoria
    const productos = Data("Productos")
    const productosAmostrar = []
    
    for(const data in productos){
        if(productos[data].idCategoria === props){
            productosAmostrar.push(productos[data])
        }
    }

    return productosAmostrar
}


export default ListaItems