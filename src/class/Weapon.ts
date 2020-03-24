export default class Weapon {
    private _dammageMin: number;
    private _dammageMax: number;
    private _critical: number;

    constructor (){
        this._dammageMin = Math.floor(Math.random() * 10) + 1;
        this._dammageMax = Math.floor(Math.random() * 10) + 11;
        this._critical = Math.floor(Math.random() * 20) + 1;
    }

    public get dammageMin(): number {
        return this._dammageMin;
    }

    public get dammageMax(): number {
        return this._dammageMax;
    }

    public get critical(): number {
        return this._critical;
    }

    public set dammageMin(dammageMin: number) {
        this._dammageMin = dammageMin;
    }

    public set dammageMax(dammageMax: number) {
        this._dammageMax = dammageMax;
    }

    public set critical(critical: number) {
        this._critical = critical;
    }

}