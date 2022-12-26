import { Component, OnInit } from '@angular/core';
import { GameofthronesService } from '../services/gameofthrones.service';

@Component({
  selector: 'app-gameofthrones',
  templateUrl: './gameofthrones.component.html',
  styleUrls: ['./gameofthrones.component.css']
})
export class GameofthronesComponent implements OnInit{

  character:any;

  constructor(private chara: GameofthronesService){}

  ngOnInit(): void {
    this.getGotChar();
  }

  getGotChar(){
    this.chara.getCharacters().subscribe(resp =>{
      this.character = resp;
      
    })
  }

}
