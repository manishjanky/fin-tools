export interface FDInput {
  startDate: string;
  principal: number;
  rate: number;
  tenureYears: number;
  tenureMonths: number;
  tenureDays: number;
  compounding: 'monthly' | 'quarterly' | 'halfYearly' | 'annually';
  payoutType: 'maturity' | 'quarterly' | 'monthly';
}

export interface FYData {
  fyYear: string;
  startBalance: number;
  endBalance: number;
  interestEarned: number;
  interestPayout?: number;
}

export interface FDSummary {
  totalInterestEarned: number;
  maturityAmount: number;
  fyData: FYData[];
}
