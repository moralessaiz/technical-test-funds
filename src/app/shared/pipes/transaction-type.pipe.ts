import { Pipe, PipeTransform } from '@angular/core';

// Models
import { TransactionType } from '../../core/models/transaction.model';

@Pipe({
  name: 'transactionType',
  standalone: true
})
export class TransactionTypePipe implements PipeTransform {

  transform(type: TransactionType): string {
    switch (type) {
      case 'SUSCRIPCION':
        return 'Suscripción';
      case 'CANCELATION':
        return 'Cancelación';
      default:
        return 'Desconocido';
    }
  }

}
