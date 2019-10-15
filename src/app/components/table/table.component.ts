import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  records: any = [{uid: 123, user: 'Bob', json: { a: 1, b: 2 }, from: 'MAXIMO', to: 'TIM', timestamp: '2019-10-15T12:05:25'}];
  test;
  constructor(
    private httpSvc: HttpService
  ) { }

  ngOnInit() {
    this.getTestData();
    // this.getRecords();
  }

  getTestData() {
    this.httpSvc.getTest()
      .subscribe(
        (response) => {
          this.test = response.data
        },
        (error) => {
          console.log('error', error);
        });
  }

  getRecords() {
    this.httpSvc.getRecords()
      .subscribe(
        (response) => {
          this.records = response;
        },
        (error) => {
          console.log('error', error);
        });
  }
}
