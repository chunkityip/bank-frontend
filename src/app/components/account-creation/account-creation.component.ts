import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-account-creation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './account-creation.component.html',
})
export class AccountCreationComponent {
  accountName: string = '';
  initialDeposit: number = 0;

  createAccount() {
    // Logic for account creation (e.g., call API to create a bank account)
    console.log(`Account Created: ${this.accountName} with initial deposit ${this.initialDeposit}`);
  }
}
