import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example';
}
