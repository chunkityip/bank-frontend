import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
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
  customerName: string = '';

  constructor(private customerService: CustomerService, private router: Router) {}

  register() {
    this.customerService.registerCustomer(this.customerName).subscribe({
      next: (response) => {
        const customerId = response.id; // Assuming the backend returns an object with an 'id' property
        alert(`Registration successful! Your customer ID is: ${customerId}`);
        this.router.navigate(['/login']);
      },
      error: () => {
        alert('Registration failed. Please try again.');
      }
    });
  }
}
