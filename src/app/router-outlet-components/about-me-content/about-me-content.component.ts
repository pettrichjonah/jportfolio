import { Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AgeCalculatorService } from '../../shared/services/age-calculator.service';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-about-me-content',
    templateUrl: './about-me-content.component.html',
    styleUrl: './about-me-content.component.sass'
})
export class AboutMeContentComponent {
  public i18n = inject(LanguageService);
  age: number;

  get aboutText(): string {
      return this.i18n.language() === 'de'
    ? `Ich bin Jonah, ${this.age} Jahre alt und komme aus Niederösterreich. Auf dieser Website möchte ich nicht nur meine aktuellsten und schönsten Fotos präsentieren, sondern auch einen Einblick in meinen bisherigen kreativen Weg geben.

  Fotografie ist schon seit Langem mein mit Abstand wichtigstes Hobby. Für mich vereint es technisches und kreatives Arbeiten auf ideale Weise. Der Weg von einer Idee über die Umsetzung
  und die Bildbearbeitung bis hin zum fertigen Bild auf dieser Website zieht mich jedes Mal aufs Neue in seinen Bann.
  
  Ganz gleich, um welche Art der Fotografie es geht: Ich freue mich immer über neue Herausforderungen und Kooperationen. Kontaktieren Sie mich gerne, wenn Sie jemanden suchen, der Ihr Projekt ins richtige Licht rücken kann!`
    : `I'm Jonah - ${this.age} years old and from Lower Austria. On this website I want to not only showcase my latest and greatest pieces of work but also give an insight into my creative journey so far.

  Photography has by far been my biggest hobby since a long time. For me, it's the ideal fusion of technical and creative work. The process from an idea in my head
  over the actual capture through the editing sessions to finally putting the image onto the website you are currently looking at brings a deep satisfaction and joy to me.
  
  No matter the type of photography, I am always open for new challenges and collaborations. Need someone to put your project in the right light? I'd be happy to frame it!`;
  }

  constructor(private titleService:Title, private ageCalcService: AgeCalculatorService) {
    effect(() => {
      this.titleService.setTitle(this.i18n.translate('About me - jpframes.at', 'Über mich - jpframes.at'));
    });
    
    this.age = this.ageCalcService.calculateAge();
  }
}
