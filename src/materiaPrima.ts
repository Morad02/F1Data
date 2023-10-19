
export class materiaPrima{
    private _nombre: string;
    private _peso: number;
    private _volume: number;

    constructor(nombre: string, peso: number, volume: number){
        this._nombre = nombre;
        this._peso = peso;
        this._volume = volume;
    }

    getNombre(): string{
        return this._nombre;
    }

    getPeso(): number{
        return this._peso;
    }

    getVolumen(): number{
        return this._volume;
    }
}