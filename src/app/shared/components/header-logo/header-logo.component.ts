import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.scss']
})
export class HeaderLogoComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout()
    .then(() => {
      this.router.navigate(['./'])
    })
  }

}
