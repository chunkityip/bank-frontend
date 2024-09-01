import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  customer: any;
  accounts: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    // Retrieve the customer from local storage
    const storedCustomer = localStorage.getItem('customer');
    if (storedCustomer) {
      this.customer = JSON.parse(storedCustomer);
      this.fetchCustomerAccounts();
    } else {
      // Handle cases where customer data is missing
      alert('No customer data found. Please log in again.');
    }
  }

  fetchCustomerAccounts(): void {
    // Fetch the customer's accounts using the customer ID
    this.customerService.getCustomerAccounts(this.customer.id).subscribe({
      next: (accounts) => {
        this.accounts = accounts;
      },
      error: () => {
        alert('Failed to load accounts.');
      }
    });
  }
}
