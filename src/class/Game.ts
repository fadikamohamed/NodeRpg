import Good from './Good';
import { Observable } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

export default class Game {

    private rl: any;
    private goods: string[];
    private bads: string[];

    constructor() {
        this.goods = [];
        this.bads = [];
        let readline = require('readline');
        //let good = new Good()
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    newCharacters = async () => {
        let character = new Promise(async (resolve) => {
            await this.rl.question('Tapez le nom du personnage: ',
                async (answer: string) => {
                    this.goods.push(answer);
                    this.rl.setPrompt('Voulez vous créer un autre personnage ? (O)ui/(N)on \n')
                    this.rl.prompt();
                    await this.rl.on('line', async (answer: string) => {
                        if (answer == 'O' || 'o') {
                            await this.rl.question('Tapez le nom du personnage: ',
                                async (answer: string) => {
                                    this.goods.push(answer);
                                });
                        } else if (answer == 'N' || 'n') {
                            this.rl.close();
                        } else {
                            this.rl.setPrompt('Voulez vous créer un autre personnage ? (O)ui/(N)on \n');
                            this.rl.prompt();
                            await this.rl.on('line', async (answer: string) => {
                                if (answer == 'O' || 'o') {
                                    await this.rl.question('Tapez le nom du personnage: ',
                                        async (answer: string) => {
                                            this.goods.push(answer);
                                        });
                                } else if (answer == 'N' || 'n') {
                                    this.rl.close();
                                } else {
                                    this.rl.setPrompt('Voulez vous créer un autre personnage ? (O)ui/(N)on \n');
                                    this.rl.prompt();
                                }
                            })
                        }
                    })
                    resolve();
                });
            this.rl.close();
        });
    }

    newGame = async () => {
        await this.start();
    }


    start = async () => {
        await this.rl.question('Voulez vous jouer ? (O)ui/(N)on \n',
            async (answer: string) => {
                if (answer == 'O' || 'o') {
                    this.newCharacters();
                } else if (answer == 'N' || 'n') {
                    this.rl.close();
                } else {
                    this.rl.setPrompt('Voulez vous jouer ? (O)ui/(N)on \n');
                    this.rl.prompt();
                    await this.rl.on('line', async (answer: string) => {
                        if (answer == 'O' || 'o') {
                            this.newCharacters();
                        } else if (answer == 'N' || 'n') {
                            this.rl.close();
                        } else {
                            this.rl.setPrompt('Voulez vous jouer ? (O)ui/(N)on \n');
                            this.rl.prompt();
                            await this.rl.on('line', async (answer: string) => {
                                if (answer == 'O' || 'o') {
                                    this.newCharacters();
                                } else if (answer == 'N' || 'n') {
                                    this.rl.close();
                                } else {
                                    this.rl.setPrompt('Voulez vous jouer ? (O)ui/(N)on \n');
                                    this.rl.prompt();
                                }
                            })
                        }
                    })
                }
            });
    }
}