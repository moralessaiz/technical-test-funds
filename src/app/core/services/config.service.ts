import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, defer, finalize, map, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Models
import { AppConfig } from '../models/app-config.model';
import { Fund } from '../models/fund.model';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private readonly configUrl = 'assets/data/app-config.json';

  constructor(private http: HttpClient) {
    this.config$.subscribe(config => {
      this.balance$.next(config.user.initialBalance);
    });
  }

  ngOnInit(): void { }
  
  private balance$ = new BehaviorSubject<number>(0);
  private transactions$ = new BehaviorSubject<Transaction[]>([]);
  private loading$ = new BehaviorSubject<boolean>(true);
  
  private config$ = defer(() => {
    return this.http.get<AppConfig>(this.configUrl).pipe(
      finalize(() => this.loading$.next(false))
    );
  }).pipe(shareReplay(1));

  getConfig(): Observable<AppConfig> {
    return this.config$;
  }

  getFunds(): Observable<AppConfig['funds']> {
    return this.config$.pipe(map(config => config.funds));
  }

  getBalance(): Observable<number> {
    return this.balance$.asObservable();
  }

  getLoadingStatus(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  getTransacciones(){
    return this.transactions$.asObservable().pipe(
      map(transactions => [...transactions].sort(
        (a, b) => b.date.getTime() - a.date.getTime()
      ))
    );
  }

  subscribeAFondo(fondo: Fund, monto: number, notificacion: 'Email' | 'SMS') {
    if (monto < fondo.minimumAmount) {
      throw new Error(`El mínimo para suscribirse al fondo ${fondo.name} es de ${fondo.minimumAmount}`);
    }

    if (monto > this.balance$.value) {
      throw new Error('Saldo insuficiente para realizar la suscripción');
    }

    this.balance$.next(this.balance$.value - monto);
    
    this.transactions$.next([
      ...this.transactions$.value,
      {
        id: Date.now(),
        fundId: fondo.id,
        fundName: fondo.name,
        type: 'SUSCRIPCION',
        amount: monto,
        date: new Date(),
        notificationWay: notificacion
      }
    ])
  }
  cancelarFondo(fondo: Fund, monto: number) {
  
  if (monto <= 0) {
    throw new Error('El monto debe ser mayor a cero para realizar la cancelación');
  }

  this.balance$.next(this.balance$.value + monto);

  this.transactions$.next([
    ...this.transactions$.value,
    {
      id: Date.now(),
      fundId: fondo.id,
      fundName: fondo.name,
      type: 'CANCELATION',
      amount: monto,
      date: new Date()
    }
  ]);
}

}
