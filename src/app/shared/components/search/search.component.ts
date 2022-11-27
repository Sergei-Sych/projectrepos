import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  @Input() placeholder!: string;
  @Output() searchAction = new EventEmitter();

  onSearch(){}
}
