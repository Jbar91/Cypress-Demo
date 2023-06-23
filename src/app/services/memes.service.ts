import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Memes } from 'src/types/types';

const initialMemes: Memes[] = [
  {
    id: '',
    image: '',
    score: 0,
    title: '',
  },
];

@Injectable({
  providedIn: 'root',
})
export class MemesService {
  url = 'http://localhost:4400/memes';

  memes$: BehaviorSubject<Memes[]>;

  constructor(private http: HttpClient) {
    this.memes$ = new BehaviorSubject(initialMemes);
  }

  queryAll(): Observable<Memes[]> {
    return this.http.get<{ result: Memes[] }>(this.url).pipe(
      map((data) => {
        this.memes$.next(data.result);
        console.log(data.result);
        return data.result;
      })
    );
  }

  queryById(id: string) {
    return this.http.get(this.url + `/${id}`);
  }
}
