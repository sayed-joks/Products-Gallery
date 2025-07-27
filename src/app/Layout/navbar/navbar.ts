import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  id = inject(PLATFORM_ID);
  isChecked: WritableSignal<boolean> = signal(false);
  ngOnInit(): void {
    if (isPlatformBrowser(this.id)) {
      if (
        localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        this.isChecked.set(true);
      }
    }
  }
  toggle(e: any): void {
    console.log(e.target.checked);
    if (e.target.checked) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    document.documentElement.classList.toggle(
      'dark',
      localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }
}
