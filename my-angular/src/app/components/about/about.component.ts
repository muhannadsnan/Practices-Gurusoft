import { Component, OnInit } from '@angular/core';
import { DbService } from '../../DB.service';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  about = [];

  constructor(private api: DbService) { }

  ngOnInit() {
    this.api.readData().subscribe(data => this.about = Object.values(data).reverse());
  }

  onAdd(newTitle){
    let obj = { title: newTitle, date: Date.now() };
    this.api.createOBJ(obj).subscribe(res => this.about.unshift(obj));
  }

}
