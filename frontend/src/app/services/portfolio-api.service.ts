import { Injectable } from '@angular/core';
import { PortfolioDB } from '../../../memdb/portfolioDB';
import { Observable, concatMap, from, map, of, repeat } from 'rxjs';
import { UtilsService } from './utils.service';
import { HttpClient } from '@angular/common/http';
import { GithubUserProject } from './github.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioApiService {
  private attributes = PortfolioDB.attributes;
  constructor(
    private readonly utilityService: UtilsService,
    private readonly httpClient: HttpClient
  ) { }

  get name$(): Observable<string> {
    return of(PortfolioDB.name);
  }

  get resume$(): Observable<string> {
    return of(PortfolioDB.resume);
  }

  get workedAtCompanies$(): Observable<
    { companyName: string; image: string }[]
  > {
    return of(PortfolioDB.workedAtCompanies);
  }

  get attributes$(): Observable<string> {
    return from(PortfolioDB.attributes).pipe(
      concatMap(this.utilityService.typeEffect$),
      repeat()
    );
  }
  get profileSummary$(): Observable<string> {
    return of(PortfolioDB.profileSummary);
  }

  get skillsets$(): Observable<
    {
      domain: string;
      skills: string[];
    }[]
  > {
    return of(PortfolioDB.skillsSets);
  }

  get bio$(): Observable<string> {
    return of(PortfolioDB.aboutBio).pipe(
      map((data) =>
        data.replace(
          '{{yearOfStartWorking}}',
          `${Math.floor(
            new Date().getFullYear() - PortfolioDB.yearOfStartWorking
          )}`
        )
      )
    );
  }

  get recommendations$(): Observable<
    {
      personWhoProvided: string;
      profileLink: string;
      avatar: string;
      role: string;
      organization: string;
      comments: string;
    }[]
  > {
    return of(PortfolioDB.recommendations);
  }

  get professionalExperiencesTimeline$(): Observable<ProfessionExperience[]> {
    return of(PortfolioDB.professionalExperiencesTimeline);
  }

  get linktreeDetails$(): Observable<{
    publicName: string;
    photo: string;
    designation: string;
    bio: string;
    links: {
      profileName: string;
      href: string;
      icon: string;
    }[];
  }> {
    return of(PortfolioDB.linktreeDetails);
  }

  get getGithubProjects$(): Observable<GithubUserProject[]> {
    const githubUsername = PortfolioDB.githubUsername;
    if (githubUsername == undefined || githubUsername.length == 0)
      return of([]);

    return this.httpClient
      .get<GithubUserProject[]>(
        `https://api.github.com/users/${githubUsername}/repos`
      )
      .pipe(
        map((data) =>
          data.sort(
            (a: GithubUserProject, b: GithubUserProject) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          )
        )
      );
  }

  get featuredProjects$(): Observable<FeaturedProject[]> {
    return of(PortfolioDB.featuredProjects);
  }

  getFeaturedProjectBySlug(slugName: string): Observable<FeaturedProject> {
    const projects = PortfolioDB.featuredProjects.filter(project => project.slugName === slugName);
    if (projects.length == 0) {
      return of({
        title: "",
        slugName: "",
        shortDescription: "",
        image: "",
        markdownContentFile: "",
        dateOfPublish: "",
        tags: []
      } as FeaturedProject);
    }
    return of(projects[0]);
  }

  getBlogMarkdownContent$(projectMarkdownContentFileUri: string) {
    return this.httpClient.get(projectMarkdownContentFileUri, { responseType: 'text' });
  }
}


export interface FeaturedProject {
  title: string;
  slugName: string;
  shortDescription: string;
  image: string;
  markdownContentFile: string;
  dateOfPublish: string;
  tags: string[];
}

export interface ProfessionExperience {
  timeInfo: string;
  location: string;
  roleOrWork: string;
  organizationName: string;
  content: string;
}