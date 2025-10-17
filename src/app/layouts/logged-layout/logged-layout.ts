import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logged-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './logged-layout.html',
  styleUrl: './logged-layout.scss'
})
export class LoggedLayout {

  authService = inject(AuthService);


  openLogoutModal(){
    {
      this.menuOpen = false;
    // tu lógica de logout o modal
    }
    Swal.fire({
      title: "¿Desea cerrar sesión?",
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: "Cancelar",
      denyButtonText: `Cerrar sesión`
    }).then((result) => {
      if (result.isDenied) { //Reviso que haya clickeado en el botón rojo.
        this.authService.logout();
      }
    });
  }
///
menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToNewContact() {
    this.menuOpen = false;
    this.router.navigate(['/new-contact']);
  }




}