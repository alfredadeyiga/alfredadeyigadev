import { Component, OnInit } from '@angular/core';
import { experiences } from '../../shared/data/data';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements OnInit {
  experiences!: any[];
  
  ngOnInit(): void {
    this.experiences = experiences;
  }
}
