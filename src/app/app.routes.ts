import { Routes } from '@angular/router';

// Components
import { FundListComponent } from './modules/funds/fund-list/fund-list.component';
import { FundDetailComponent } from './modules/funds/fund-detail/fund-detail.component';
import { FundSuscribeComponent } from './modules/funds/fund-suscribe/fund-suscribe.component';
import { TransactionHistoryComponent } from './modules/transactions/transaction-history/transaction-history.component';

export const routes: Routes = [
    {
        path: 'funds',
        children: [
            {
                path: '',
                component: FundListComponent
            },
            {
                path: ':id',
                component: FundDetailComponent
            },
            {
                path: ':id/subscribe',
                component: FundSuscribeComponent
            }
        ]
    },
    {
        path: 'transactions',
        component: TransactionHistoryComponent
    },
    {
        path: '',
        redirectTo: 'funds',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'funds'
    }
]