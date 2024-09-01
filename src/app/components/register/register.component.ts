import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  fullName: string = '';
  customerId: string | null = null;

  constructor(private router: Router) {}

  register() {
    // Mock customer ID generation
    this.customerId = Math.floor(Math.random() * 1000000).toString();
    // After registration, redirect to login
    setTimeout(() => this.router.navigate(['/login']), 5000);
  }
}
