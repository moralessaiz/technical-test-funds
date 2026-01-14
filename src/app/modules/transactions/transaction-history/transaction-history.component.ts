import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

// Models
import { Transaction } from '../../../core/models/transaction.model';

// Services
import { ConfigService } from '../../../core/services/config.service';

// Pipes
import { TransactionTypePipe } from '../../../shared/pipes/transaction-type.pipe';

// Components
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule,
    TransactionTypePipe,
    LoadingSpinnerComponent
  ],
  templateUrl: './transaction-history.component.html',
  styleUrls: [],
})
export class TransactionHistoryComponent implements OnInit {
  
  loading$!: Observable<boolean>;
  transactions$!: Observable<Transaction[]>;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.loading$ = this.configService.getLoadingStatus();
    this.transactions$ = this.configService.getTransacciones();
  }
}
