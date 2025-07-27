import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './Pages/home/home';
import { Navbar } from './Layout/navbar/navbar';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly id = inject(PLATFORM_ID);

  protected title = 'ECommerce';

  ngOnInit(): void {
    if (isPlatformBrowser(this.id)) {
      document.documentElement.classList.toggle(
        'dark',
        localStorage.getItem('theme') === 'dark' ||
          (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
  }
}
