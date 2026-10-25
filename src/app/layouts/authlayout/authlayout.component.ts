import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from "@angular/router";
import { NavbarComponent } from '../../features/navbar/navbar/navbar.component';

@Component({
  selector: 'app-authlayout',
  imports: [RouterOutlet, NavbarComponent, RouterLink],
  templateUrl: './authlayout.component.html',
  styleUrl: './authlayout.component.css',
})
export class AuthlayoutComponent {

}
