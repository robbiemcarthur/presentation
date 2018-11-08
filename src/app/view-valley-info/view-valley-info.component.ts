import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-valley-info',
  templateUrl: './view-valley-info.component.html',
  styleUrls: ['./view-valley-info.component.scss']
})
export class ViewValleyInfoComponent implements OnInit {
  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() valleys: Array<any>;

  constructor() { }

  ngOnInit() {

  }

  public deleteValley(record) {
    this.recordDeleted.emit(record);
  }

  public editValley(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  public newValley() {
    this.newClicked.emit();
  }

}
