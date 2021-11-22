import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private subject$: Subject<string>;
  observable$: Observable<string>;

  constructor() {
    this.init();
  }

  init() {
    this.subject$ = new BehaviorSubject(null);
    this.observable$ = this.subject$.asObservable();

    setInterval(() => {
      const date = new Date();
      const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      this.subject$.next(time);
    }, 3000)
  }
}
