import { Component, OnInit } from '@angular/core';
import { BicyService } from '../shared/bicy.service';
import { AngularFireList } from 'angularfire2/database';
import { Bicy } from '../shared/bicy.model';


@Component({
  selector: 'app-bicylist',
  templateUrl: './bicylist.component.html',
  styleUrls: ['./bicylist.component.css']
})
export class BicylistComponent implements OnInit {

  bicyList: Bicy[];
  constructor(private bicyService: BicyService) { }

  ngOnInit() {

    var x = this.bicyService.getData();
    x.snapshotChanges().subscribe(item => {
      this.bicyList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.bicyList.push(y as Bicy);
      });
    });

  }
  onItemClick(bi: Bicy) {
    this.bicyService.selectBicy = Object.assign({}, bi);

  }

}
