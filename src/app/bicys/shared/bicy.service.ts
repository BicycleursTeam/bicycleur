import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Bicy } from './bicy.model';

@Injectable()
export class BicyService {

  bicyList: AngularFireList<any>;
  selectBicy: Bicy = new Bicy();
  constructor(private firebase: AngularFireDatabase) { }


  getData() {
    this.bicyList = this.firebase.list('bicys');
    return this.bicyList;
  }

  insertBicy(bicy: Bicy) {
    this.bicyList.push({
      name: bicy.name,
      lat: bicy.lat,
      long: bicy.long,

    });
  }
  updateBicy(bi: Bicy) {
    this.bicyList.update(bi.$key, {
      name: bi.name,
      lat: bi.lat,
      long: bi.long,

    })
  }

  deleteBicy(key : string){
    this.bicyList.remove(key);
  }

}
