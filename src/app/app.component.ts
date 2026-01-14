import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from "../../node_modules/@angular/router/index";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule
],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'technical-test-funds';

  ngOnInit(): void {}
}
