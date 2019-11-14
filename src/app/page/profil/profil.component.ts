import {Component, Input, OnInit, Output} from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { User } from '../../class/user';
import { BasicFormComponent } from '../../component/basic-form/basic-form.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  private user: User;
  @Input() showModal = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
  }

  receiveNewUser($event) {
    this.user = $event;
  }
}
