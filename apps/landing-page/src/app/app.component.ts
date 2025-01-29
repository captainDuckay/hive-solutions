import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@hive-solution/landing-page-feature-header';
import { MainComponent } from '@hive-solution/landing-page-feature-main';

@Component({
  imports: [RouterModule, HeaderComponent, MainComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'landing-page';
}
