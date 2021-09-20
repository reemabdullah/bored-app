import { Component, OnInit } from '@angular/core';

import { TransferService } from '../transfer.service';
import { Observable } from 'rxjs';
import { Activity } from '../activity.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  data: Activity;
  data$:Observable<Activity>

  constructor(public transferService: TransferService) { }

  ngOnInit(): void {
    this.transferService.getDataObs().subscribe((result) => {
      console.log(result);
      this.data = result;
    });
  }

  isUndefinied(): boolean{
    return ((this.data == undefined) || (this.data.error != undefined));
  }

}
