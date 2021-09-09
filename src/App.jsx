import './App.css';
import { Data } from './components/fetchData';
import Categorias from './components/categorias';
import Grid from '@material-ui/core/Grid';
import Banner from './components/banner'
function App() {

  console.log(Data())
  return (
    <div className="App">
      <Grid container>
        <Grid item lg={12}>
      <Banner/>
      </Grid>
      <Categorias/>
      </Grid>

    </div>
  );
}

export default App;
