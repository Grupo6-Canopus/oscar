import Header from "./componentes/general/Header";
import ListadoAsesores from "./componentes/asesores/ListadoAsesores";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bienvenida from "./componentes/general/Bienvenida";
import ListadoClientes from "./componentes/clientes/ListadoClientes";
import FormClientes from "./componentes/clientes/FormClientes";

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
