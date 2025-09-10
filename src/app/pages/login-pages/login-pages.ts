import { Component, inject } from '@angular/core';
import { FormsModule, Form } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { Spinner } from '../../component/spinner/spinner';

@Component({
  selector: 'app-login-pages',
  imports: [RouterModule, FormsModule, Spinner],
  templateUrl: './login-pages.html',
  styleUrl: './login-pages.scss'
})
export class LoginPages {

  errorLogin = false;
  authService = inject(AuthService);
  isLoading = false;

 async login(form:any){
  console.log(form.value)
  this.errorLogin = false;
  if(!form.value.email || !form.valuepassword) {
    this.errorLogin = true;
    return
  }
  this.isLoading = true;
  await this.authService.login(form.value);
  this.isLoading = false;
  this.errorLogin = true;

 }
}
