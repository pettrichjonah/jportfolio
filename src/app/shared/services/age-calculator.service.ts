import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeCalculatorService {
  calculateAge(today: Date = new Date()) {
    const birthdate = new Date(2001, 8, 2);

    let yearsDiff = today.getFullYear() - birthdate.getFullYear();
    const monthsDiff = today.getMonth() - birthdate.getMonth();

    if (monthsDiff < 0 || (monthsDiff === 0 && today.getDate() < birthdate.getDate())) {
      yearsDiff--;
    }

    return yearsDiff;
  }
}
