import Comp from './componentes/TitCadP';
import './CadPessoal.css';
import MulherContratando from './Img_Prof/MulherContratando.png';
import Logo from './Img_Prof/Logo.png';
import Form from './componentes/InputCadP';
import Header from "./componentes/HeaderCadP";
function App() {
  return (
     
    <div className="App">
      <div className="App-header">
        <Header/>
        <img className="Voe" src={Logo} alt= "logo do voe"></img>
      </div>
      <Comp/>
      <img className="MulherContratando" src= {MulherContratando} alt= "mulher contratando"></img>
      <Form/>     
    </div>
    
   
    
  );
}

export default App;