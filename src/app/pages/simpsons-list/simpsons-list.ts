import { Component, OnInit } from '@angular/core';
import { SimpsonsService } from '../../services/simpsons';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-simpsons-list',
  templateUrl: './simpsons-list.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SimpsonsListComponent implements OnInit {

  personajes: any[] = [];

  constructor(private api: SimpsonsService) {}

  ngOnInit() {
    this.api.getAll().subscribe(res => {
      this.personajes = res.results;
    });
  }
}
