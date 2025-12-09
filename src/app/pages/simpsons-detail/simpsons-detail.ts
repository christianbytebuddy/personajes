import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SimpsonsService } from '../../services/simpsons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simpsons-detail',
  templateUrl: './simpsons-detail.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SimpsonsDetailComponent implements OnInit {

  data: any = null;

  constructor(
    private route: ActivatedRoute,
    private api: SimpsonsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.getOne(id).subscribe(res => {
      this.data = res;
    });
  }
}
