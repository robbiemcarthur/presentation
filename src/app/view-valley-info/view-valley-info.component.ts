import { ValleysService } from './../valleys.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ValleysComponent } from '../valleys/valleys.component';

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
  valley: ValleysComponent;

  constructor() { }

  showValleyInfo = false;
  ngOnInit() {
    console.log(this.valleys);
  }

  public deleteRecord(record) {
    this.recordDeleted.emit(record);
  }

  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  public newRecord() {
    this.newClicked.emit();
  }


  public showValley(v: string) {
    this.valleys.forEach(element => {
      if (element.name === v) {
        element.visibility = true;
      }
    });
  }

  public hideValley() {
    this.valleys.forEach(element => {
      element.visibility = false;
    });
  }
}
