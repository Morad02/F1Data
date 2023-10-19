import { materiaPrima } from "./materiaPrima";

export class pedido{
    private _id: string;
    private _materiasPrima: materiaPrima[];

    constructor(id: string, materiasPrima: materiaPrima[]){
        this._id = id;
        this._materiasPrima = materiasPrima;
    }

    getId(): string{
        return this._id;
    }

    getMateriasPrima(): materiaPrima[]{
        return this._materiasPrima;
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