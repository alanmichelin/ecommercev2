import { Data } from "./fetchData";
import useMediaQuery from '@material-ui/core/useMediaQuery'

const Banner = () =>{
 
    const datos = Data("Comercio")
    const matches = useMediaQuery('(min-width:800px)')
    const mobileStyle = {width:'100vw',heigth:'auto'}
    const desktopStyle = {backgroundColor:'black'}
    //ajusta el tamaño segun dispositivo de donde se mire
    const getStyle = () =>{
        return matches ? desktopStyle : mobileStyle        
    }

return(
    <div style={getStyle()}>
    <img src={datos.bannerComercio} alt="" style={getStyle()}  />
    </div>


)}
export default Banner