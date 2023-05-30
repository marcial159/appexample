import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyObservableService {
  myObservable$=new Subject<Array<number>>// creamos el observable

  private listNumber:number[]=[]//declaramos una variable listNumber
  private flagInit:boolean=false

  constructor() { 
    if(!this.flagInit){
      this.myLogic()//llama a la funcion my logic
      this.flagInit=true

    }
    
  }

  private myLogic(): void{// declaramos una funcion logic 
    setInterval(()=>{//setimeOt se ejecuta una sola vez set interval funciona de manera recursiva
        let numberTemp=Math.floor(Math.random()*100)+1
        this.listNumber.push(numberTemp)//agrega a mi array el valor de numbertemp
        this.myObservable$.next(this.listNumber)//
    },5000)
  }
  myObservableChange$():Observable<Array<number>>{//creo la funcion observable con el mismo tipo del observable
    return this.myObservable$.asObservable();
  }
}
