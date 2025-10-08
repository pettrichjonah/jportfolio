import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgecalcService {
  calculateAge() {
    var birthdate: Date = new Date(2001,9,2);
    var today: Date = new Date();

    let yearsDiff = today.getFullYear() - birthdate.getFullYear();
    const monthsDiff = today.getMonth() - birthdate.getMonth();
    if (monthsDiff < 0 || (monthsDiff === 0 && today.getDate() < birthdate.getDate())) {
        yearsDiff--;
    }

    return yearsDiff;
  }
}
