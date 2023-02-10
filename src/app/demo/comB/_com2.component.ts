import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {TableModule} from 'primeng/table';
import {bookData, Book} from './utils/data'



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
