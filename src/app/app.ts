import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'portfolio';

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');

    if (!theme) {
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      document.body.classList.add('light');
    }
  }
}
