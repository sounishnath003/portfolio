import { Observable } from 'rxjs';

export interface PortfolioConfigurationInterface {
  currentBio: string;
  githubUsername: string;
  avatarURL: string;
  selfFeatures: string[];
  socialLinks: SocialLink[];
  companiesWorkedAt: CompaniesWorkedAt[];
  skillsSets: SkillsSet[];
  recommendations: Recommendation[];
  blogPosts: BlogPost[];
  projects: Project[];
}

export interface Project {
  id: string;
  slug: string;
  tags: string[];
  title: string;
  shortDescription: string;
  content: string;
  content$?: Observable<string>;
  readingTime?: string;
  avatar: string;
  author: string;
  datePublished: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  tags: string[];
  title: string;
  shortDescription: string;
  content: string;
  content$?: Observable<string>;
  readingTime?: string;
  avatar: string;
  author: string;
  datePublished: string;
}

export interface CompaniesWorkedAt {
  name: string;
  link: string;
}

export interface Recommendation {
  avatar: string;
  fullname: string;
  designation: string;
  origanization: string;
  linkedInURL: string;
  endorsement: string;
}

export interface SkillsSet {
  parentTopic: string;
  lists: List[];
}

export interface List {
  name: string;
  logo: string;
}

export interface SocialLink {
  type: string;
  username: string;
  link: string;
  icon: string;
}
