import { Component, OnInit } from '@angular/core';
import { skills } from '../../shared/data/data';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements OnInit{
  skills!: any[]

  ngOnInit(): void {
    this.skills = skills
  }
}
