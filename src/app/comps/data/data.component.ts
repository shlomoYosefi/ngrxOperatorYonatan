



import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyServService } from 'src/app/srvies/my-serv.service';
import { interval, Observable, fromEvent, from, of, generate, range, concat, merge, race, zip } from 'rxjs';
import { buffer, take, mapTo, map, concatMap, delay, mergeMap, filter, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {


  array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  myFrom
  myOf
  range1
  range2
  timer1
  timer2
  concat
  merg
  generate


  result
  byClick
  befor

  constructor() {
  }

  ngOnInit(): void {

    // this.myFrom = from(this.array).subscribe(val=>console.log(val))
    // this.myOf = of(this.array).subscribe(val=>console.log(val))
    // this.generate = generate(10, x => x<60 , x=> x+10).subscribe(val=>console.log(val))



    // this.result = interval(1000)
    // this.byClick = fromEvent(document,'click')
    // this.befor = this.result.pipe(buffer(this.byClick)).subscribe(val=>console.log(val))



    // this.range1 = range(1,5)
    // this.range2 = range(1,13)
    // this.concat = concat(this.range1,this.range2).subscribe(val=>console.log(val))



    // this.timer1 = interval(1000).pipe(take(10));
    // this.timer2 = interval(2000).pipe(take(6));
    // this.result = merge(this.timer1, this.timer2).subscribe(val => console.log(val));



    // const obs1 = interval(1000).pipe(take(5));
    // const obs2 = interval(3000).pipe(take(5));
    // const obs3 = interval(5000).pipe(take(5));
    // race(obs3, obs1, obs2)
    //   .subscribe(
    //     val => console.log(val)
    //   );



    // let age$ = of<number>(27, 25, 29);
    // let name$ = of<string>('Foo', 'Bar', 'Beer');
    // let isDev$ = of<boolean>(true, true, false);



    // zip(age$, name$, isDev$).pipe(
    //   map(([age, name, isDev]) => ({ age, name, isDev })),
    // )
    //   .subscribe(x => console.log(x));



    // const source = of(2000, 1000);
    // map value from source into inner observable, when complete emit result and move to next
    // const example = source.pipe(
    //   mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))).subscribe(val=>console.log(val)
    // );



    // const source = of(2000, 1000);
    // source.pipe(map(val=>val*10)).subscribe(val=>console.log(val))
    // source.pipe(mapTo(val=>val*10)).subscribe(val=>console.log(val))
    // source.pipe(filter(val=>val<1500)).pipe(map(val=>val*5)).subscribe(val=>console.log(val))



    // const switched = of(1, 2, 3).pipe(switchMap(x => of(x, x ** 2, x ** 3)));
    // const switched2 = of(1, 2, 3).pipe(map(x => of(x, x ** 2, x ** 3))).subscribe(val=>val.subscribe(val=>console.log(val)));
    // switched.subscribe(x => console.log(x));
  }








}