import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Transaction } from '../../models/transaction.model';

export interface FormDialogData {
  mode: 'create' | 'update';
  transaction?: Transaction;
}

@Component({
  selector: 'app-form-dialog',
  template: `
    <h2 mat-dialog-title>{{ data.mode === 'create' ? 'Add Transaction' : 'Update Transaction' }}</h2>

    <mat-dialog-content>
      <form [formGroup]="form" class="dialog-form">

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Amount</mat-label>
          <input matInput formControlName="amount" type="text" placeholder="0.00">
          <mat-error *ngIf="form.get('amount')?.hasError('required')">
            Amount is required
          </mat-error>
          <mat-error *ngIf="form.get('amount')?.hasError('pattern') && !form.get('amount')?.hasError('required')">
            Amount must be a valid decimal (up to 2 decimal places)
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Description</mat-label>
          <input matInput formControlName="description" placeholder="Enter description">
          <mat-error *ngIf="form.get('description')?.hasError('required')">
            Description is required
          </mat-error>
          <mat-error *ngIf="form.get('description')?.hasError('maxlength')">
            Description must not exceed 255 characters
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Status</mat-label>
          <mat-select formControlName="status" placeholder="Enter status">
            <mat-option value="Created">Created</mat-option>
            <mat-option value="Completed">Completed</mat-option>
          </mat-select>
          <mat-error *ngIf="form.get('status')?.hasError('required')">
            Status is required
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Transaction Type</mat-label>
          <mat-select formControlName="transactionType" placeholder="Select type">
            <mat-option value="Deposit">Deposit</mat-option>
            <mat-option value="Withdrawal">Withdrawal</mat-option>
            <mat-option value="Transfer">Transfer</mat-option>
          </mat-select>
          <mat-error *ngIf="form.get('transactionType')?.hasError('required')">
            Transaction type is required
          </mat-error>
        </mat-form-field>

      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-raised-button color="primary" (click)="onSave()" [disabled]="form.invalid">Save</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .dialog-form {
      display: flex;
      flex-direction: column;
      min-width: 300px;
      padding-top: 8px;
    }

    .full-width {
      width: 100%;
      margin-bottom: 8px;
    }

    mat-dialog-content {
      min-width: 350px;
    }
  `]
})
export class FormDialogComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormDialogData
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      amount: [
        this.data.mode === 'update' && this.data.transaction ? this.data.transaction.amount : '',
        [Validators.required, Validators.pattern(/^\d{1,16}(\.\d{1,2})?$/)]
      ],
      description: [
        this.data.mode === 'update' && this.data.transaction ? this.data.transaction.description : '',
        [Validators.required, Validators.maxLength(255)]
      ],
      status: [
        this.data.mode === 'update' && this.data.transaction ? this.data.transaction.status : '',
        [Validators.required]
      ],
      transactionType: [
        this.data.mode === 'update' && this.data.transaction ? this.data.transaction.transactionType : '',
        [Validators.required]
      ]
    });
  }

  onSave(): void {
    if (this.form.valid) {
      const formValue = this.form.value;
      this.dialogRef.close({
        amount: parseFloat(formValue.amount),
        description: formValue.description,
        status: formValue.status,
        transactionType: formValue.transactionType
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
