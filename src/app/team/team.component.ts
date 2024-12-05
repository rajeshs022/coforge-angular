
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  users: any;
  msg: string = '';

  constructor(private myteamservice: TeamService) {
    //alert ("constructor");
  }
  ngOnInit() {
    this.msg = this.myteamservice.helloService();
    this.myteamservice.getUsers().subscribe(response => {
      this.users = response;
    });
  }
}