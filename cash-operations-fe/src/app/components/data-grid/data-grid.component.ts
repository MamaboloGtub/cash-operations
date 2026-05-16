import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { Transaction } from '../../models/transaction.model';
import { TransactionService } from '../../services/transaction.service';
import { FormDialogComponent, FormDialogData } from '../form-dialog/form-dialog.component';

@Component({
  selector: 'app-data-grid',
  template: `
    <div class="data-grid-container">
      <div class="grid-header">
        <button mat-raised-button color="primary" (click)="openAddDialog()">
          <mat-icon>add</mat-icon>
          Add Transaction
        </button>
      </div>

      <div class="table-responsive">
        <table mat-table [dataSource]="dataSource" class="transactions-table">

          <ng-container matColumnDef="transactionId">
            <th mat-header-cell *matHeaderCellDef>Transaction ID</th>
            <td mat-cell *matCellDef="let transaction">{{ transaction.transactionId }}</td>
          </ng-container>

          <ng-container matColumnDef="amount">
            <th mat-header-cell *matHeaderCellDef>Amount</th>
            <td mat-cell *matCellDef="let transaction">{{ transaction.amount | currency:'ZAR':'symbol-narrow' }}</td>
          </ng-container>

          <ng-container matColumnDef="description">
            <th mat-header-cell *matHeaderCellDef>Description</th>
            <td mat-cell *matCellDef="let transaction">{{ transaction.description }}</td>
          </ng-container>

          <ng-container matColumnDef="transactionType">
            <th mat-header-cell *matHeaderCellDef>Transaction Type</th>
            <td mat-cell *matCellDef="let transaction">{{ transaction.transactionType }}</td>
          </ng-container>

          <ng-container matColumnDef="dateCreated">
            <th mat-header-cell *matHeaderCellDef>Date Created</th>
            <td mat-cell *matCellDef="let transaction">{{ transaction.dateCreated | date:'medium' }}</td>
          </ng-container>

          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef>Actions</th>
            <td mat-cell *matCellDef="let transaction">
              <button mat-icon-button color="primary" (click)="openEditDialog(transaction)" aria-label="Edit transaction">
                <mat-icon>edit</mat-icon>
              </button>
              <button mat-icon-button color="warn" (click)="deleteTransaction(transaction.transactionId)" aria-label="Delete transaction">
                <mat-icon>delete</mat-icon>
              </button>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

          <tr class="mat-row" *matNoDataRow>
            <td class="mat-cell no-data-cell" [attr.colspan]="displayedColumns.length">
              No transactions found.
            </td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .data-grid-container {
      width: 100%;
    }

    .grid-header {
      margin-bottom: 16px;
      display: flex;
      justify-content: flex-end;
    }

    .table-responsive {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .transactions-table {
      width: 100%;
      min-width: 600px;
    }

    .no-data-cell {
      text-align: center;
      padding: 24px;
      font-style: italic;
      color: rgba(0, 0, 0, 0.54);
    }

    th.mat-header-cell {
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .transactions-table {
        min-width: 500px;
      }
    }

    @media (max-width: 480px) {
      .grid-header {
        justify-content: stretch;
      }

      .grid-header button {
        width: 100%;
      }
    }
  `]
})
export class DataGridComponent implements OnInit {
  displayedColumns: string[] = [
    'transactionId',
    'amount',
    'description',
    'transactionType',
    'dateCreated',
    'actions'
  ];

  dataSource = new MatTableDataSource<Transaction>([]);

  constructor(
    private transactionService: TransactionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getAll().subscribe({
      next: (transactions) => {
        this.dataSource.data = transactions;
      },
      error: (err) => {
        console.error('Failed to load transactions', err);
      }
    });
  }

  openAddDialog(): void {
    const dialogData: FormDialogData = { mode: 'create' };
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '450px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.transactionService.create(result).subscribe({
          next: () => {
            this.loadTransactions();
          },
          error: (err) => {
            console.error('Failed to create transaction', err);
          }
        });
      }
    });
  }

  openEditDialog(transaction: Transaction): void {
    const dialogData: FormDialogData = { mode: 'update', transaction };
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '450px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.transactionService.update(transaction.transactionId, result).subscribe({
          next: () => {
            this.loadTransactions();
          },
          error: (err) => {
            console.error('Failed to update transaction', err);
          }
        });
      }
    });
  }

  deleteTransaction(id: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this transaction?');
    if (!confirmed) {
      return;
    }

    this.transactionService.delete(id).subscribe({
      next: () => {
        this.loadTransactions();
      },
      error: (err) => {
        console.error('Failed to delete transaction', err);
      }
    });
  }
}
