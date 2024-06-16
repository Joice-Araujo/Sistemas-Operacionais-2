import { useEffect, useState } from "react";
import CardSala from "../Componentes/CardSala";
import SideBar from "../Componentes/SideBar";
import { IoSearch } from "react-icons/io5";



export const Home = () => {
    const [reservas, setReservas] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");


    useEffect(() => {
        fetchReservas();
    }, []);

    // const fetchReservas = async () => {
    //     try {
    //         const salas = await fetch("http://localhost:3000/salas");
    //         if (salas.ok) {
    //             console.log(salas)
    //             const data = await salas.json();

    //             setReservas(data);
    //         } else {
    //             console.error("Erro ao obter as reservas:", salas.statusText);
    //         }
    //     } catch (error) {
    //         console.error("Erro ao obter as reservas:", error);
    //     }
    // };

    const fetchReservas = async () => {
        try {
            const response = await fetch("http://localhost:3000/salas");
            if (response.ok) {


                const data = await response.json();
                console.log(data);
                // const reservasComImagens = await Promise.all(
                //     data.map(async (reserva: { id: any; nomeImagem: any; }) => {
                //         console.log(reserva)
                //         // const imagemUrl = await fetchImagemUrl(reserva.id, reserva.nomeImagem).then( resp => {
                //         //     console.log(resp)
                //         // });
                //         // return { ...reserva, imagemUrl };
                //     })
                // );
                // data.sort((a, b) => new Date(a.dataUso).getTime() - new Date(b.dataUso).getTime());
                setReservas(data);
            } else {
                console.error("Erro ao obter as reservas:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao obter as reservas:", error);
        }
    };

    // const fetchImagemUrl = async (id: any, nomeImagem: any) => {
    //     try {
    //         const response = await fetch(`http://localhost:3000/imagem/${id}/${nomeImagem}`);
    //         if (response.ok) {

    //             return response
    //             const blob = await response.blob();
    //             return URL.createObjectURL(blob);
    //         } else {
    //             console.error("Erro ao obter a imagem:", response.statusText);
    //             return null;
    //         }
    //     } catch (error) {
    //         console.error("Erro ao obter a imagem:", error);
    //         return null;
    //     }
    // };

    const filteredReservas = reservas.filter(reserva =>
        reserva.nomeSala.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (

        <>
            <SideBar />
            <div className="text-black ml-44">
                <h1 className="text-xl font-bold">Salas Reservadas</h1>
                <div className="flex items-center justify-end space-x-4 mt-4">
                    
                    <input
                        type="text"
                        placeholder="Buscar pelo nome da sala..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <IoSearch className="text-gray-500" />

                </div>
                <div className="flex flex-wrap justify-start space-x-14 mt-4">
                    {searchTerm === "" ? (
                        reservas.map((reserva, index) => (
                            <div key={index} className="w-1/5 p-4">
                                <CardSala
                                    id={reserva.id}
                                    nomeSala={reserva.nomeSala}
                                    local={reserva.local}
                                    dataUso={reserva.dataUso}
                                    horaInicio={reserva.horaInicio}
                                    horaFinal={reserva.horaFinal}
                                    responsavel={reserva.responsavel}
                                    url={reserva.url}
                                    motivo={""} convidados={""}
                                />
                            </div>
                        ))
                    ) : (
                        filteredReservas.map((reserva, index) => (
                            <div key={index} className="w-1/5 p-4">
                                <CardSala
                                    id={reserva.id}
                                    nomeSala={reserva.nomeSala}
                                    local={reserva.local}
                                    dataUso={reserva.dataUso}
                                    horaInicio={reserva.horaInicio}
                                    horaFinal={reserva.horaFinal}
                                    responsavel={reserva.responsavel}
                                    url={reserva.url}
                                    motivo={""} convidados={""}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>

    )

}

export default Home;