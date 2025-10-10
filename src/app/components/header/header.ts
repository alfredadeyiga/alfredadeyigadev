import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen: boolean = false;

  @ViewChild('dropdownRef') dropdownRef!: ElementRef;

  scrollTop() {
    this.isMenuOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isMenuOpen) {
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
