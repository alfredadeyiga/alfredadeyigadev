import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: false,
  templateUrl: './heading.html',
  styleUrl: './heading.css',
})
export class Heading {
  @Input() body: string = '';
}
