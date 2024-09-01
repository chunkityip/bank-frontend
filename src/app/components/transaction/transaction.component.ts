import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './transaction.component.html',
})
export class TransactionComponent {
  fromAccount: string = '';
  toAccount: string = '';
  amount: number = 0;

  processTransaction() {
    // Logic for processing transaction (e.g., call API to process transaction)
    console.log(`Transaction Processed: ${this.amount} from ${this.fromAccount} to ${this.toAccount}`);
  }
}
