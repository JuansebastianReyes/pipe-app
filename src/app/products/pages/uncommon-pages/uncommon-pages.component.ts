import { Component } from '@angular/core';
import { Observable, interval, tap, timeout } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css'
})
export class UncommonPagesComponent {
  public name: string = 'Sebastian';
  public gender: 'mele' | 'famele' = 'mele';
  public invitationMap = {
    'mele': 'invitarlo',
    'famele': 'invitarla'
  }


  changeClient():void{
    this.name = 'Claudia';
    this.gender = 'famele';
  }

  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melisa', 'Natalia'];
  public clienstsMap ={
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }


  public person ={
    name : 'Sebastian',
    age: 28,
    adrres: 'Bogotá, Colombia'
  }

  deleteClient(): void{
    this.clients.shift();
  }

  public myObservableTimer: Observable<Number> = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );


  public promiseValue: Promise<string> = new Promise( (resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.')
    }, 3500)
  })
}
