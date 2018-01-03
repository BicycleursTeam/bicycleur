import { Component, OnInit } from '@angular/core';
import { BicyService } from '../shared/bicy.service';
import { NgForm } from '@angular/forms';
import { Bicy } from '../shared/bicy.model';

@Component({
  selector: 'app-bicy',
  templateUrl: './bicy.component.html',
  styleUrls: ['./bicy.component.css']
})
export class BicyComponent implements OnInit {
  bicy: Bicy

  ;
  constructor(private bicyService: BicyService) { }

  ngOnInit() {
    this.resetForm();
    this.bicy = new Bicy();
    
  }

  onSubmit(form: NgForm) {
    if (form.value.$key == null)
      this.bicyService.insertBicy(form.value);
    else
      this.bicyService.updateBicy(form.value);
    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.bicyService.selectBicy = {
      $key: null,
      name: '',
      lat: 0,
      long: 0,
    }
  }

  onDelete(form: NgForm) {
    if (confirm('are you sure to delete this record?') == true) {
      this.bicyService.deleteBicy(form.value.$key);
      this.resetForm(form);
    }
  }
}
