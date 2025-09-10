import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Spinner } from '../../component/spinner/spinner';
import { UsersService } from '../../services/user-service';

@Component({
  selector: 'app-register',
  imports: [RouterModule, FormsModule, Spinner],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss'
})
export class RegisterPage {
errorRegister=false;
usersService = inject(UsersService);
isLoading = false;
router = inject(Router)
   
  async register(form:any) {
    console.log(form.value);
    this.errorRegister = false; //Elimino el mensaje de error
    //Hago validacion extra sobre el formulario
    if(!form.value.email || 
      !form.value.password || 
      !form.value.password2 || 
      !form.value.password !== form.value.password2){
      this.errorRegister = true;
      return
    }
    this.isLoading = true;
    const res = await this.usersService.register(form.value);
    if(res.ok){
      this.router.navigate(["/login"])
  }
    this.isLoading = false; 
    this.errorRegister = true;
  }
}
