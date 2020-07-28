import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyServService } from 'src/app/srvies/my-serv.service';
import { interval, Observable, fromEvent, from, of, generate, range, concat, merge } from 'rxjs';
import { buffer, take } from 'rxjs/operators';
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



    this.timer1 = interval(1000).pipe(take(10));
    this.timer2 = interval(2000).pipe(take(6));
    this.result = merge(this.timer1, this.timer2).subscribe(val => console.log(val));

  }








}



