import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-ad-character',
  templateUrl: './ad-character.component.html',
  styleUrl: './ad-character.component.css'
})
export class AdCharacterComponent {

  @Output()

  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  public character:Character ={
    name:'',
    power:0
  }


  emitCharacter():void{
    console.log(this.character)
    if(this.character.name.length === 0) return

    this.onNewCharacter.emit(this.character)
    this.character= {name:'',power:0}
      }
  }