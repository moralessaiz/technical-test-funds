import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

// Models
import { Fund } from '../../../core/models/fund.model';

// Services
import { ConfigService } from '../../../core/services/config.service';

// Components
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-fund-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './fund-detail.component.html',
  styleUrls: []
})
export class FundDetailComponent implements OnInit {

  fund!: Fund;

  constructor(
    private route: ActivatedRoute,
    private configService: ConfigService,
    private router: Router
) {}

  ngOnInit(): void {
    const fundId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.configService.getFunds().subscribe(funds => {
      const found = funds.find(f => f.id === fundId);
      if(found) {
        this.fund = found;
      }
    });
  }
  cancelar(): void {
    try {
      this.configService.cancelarFondo(
        this.fund,
        this.fund.minimumAmount
      );
      this.router.navigate(['/transactions']);
    } catch(error: any) {
      console.log(error.message)
    }
  }
}
