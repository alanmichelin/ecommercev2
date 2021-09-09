import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:'2vh',
      maxHeight:'45vh',

    },
    paper: {
        width:"98%",
        display:'block',
      color: theme.palette.text.secondary,
    },
    img:{
        width:'100%'
    },
    title:{
        color:'#000814',
        fontSize:'2.5vh',
        textAlign:'left',
        marginTop:'5px',
        marginBottom:'0px'

    },
    precio:{
        color:'#000814',
        fontSize:'3vh',
        margin:'5px'

    },
    descripcion:{
        fontSize:'1.8vh',
        textAlign:'left',
        marginTop:'3px'
    },
    cantidad:{
        fontSize:'10px',
        overrides: {
            MuiButton: {
                root:{
                    minWidth: '0px'
                }
            }
        }
    },
    Icon:{
        
        cursor:"pointer",
        border:'1px solid black',
        padding:'2.5px',
        borderRadius:'50%',
        marginRight:'2px',
        marginLeft:'2px',
        marginTop:'5px'
        
    },
    like:{
        color:'red',
    },

  }));