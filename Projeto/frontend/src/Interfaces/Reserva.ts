export interface IReserva{

    id?: number;
    nomeSala: string;
    nomeImagem ?: string;
    local: string;
    dataUso: Date;
    horaInicio: number;
    horaFinal: number;
    responsavel: string;
    motivo: string;
    convidados: string;
    url?: string;

}