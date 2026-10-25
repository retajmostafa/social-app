import { Component, inject, input, InputSignal, OnInit, signal, WritableSignal } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit{
  private _AuthService = inject(AuthService)

  flag:InputSignal<boolean> = input.required()

  ngOnInit(): void {
    initFlowbite();
  }



  logOut(){
    this._AuthService.SignOut()
  }


}