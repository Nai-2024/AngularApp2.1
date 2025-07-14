import { Component } from '@angular/core';
import { HamburgerIconComponent } from '../hamburger-icon/hamburger-icon.component';

@Component({
  selector: 'app-header',
  standalone: true, 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [HamburgerIconComponent]
})
export class HeaderComponent {

}
