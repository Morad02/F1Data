
export class Lote{
    private _peso: number;
    private _volume: number;

    constructor(peso: number, volume: number){
        this._peso = peso;
        this._volume = volume;
    }

    get peso():number
    {
        return this._peso
    }

    get volume():number
    {
        return this._volume
    }

    toString():string
    {
        return `Peso: ${this._peso} Volumen: ${this._volume}`
    }
}