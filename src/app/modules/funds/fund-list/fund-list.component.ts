import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

// SErvices
import { ConfigService } from '../../../core/services/config.service';

// Models
import { Fund } from '../../../core/models/fund.model';

// Components
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-fund-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LoadingSpinnerComponent
],
  templateUrl: './fund-list.component.html',
  styleUrls: []
})
export class FundListComponent implements OnInit{

  loading$!: Observable<boolean>;
  funds$!: Observable<Fund[]>;
  balance$!: Observable<number>;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.loading$ = this.configService.getLoadingStatus();
    this.funds$ = this.configService.getFunds();
    this.balance$ = this.configService.getBalance();
  }

}
