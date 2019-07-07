import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const navigatorLangugage = navigator.language;
    const availableLanguages = ['fr'];

    translate.setDefaultLang(availableLanguages.find(x => x == navigatorLangugage || x == 'fr'));
  }
}
