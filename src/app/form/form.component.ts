import { Component, OnInit } from '@angular/core';

import { BoredService } from '../bored.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  nbparticipants = '1';
  minprice = '0';
  maxprice = '0';
  valid = {
    nbparticipants: true,
    minprice: true,
    maxprice: true,
  };

  constructor(public boredService: BoredService, public transferService: TransferService) { }

  ngOnInit(): void {
  }

  validate(type: string): void {
    const posNumberRegEx = /^[+]?([.]\d+|\d+([.]\d+)?)$/;
    const integerRegEx = /^[1-9][0-9]?$|^100$/;

    if (type === 'nbparticipants') {
      this.valid.nbparticipants = integerRegEx.test(this.nbparticipants);
    } else if (type === 'minprice') {
      this.valid.minprice = posNumberRegEx.test(this.minprice);
    } else if (type === 'maxprice') {
      this.valid.maxprice = posNumberRegEx.test(this.maxprice);
    }
  }
  
  isValid(): boolean{
    return (this.valid.nbparticipants && this.valid.minprice && this.valid.maxprice);
  }

  onKey(event: any, type: string) {
    if (type === 'nbparticipants') {
      this.nbparticipants = event.target.value;
    } else if (type === 'minprice') {
      this.minprice = event.target.value;
    } else if (type === 'maxprice') {
      this.maxprice = event.target.value;
    }
    this.validate(type);
  }

  onSubmit(): void{
    this.boredService
        .getResults(this.nbparticipants, this.minprice, this.maxprice).subscribe((result) => {
          console.log(result);
          this.transferService.setData(result);
        });
  }

}
