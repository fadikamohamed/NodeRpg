import  Weapon  from './Weapon'

export default class Character {
    private _name: string;
    private _pv: number;
    private _pvMax: number;
    private _defense: number;
    private _weapon: Weapon;

    constructor (name: string, pv: number = 100, pvMax = 100, defense = 50, weapon = new Weapon()) {
        this._name = name;
        this._pv = pv;
        this._pvMax = pvMax;
        this._defense = defense;
        this._weapon = weapon;
    }

    public get name(): string{
        return this._name;
    }
    public get pv(): number{
        return this._pv;
    }
    public get pvMax(): number{
        return this._pvMax;
    }
    public get defense(): number{
        return this._defense;
    }
    public get weapon(): Weapon{
        return this._weapon;
    }
    public set name(name: string){
        this._name = name;
    }
    public set pv(pv: number){
        this._pv = pv;
    }
    public set pvMax(pvMax: number){
        this._pvMax = pvMax;
    }
    public set defense(defense: number){
        this._defense = defense;
    }
    public set weapon(weapon: Weapon){
        this._weapon = weapon;
    }
}