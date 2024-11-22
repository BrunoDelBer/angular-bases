

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({
        providedIn: 'root'
    })

export class DbzService {

    
    public characters: Character[] = [
        {
            id:uuid(),
            name:'Goku',
            power:9500
        },
        {
            id:uuid(),
            name:'Krilin',
            power:1000
        },
        {
            id:uuid(),
            name:'Trunks(niño)',
            power:10
        },
        {
            id:uuid(),
            name:'Vegetta',
            power:7770
        }
    ];
    constructor() { }

    onNewCharacter(character:Character):void{
        const newCharacter: Character={ id:uuid(), ...character}

        this.characters.push(newCharacter)

    }

    // onDeleteCharacter(index:number):any{
    //     console.log()
    //     this.characters.splice(index,1)
    // }

    deleteCharacterById(index:string):any{
        console.log()
        this.characters = this.characters.filter(character => character.id !== index)
    }

    
}