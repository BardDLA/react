import './App.css';
import Mensaje from './Mensaje.js';

const Descripcion = () => {
  return <p>Este es un curso fullstack</p>
}
const App = () => {

  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='yellow' message='en un curso'/>
      <Mensaje color='blue' message='de React'/>
      <Descripcion />
    </div>
  );
}

export default App;
