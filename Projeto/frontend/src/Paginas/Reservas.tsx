import { useState } from "react";
import Img from "../Componentes/Img";
import SideBar from "../Componentes/SideBar";


export const Reservas = () => {
    const [nomeSala, setNomeSala] = useState<string>("");
    const [local, setLocal] = useState<string>("");
    const [dataUso, setDataUso] = useState<string>("");
    const [horaInicio, setHoraInicio] = useState<string>("");
    const [horaFinal, setHoraFinal] = useState<string>("");
    const [responsavel, setResponsavel] = useState<string>("");
    const [motivo, setMotivo] = useState<string>("");
    const [convidados, setConvidados] = useState<string>("");
    const [files, setFiles] = useState<File[]>([])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const fileSelected: File[] = Array.from(event.target.files)
            const filteredFiles: File[] = []

            fileSelected.forEach(f => {
                const typeFile = f.type.split("/")[1]
                if (typeFile == "jpeg" || typeFile == "png" || typeFile == "svg") {
                    filteredFiles.push(f)
                }
                else {
                    alert(`${f.name} não é uma imagem`)
                }
            })
            setFiles(filteredFiles)
        }
    };

    const salvarImagens = async (id: number) => {
        try {
            for (const file of files) {
                const form = new FormData();
                form.append("file", file);

                const response = await fetch(`http://localhost:3000/imagem/upload/${id}`, {
                    method: 'POST',
                    body: form,
                });

                if (response.ok) {
                    console.log('Imagem enviada com sucesso');
                } else {
                    console.error('Erro ao enviar a imagem:', response.statusText);
                }
            }
        } catch (error) {
            console.error('Erro ao enviar as imagens:', error);
        }
    };


    interface ReservaCriada {
        id: number;
        // outras propriedades da reserva, se houver
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const reserva = {
            nomeSala,
            local,
            dataUso: new Date(dataUso),
            horaInicio: `${horaInicio}:00`,
            horaFinal: `${horaFinal}:00`,
            responsavel,
            motivo,
            convidados,
        };

        try {
            const response = await fetch('http://localhost:3000/salas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reserva),
            });

            if (response.ok) {
                const reservaCriada: ReservaCriada = await response.json();
                console.log(reserva);
                alert("Reserva criada com sucesso!");
                await salvarImagens(reservaCriada.id);


                // Limpa os campos depois de criar a reserva
                setNomeSala("");
                setLocal("");
                setDataUso("");
                setHoraInicio("");
                setHoraFinal("");
                setResponsavel("");
                setMotivo("");
                setConvidados("");

            } else {
                alert("Erro ao criar a reserva.");
            }
        } catch (error) {
            console.error('Erro:', error);
            alert("Erro ao criar a reserva.");
        }
    };

    // const handleSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();

    //     const reserva = {
    //         nomeSala,
    //         local,
    //         dataUso: new Date(dataUso),
    //         horaInicio: `${horaInicio}:00`,
    //         horaFinal: `${horaFinal}:00`,
    //         responsavel,
    //         motivo,
    //         convidados,
    //     };

    //     try {
    //         const response = await fetch('http://localhost:3000/salas', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(reserva),
    //         });

    //         if (response.ok) {
    //             console.log(reserva)
    //             alert("Reserva criada com sucesso!");
    //             await salvarImagens(reserva.id)
    //             // Resetar os campos após o envio
    //             setNomeSala("");
    //             setLocal("");
    //             setDataUso("");
    //             setHoraInicio("");
    //             setHoraFinal("");
    //             setResponsavel("");
    //             setMotivo("");
    //             setConvidados("");
    //         } else {
    //             alert("Erro ao criar a reserva.");
    //         }
    //     } catch (error) {
    //         console.error('Erro:', error);
    //         alert("Erro ao criar a reserva.");
    //     }
    // };








    return (

        <>
            <SideBar />
            <div className="text-black ml-44 space-y-6 ">
                <h1 className="text-center text-xl text-bold">Reserva de sala</h1>
                <form action="" className=" flex flex-row ml-14 text-left space-y-6 space-x-20">
                    <div className="  space-y-4 mt-6">
                        <div className="space-x-2">
                            <label htmlFor="">Nome da Sala:</label>
                            <input type="text" className="w-80" value={nomeSala} onChange={(e) => setNomeSala(e.target.value)} />
                        </div>

                        <div className="space-x-2">
                            <label htmlFor="">Local:</label>
                            <input type="text" className="w-96" value={local} onChange={(e) => setLocal(e.target.value)} />
                        </div>

                        <div className="space-x-2">
                            <label htmlFor="">Data</label>
                            <input type="Date" value={dataUso} onChange={(e) => setDataUso(e.target.value)} />
                        </div>

                        <div className="space-x-2">
                            <label htmlFor="">Início do uso:</label>
                            <input type="time" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} />
                        </div>

                        <div className="space-x-2">
                            <label htmlFor="">Término do uso:</label>
                            <input type="time" value={horaFinal} onChange={(e) => setHoraFinal(e.target.value)} />
                        </div>

                        <div className="space-x-2">
                            <label htmlFor="">Responsável pelo uso:</label>
                            <input type="text" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} />
                        </div>

                        <div className="space-x-2  flex flex-col">
                            <label htmlFor="">Motivo do uso:</label>
                            <textarea name="" id="" className="w-96" value={motivo} onChange={(e) => setMotivo(e.target.value)} />
                        </div>


                        <div className="space-x-2">
                            <label htmlFor="">Convidados:</label>
                            <input type="text" className="w-80" value={convidados} onChange={(e) => setConvidados(e.target.value)} />
                        </div>

                    </div>

                    <div className="-mt-7">
                        <Img files={files} setFiles={handleFileChange} label="Apenas png, jpg e svg" />
                    </div>



                </form>

                <button className="btnReserva" onClick={handleSubmit}>Reservar</button>


            </div>
        </>

    )

}

export default Reservas;