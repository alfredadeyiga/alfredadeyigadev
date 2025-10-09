import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  copiedField!: string

  copyToClipboard(text: string, field: string) {
    const cleanText = text.replace(/\s+/g, '');
    navigator.clipboard.writeText(cleanText).then(() => {
      this.copiedField = field;

      setTimeout(() => {
        this.copiedField = "";
      }, 2000);
    });
  }
}
