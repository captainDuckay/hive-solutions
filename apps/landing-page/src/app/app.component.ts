import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";

@Component({
  imports: [RouterModule, NgOptimizedImage],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'landing-page';
}
