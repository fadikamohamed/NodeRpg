import Character from './Character';

export default class Good extends Character {

    private _role: string;

    constructor (name: string, role: string) {
        super(name);
        this._role = role;
    }

    public get role(): string {
        return this._role;
    }

    public set role(role: string){
        this._role = role;
    }
}