import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  customerName: string = 'John Doe';
  bankAccounts = [
    { number: '123456', balance: 1500 },
    { number: '654321', balance: 2000 },
  ];

  ngOnInit(): void {
    // Fetch customer data and bank accounts
  }
}



