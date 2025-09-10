import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { AuthService } from '../../services/auth-service';


@Component({
  selector: 'app-logged-layout',
  imports: [  RouterLink,  ],
  templateUrl: './logged-layout.html',
  styleUrl: './logged-layout.scss'
})
export class LoggedLayout {

  authService = inject(AuthService) 
}
