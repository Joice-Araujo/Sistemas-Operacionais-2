import React from "react";
import { IReserva } from "../Interfaces/Reserva";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";



const CardSala: React.FC<IReserva> = (props: IReserva) => {

    //const formattedDataUso = props.dataUso instanceof Date ? props.dataUso.toLocaleDateString() : 'Data inválida';
    const formattedDataUso = new Date(props.dataUso).toLocaleDateString();

    const deleteReserva = async () => {
        console.log('ID da reserva:', props.id);
        try {
            await fetch(`http://localhost:3000/salas/${props.id}`, {
                method: 'DELETE'
            });
            alert("Reserva excluída com sucesso!");
            window.location.reload();
        } catch (error) {
            console.error("Erro ao excluir a reserva:", error);
        }
    };
return(
 

    <div className="bg-violet-300 flex flex-col w-52 p-5 justify-center items-center rounded-lg space-y-1 ml-2 ">
        <div>
        <div className=""> {props.url && <img src={props.url} alt="Imagem da reserva" style={{ objectFit: 'cover', width: '100%', height: '150px'}} />}</div>
        </div>


        <div className="text-left ">
            <ul>
                <li> Sala: {props.nomeSala}</li>
                <li>Loal: {props.local}</li>
                <li>Data: {formattedDataUso}</li>
                <li>Início: {props.horaInicio}</li>
                <li>Término:{props.horaFinal}</li>
                <li>Responsável: {props.responsavel}</li>


            </ul>
        </div>
        <div className="flex space-x-9">
        {/* <RiDeleteBin6Line className="w-6 h-6" onClick={deleteReserva} /> */}
        {/* <FiEdit3 className="w-6 h-6" /> */}
        </div>

    </div>

)



 }

 export default CardSala;