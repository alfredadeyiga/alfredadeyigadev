import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: false,
  templateUrl: './tag.html',
  styleUrl: './tag.css',
})
export class Tag {
  @Input() title: string = '';
}
