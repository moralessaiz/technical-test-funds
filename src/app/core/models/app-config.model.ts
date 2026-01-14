
import { Fund } from './fund.model'
export interface AppConfig {
    user: {
        initialBalance: number;
        currency: string;
    };
    funds: Fund[]
}