import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgecalcService {
  calculateAge() {
    var birthdate: Date = new Date(2001,9,2)
    var currentdate: Date = new Date()
    var yearDif = currentdate.getFullYear() - birthdate.getFullYear();
    
    if(currentdate.getMonth()<birthdate.getMonth())
    {
      yearDif--
    }
    else {
      if(currentdate.getDay()<birthdate.getDay())
      {
        yearDif--
      }
    }  

    return yearDif;
  }

  constructor(){ 
  }
}
