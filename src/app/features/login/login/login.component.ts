import { Component } from '@angular/core';
import{AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {


  
 constructor(private _AuthService:AuthService , private _Router:Router){}
    resMassage:string  ='';


  loginForm:FormGroup = new FormGroup({
 email: new FormControl(null, [Validators.required, Validators.email]),
 password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/),
      ]),
  }
  )


 login() {

  alert('LOGIN FUNCTION CALLED!');

   console.log('LOGIN FUNCTION CALLED!');
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  this._AuthService.SignIn(this.loginForm.value).subscribe({
    next: (res) => {
      console.log(res);

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userInfo', JSON.stringify(res.data.user));

      this._Router.navigate(['/feed']);
    },
    error: (err) => {
      console.log(err);
      this.resMassage = err.error.message;
    },
  });
} }
