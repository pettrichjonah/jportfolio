import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AgecalcService } from '../services/agecalc.service';

@Component({
    selector: 'app-aboutmecontent',
    templateUrl: './aboutmecontent.component.html',
    styleUrl: './aboutmecontent.component.sass'
})
export class AboutmecontentComponent {
  age: Number;

  constructor(private titleService:Title, private ageCalcService: AgecalcService) {
    this.titleService.setTitle("About me - JP Media");
    
    this.age = ageCalcService.calculateAge()
  }
}
