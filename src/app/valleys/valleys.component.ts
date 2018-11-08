import { AddOrUpdateValleyComponent } from './../add-or-update-valley/add-or-update-valley.component';
import { ValleysService } from './../valleys.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-valleys',
  templateUrl: './valleys.component.html',
  styleUrls: ['./valleys.component.scss']
})
export class ValleysComponent implements OnInit {
  public valleys: Array<any>;
  public currentValley: any;

  constructor(private valleyService: ValleysService) {
    valleyService.get().subscribe((data: any) => this.valleys = data);
    this.currentValley = this.setInitialValuesForValleyData();
   }

  ngOnInit() {

  }

  private setInitialValuesForValleyData() {
    return {
      id: undefined,
      name: '',
      location: '',
      level: '',
      FurtherInformation: '',
      altitude: 0
    };
  }

  public addOrUpdateValley = function(valley: any) {
    // if valley is in valleys, assume it is an update otherwise add a new one
    let valleyWithId;
    valleyWithId = _.find(this.valleys, el => el.id === valley.id);
    if (valleyWithId) {
      const updateIndex = _.findIndex(this.valleys, {id: valleyWithId.id});
      this.valleyService.update(valley).subscribe(
        valleyRecord => this.valleys.splice(updateIndex, 1, valley)
      );
    } else {
      this.valleyService.add(valley).subscribe(
        valleyRecord => this.valleys.push(valley)
      );
    }

    this.currentValley = this.setInitialValuesForValleyData();
  };

  public editClicked = function(record) {
    this.currentValley = record;
  };

  public newClicked = function(record) {
    this.currentValley = this.setInitialValuesForValleyData();
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.valleys, {id: record.id});
    this.valleyService.remove(record).subscribe(
      result => this.valleys.splice(deleteIndex, 1)
    );
  }
}
