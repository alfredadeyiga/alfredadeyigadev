import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen: boolean = false;
  ignoreScroll: boolean = true;

  @ViewChild('dropdownRef') dropdownRef!: ElementRef;

  scrollTop() {
    this.isMenuOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenuOpen() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.ignoreScroll = true;
    }

    setTimeout(() => {
      this.ignoreScroll = false;
    }, 300);
  }

  closeDropdown() {
    this.isMenuOpen = false;
  }

  closeAndScrollTo(id: string) {
    this.isMenuOpen = false;

    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (
      this.isMenuOpen &&
      this.dropdownRef &&
      !this.dropdownRef.nativeElement.contains(event.target)
    ) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('document:scroll', [])
  onWindowScroll() {
    if (this.isMenuOpen && !this.ignoreScroll) {
      this.isMenuOpen = false;
    }
  }

  changeTheme() {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }

    this.isMenuOpen = false;
  }
}
