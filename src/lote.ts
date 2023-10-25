
export class Lote{
    private _peso: number;
    private _volume: number;

    constructor(peso: number, volume: number){
        this._peso = peso;
        this._volume = volume;
    }

    get peso(){
        return this._peso;
    }

    get volumen(){
        return this._volume;
    }
}