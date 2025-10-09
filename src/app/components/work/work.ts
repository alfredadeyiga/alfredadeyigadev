import { Component, OnInit } from '@angular/core';
import { projects } from '../../shared/data/data';

@Component({
  selector: 'app-work',
  standalone: false,
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work implements OnInit {
  projects!: any[];

  ngOnInit(): void {
    this.projects = projects;
  }
}
