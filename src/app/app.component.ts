import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
var Description;
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-devops';
  Description = 'This is an Angular application integrated with Azure DevOps for CI/CD.';
  SecondDescription = 'This is new build';
  ThirdDescription = 'This is another new build';
  FourthDescription = 'This is a PROD build with jenkins formatted and finished';
}
