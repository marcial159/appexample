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
        //this.mylogic : en caso se use setTimeout espera el tiempo indicado para ejecutarse
    },5000)//se indica el tiempo donde cada 5 sec se ejecuta el codigo indicado
  }
  myObservableChange$():Observable<Array<number>>{//creo la funcion observable con el mismo tipo del observable
    return this.myObservable$.asObservable();//retorna myobservable como un observable(as)
  }
}
