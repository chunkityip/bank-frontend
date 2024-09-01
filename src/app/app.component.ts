import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule, // Import any other Material components or custom components
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Banking App</span>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
