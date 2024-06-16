import { Route, Routes } from "react-router-dom";
import Home from "../Paginas/Home";
import Reservas from "../Paginas/Reservas";
import Login from "../Paginas/Login";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/Home" element={ <Home />}/>
      <Route path="/Home/Reserva" element={ <Reservas />} />
      <Route path="/Login" element={<Login />}/> 

    </Routes>
  );
};

export default Rotas;
