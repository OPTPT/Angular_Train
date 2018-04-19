import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { CommonTableComponent } from './common-table/common-table.component';
import { FormsModule } from '@angular/forms';

const routes = [
  { path: 'table', component: IndexComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent, CommonTableComponent]
})
export class OptTableModule { }
