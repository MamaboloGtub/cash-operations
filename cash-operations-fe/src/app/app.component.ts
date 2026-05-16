import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" class="app-header">
      <mat-icon>account_balance</mat-icon>
      <span class="app-title">Deposita Cash Operations</span>
    </mat-toolbar>

    <main class="app-content">
      <app-data-grid></app-data-grid>
    </main>

    <footer class="app-footer">
      <p>&copy; {{ currentYear }} Deposita Cash Operations. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .app-header {
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .app-title {
      margin-left: 8px;
      font-size: 20px;
    }

    .app-content {
      flex: 1;
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
      box-sizing: border-box;
    }

    .app-footer {
      background-color: #3f51b5;
      color: white;
      text-align: center;
      padding: 16px;
    }

    .app-footer p {
      margin: 0;
      font-size: 14px;
    }

    @media (max-width: 600px) {
      .app-content {
        padding: 12px;
      }

      .app-title {
        font-size: 16px;
      }
    }
  `]
})
export class AppComponent {
  title = 'Deposita Cash Operations';
  currentYear = new Date().getFullYear();
}
