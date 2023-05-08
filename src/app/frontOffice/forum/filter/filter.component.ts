import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() closeFilter = new EventEmitter<boolean>();
  // add any additional output events you need

  onCloseClick() {
    this.closeFilter.emit(true);
  }
  // add any additional methods you need
}