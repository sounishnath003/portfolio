export interface PortfolioConfigurationInterface {
  self_features: string[];
  current_bio: string;
  companies_worked_at: CompaniesWorkedAt[];
}

export interface CompaniesWorkedAt {
  name: string;
  link: string;
}
