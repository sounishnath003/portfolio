export interface PortfolioConfigurationInterface {
  currentBio: string;
  avatarURL: string;
  selfFeatures: string[];
  companiesWorkedAt: CompaniesWorkedAt[];
  skillsSets: SkillsSet[];
}

export interface CompaniesWorkedAt {
  name: string;
  link: string;
}

export interface SkillsSet {
  parentTopic: string;
  lists: List[];
}

export interface List {
  name: string;
  logo: string;
}
