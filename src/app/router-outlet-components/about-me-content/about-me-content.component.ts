import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AgeCalculatorService } from '../../shared/services/age-calculator.service';

@Component({
    selector: 'app-about-me-content',
    templateUrl: './about-me-content.component.html',
    styleUrl: './about-me-content.component.sass'
})
export class AboutMeContentComponent {
  age: Number;

  constructor(private titleService:Title, private ageCalcService: AgeCalculatorService) {
    this.titleService.setTitle("About me / JP Media");
    
    this.age = ageCalcService.calculateAge()
  }
}
