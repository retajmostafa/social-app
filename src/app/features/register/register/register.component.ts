import { AuthService } from './../../../core/services/auth.service';
import { Component, inject } from '@angular/core';
import{AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {



 constructor(private _AuthService:AuthService , private _Router:Router){}
    resMassage:string  ='';

registerForm:FormGroup = new FormGroup({
name: new FormControl(null, [
Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[A-Z][a-z]{2,}(?:\s[A-Z][a-z]{2,}){0,3}$/)]),
         username: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(/^[a-z0-9_]{3,15}$/),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required, Validators.pattern(/^(?:male|female)$/)]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/),
      ]),
      rePassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/),
      ]),
}
,{validators:this.confirmpassword})

confirmpassword(g:AbstractControl){
//  return g.get('password')?.value === g.get('rePassword')?.value?null : {missmatch:'true'};د

const password = g.get('password')?.value;
const rePassword = g.get('rePassword')?.value;
if(password !==rePassword){

g.get('rePassword')?.setErrors({mismatch:'true'});
return {mismatch:true};
}else{
return null
}
 }

onSubmit() {



  console.log('Submit clicked!');
  console.log(this.registerForm.value);
  console.log(this.registerForm.errors);
  console.log(this.registerForm.valid);




  if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    return;
  }

  console.log(this.registerForm.value);
  console.log(this.registerForm.errors);

  if (this.registerForm.valid) {
const formData = {
  ...this.registerForm.value,
  username: this.registerForm.value.username ?? ''
};
   this._AuthService.SignUp(formData).subscribe({
      next: (res) => {
        if (res.success) {
          setTimeout(() => {
            this._Router.navigate(['/login']);
          }, 1000);
        }
      },

      error: (err) => {
        console.log(err);
        this.resMassage = err.error.message;
      }
    });
  }
    console.log('byeee')
  }
}
