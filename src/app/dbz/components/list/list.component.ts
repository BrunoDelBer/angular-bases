import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
public onDeleteId:EventEmitter<string> = new EventEmitter();

  @Input()
public characterList:Character[] = [
    {
      name:'Trunks',
      power:10
  }
]



onDeleteCharacter(index:number):void{
  //TODO: Emitir el ID del personaje
  if(!this.characterList[index].id) return

  const id:string = this.characterList[index].id
  this.onDeleteId.emit(id)
  console.log(id)
}

}
