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
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  customerId: string = '';

  constructor(private customerService: CustomerService, private router: Router) {}

  login() {
    this.customerService.loginCustomer(this.customerId).subscribe({
      next: (customer) => {
        localStorage.setItem('customer', JSON.stringify(customer)); // Store customer data in local storage
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        alert('Login failed. Please check your customer ID.');
      }
    });
  }
}




