import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-or-update-valley',
  templateUrl: './add-or-update-valley.component.html',
  styleUrls: ['./add-or-update-valley.component.scss']
})
export class AddOrUpdateValleyComponent implements OnInit {
  @Output() valleyCreated = new EventEmitter<any>();
  @Input() valleyInfo: any;

  public buttonText = 'Save';

  constructor() {
   }

  ngOnInit() {
    this.clearValleyInfo();
  }

  private clearValleyInfo = function() {
    // create empty valley object
    this.valleyInfo = {
      id: undefined,
      name: '',
      location: '',
      level: '',
      FurtherInformation: '',
      altitude: 0
    };
  };

  public addOrUpdateValley = function(event) {
    this.valleyCreated.emit(this.valleyInfo);
    this.clearValleyInfo();
  };
}
