// app.component.ts
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
} from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DebounceSearchService } from './debounce-search.service';

const APIKEY = 'e8067b53';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('movieSearchInput', { static: true }) movieSearchInput!: ElementRef;
  apiResponse: any;
  isSearching: boolean;

  constructor(
    private httpClient: HttpClient,
    private debounceSearch: DebounceSearchService
  ) {
    console.log(this.movieSearchInput);
    this.isSearching = false;
    this.apiResponse = [];
  }

  ngOnInit() {
    console.log(this.movieSearchInput);

    this.debounceSearch
      .search(this.movieSearchInput.nativeElement)
      .subscribe((searchedTerm) => {
        this.isSearching = true;
        this.searchGetCall(searchedTerm).subscribe(
          (res) => {
            console.log('res', res);
            this.isSearching = false;
            this.apiResponse = res;
          },
          (err) => {
            this.isSearching = false;
            console.log('error', err);
          }
        );
      });
  }

  searchGetCall(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.httpClient.get(
      'http://www.omdbapi.com/?s=' +
        term +
        '&apikey=' +
        APIKEY +
        '&search' +
        term
    );
  }
}
