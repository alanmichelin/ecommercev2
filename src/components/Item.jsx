import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Button } from '@material-ui/core';
const Item = ({data}) =>{
    console.log(data)
    var nombre = data.nombreProducto
    var imagen = data.imagenProducto
    var descripcion = data.descriProducto
    var precio = data.precioProducto

    const [like,setLike] = useState(false)
    const [cant,setCant] = useState(0)
    const classes = useStyles();

    const changeLike = () =>{
        setLike(!like)
    }

    return(
        <Grid item xs={12} lg={2} >
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
      
        
          
            <Grid item xs={4} lg={12} >
                <img src={imagen} alt={nombre} className={classes.img} />
            </Grid>
            <Grid item xs={5} lg={12} >
                <p className={classes.title}>{nombre}</p>
 
                <p className={classes.descripcion}>{descripcion}</p>
            </Grid>
            <Grid item xs={3} lg={12} >
                <p className={classes.precio}>${precio}</p>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                <Button variant="outlined" style={{minWidth: '5px', width:'25px', maxHeight: '25px', padding:'5px'}} color="primary" className={classes.cantidad} onClick={()=>setCant(cant-1)}>
                 -
                </Button>
                <p style={{margin:'3px'}}>{cant}</p>
                <Button variant="outlined" style={{minWidth: '5px', width:'25px',maxHeight: '25px', padding:'5px'}} color="primary" className={classes.cantidad} onClick={()=>setCant(cant+1)}>
                 +
                </Button>
                </Grid>


                


                
                
    
                
                {/* <Button variant="outlined" color="primary">0</Button>
                <Button variant="outlined" color="primary">-</Button> */}
                {like ? <FavoriteIcon className={[classes.Icon, classes.like ]} onClick={changeLike}/>: <FavoriteBorderIcon className={[classes.Icon, classes.like ] } onClick={changeLike} />   }
                <ShareIcon className={classes.Icon}/>
            </Grid>
        
        </Grid>
        </Paper>
        </div>
        </Grid>
    )
}
export default Item