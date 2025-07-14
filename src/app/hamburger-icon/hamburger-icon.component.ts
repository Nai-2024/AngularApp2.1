import { Component } from '@angular/core';

@Component({
  selector: 'app-hamburger-icon',
  imports: [],
  templateUrl: './hamburger-icon.component.html',
  styleUrls: ['./hamburger-icon.component.css']

})
export class HamburgerIconComponent {
  isOpen = false;
  toggleMenu() {
    this.isOpen = !this.isOpen;

    const nav = document.getElementById('navbarNav');
    if(nav) {
      nav.classList.toggle('show', this.isOpen);
    }
  }
}
