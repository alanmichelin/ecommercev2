import { Data } from './fetchData';
import {Tabs, Tab, AppBar} from '@material-ui/core'
import { useState } from 'react';
import ListaItems from './ListaItems';
import Item from './Item';
import Grid from '@material-ui/core/Grid';

const Categorias = () =>{
    console.log(Data())
    const [tablaIndex, setTablaIndex] =useState(0)
    const [items, setItems] = useState([])
    const totalCategorias = Data("Categorias")
    const getCategoriaId = Data("Comercio").idCategoria
    const categoriasAMostrar = []
    //crea un nuevo array con todas las categorias a mostrar
    for (const property in totalCategorias) {
      for(var i =0; i<getCategoriaId.length;i++){
        if(totalCategorias[property].idCategoria===getCategoriaId[i] ){
          categoriasAMostrar.push(totalCategorias[property])
        }
      }
    }
    //cambia el index de la tab actual x lo tanto actualiza el contenido
    const cambiarTab = (e,value) =>{
        setTablaIndex(value)

    }

    return (
      <Grid container>
            <AppBar position='static'>
                <Tabs value={tablaIndex} onChange={cambiarTab} indicatorColor="primary"
    variant="scrollable"
    scrollButtons="auto"
>                   
                  <Grid item xs={4} lg={12} >
                    {categoriasAMostrar.map((e,index)=>
                    <Tab label = {e.nombreCat} id={e.idCategoria} key={e.nombreCat} onClick={()=>setItems(ListaItems(e.idCategoria))}/>)
                    }
                    </Grid>
                </Tabs>
            </AppBar>
            

            {items !==[] ? items.map(e=>
                <Item data={e}/>) :<div/> }

                </Grid>
                
        
        


    )
    

           
    
}
export default Categorias
