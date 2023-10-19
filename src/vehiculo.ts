import { pedido } from "./pedido";

export class vehiculo{
    private _matricula: string;
    private _pedidos: pedido[];
    private _consumo: number;
    private _pesoMax: number;
    private _volumeMax: number;

    constructor(matricula: string, pedidos: pedido[], consumo: number, pesoMax: number, volumeMax: number){
        this._matricula = matricula;
        this._pedidos = pedidos;
        this._consumo = consumo;
        this._pesoMax = pesoMax;
        this._volumeMax = volumeMax;
    }

    getMatricula(): string{
        return this._matricula;
    }

    getPedidos(): pedido[]{
        return this._pedidos;
    }

    getConsumo(): number{
        return this._consumo;
    }

    getPesoMax(): number{
        return this._pesoMax;
    }

    getVolumeMax(): number{
        return this._volumeMax;
    }

    public calcularPesoTotal(): number{
        let pesoTotal: number = 0;
        // TO DO
        return pesoTotal;
    }

    public calcularVolumeTotal(): number{
        let volumeTotal: number = 0;
        // TO DO
        return volumeTotal;
    }

}