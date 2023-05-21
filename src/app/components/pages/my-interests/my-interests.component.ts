import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.scss']
})
export class MyInterestsComponent implements OnInit {
  
  team? : {rank:number,lose:number,win:number,play:number,point:number,team:string}

  constructor(private futbolService:FootballService){}
  ngOnInit(): void {
    this.futbolService.get().subscribe(data=>{
      this.team = data.result.find((x:any)=>x.team == 'Fenerbahçe')
    })
  }
}
