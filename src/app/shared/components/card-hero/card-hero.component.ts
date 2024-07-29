import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {
  @Input() item: any = {
  };
  constructor() { }

  ngOnInit(): void {
  }

}
