import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
// import {TableModule} from 'primeng/table';
import { Add, DemoState, DemoStateModel, Find, Substract } from '../demo.state';
import {bookData, Book} from './utils/data'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-2',
  templateUrl: './_com2.component.html',
  styleUrls: ['./_com2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})


export class Com2Component implements OnInit {
  bookData: Book[] = [];

  ngOnInit(): void {
    this.bookData = bookData
  }

  deleteBook() {
    this.bookData = this.bookData.splice(-1)
  }
}
