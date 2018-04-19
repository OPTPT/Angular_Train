import { Component, OnInit } from '@angular/core';
import { bodyData, headData, tableData } from '../data'

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {

  title = "";
  tableData = tableData;
  get headData() {
    return headData(tableData);
  };

  sortOrders = {}

  editData = new Array(tableData.length).fill([]).map(item => new Array(Object.keys(tableData[0]).length));


  constructor() {
    headData(tableData).forEach(item => {
      this.sortOrders[item] = 1;
    })
  }

  edit(i, j) {
    this.editData[i][j] = !this.editData[i][j];
  }
  editOver(i, j) {

  }

  sortBy(sortKey) {
    const order = this.sortOrders[sortKey] * -1
    this.sortOrders[sortKey] = order;
    this.tableData = this.tableData.slice().sort(function (a, b) {
      a = a[sortKey]
      b = b[sortKey]
      return (a === b ? 0 : a > b ? 1 : -1) * order;
    })
    console.log(this.tableData)
  }

  ngOnInit() {
  }

}
