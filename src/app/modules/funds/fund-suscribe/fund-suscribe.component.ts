import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Models
import { Fund } from '../../../core/models/fund.model';

// Services
import { ConfigService } from '../../../core/services/config.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fund-suscribe',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './fund-suscribe.component.html',
  styleUrls: []
})
export class FundSuscribeComponent implements OnInit {

  fund!: Fund;
  form!: FormGroup;
  errorMessage: string | null = null;
  balance$!: Observable<number>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private configService: ConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const fundId = Number(this.route.snapshot.paramMap.get('id'));
    this.balance$ = this.configService.getBalance();

    this.configService.getFunds().subscribe(funds => {
      const found = funds.find(f => f.id === fundId);
      if (found) {
        this.fund = found;
        this.createForm();
      }
    });
  }

  createForm(): void {
    this.form = this.fb.group({
      amount: [
        '',
        [Validators.required, Validators.min(this.fund.minimumAmount)]
      ],
      notification: ['Email', Validators.required]
    });
  }

  submit(): void {
    if (this.form.invalid) return;

    try {
      this.configService.subscribeAFondo(
        this.fund,
        this.form.value.amount,
        this.form.value.notification
      );

      this.router.navigate(['/transactions']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}
