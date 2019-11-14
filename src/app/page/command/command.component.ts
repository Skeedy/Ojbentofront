import { Component, OnInit } from '@angular/core';
import {Command } from '../../class/command';
import { CommandService } from '../../service/command.service';
import {User} from '../../class/user';
import { AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {
  user: User|null;
  commands: any;
  userId: number;
  loading: boolean;
  constructor(private auth: AuthService, private commandServ: CommandService) { }
  id = this.getCurrentIdUser();
  ngOnInit() {
    this.getCurrentIdUser();
    this.loading = true;
    this.getCommand(this.id);
  }
  getCommand(id) {
    this.commandServ.getCommands(id).subscribe((data) => {
      this.loading = false;
      this.commands = data;
      console.log(data);
    });
  }
  getCurrentIdUser() {
    this.userId = this.auth.currentUser.id;
    return this.userId;
  }
}
