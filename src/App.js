import Header from "./general/Header";
//import ListadoClientes from "./clientes/ListadoClientes";
import ListadoAsesores from "./asesores/ListadoAsesores";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bienvenida from "./general/Bienvenida";
import ListadoClientes from "./clientes/ListadoClientes";
import FormClientes from "./clientes/FormClientes";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bienvenida/>} exact></Route>
          <Route path="/clientes" element={<ListadoClientes/>} exact></Route>
          <Route path="/clientes/form" element={<FormClientes/>} exact></Route>
          <Route path="/asesores" element={<ListadoAsesores/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
