import {
  VueDotjsIcon,
  TypeScriptIcon,
  NestJsIcon,
  PostgreSqlIcon,
  TailwindCssIcon,
  ReactIcon,
  NodeDotjsIcon,
  GoogleCloudIcon,
  ShadcnuiIcon,
} from 'vue3-simple-icons';

export const SKILLS = [
  {
    title: 'Google Cloud Platform',
    component: GoogleCloudIcon,
    logoClasses: 'text-[#db4a39]',
  },
  {
    title: 'TypeScript',
    component: TypeScriptIcon,
    logoClasses: 'text-[#3178C6]',
  },
  {
    title: 'NestJS',
    component: NestJsIcon,
    logoClasses: 'text-[#E0234E]',
  },
  {
    title: 'Node.js',
    component: NodeDotjsIcon,
    logoClasses: 'text-[#3C873A]',
  },
  {
    title: 'React',
    component: ReactIcon,
    logoClasses: 'text-[#3178C6] dark:text-[#61DAFB]',
  },
  {
    title: 'Shadcn UI',
    component: ShadcnuiIcon,
  },
  {
    title: 'Vue.js',
    component: VueDotjsIcon,
    logoClasses: 'text-[#1c9112] dark:text-[#42B883]',
  },
  {
    title: 'Tailwind CSS',
    component: TailwindCssIcon,
    logoClasses: 'text-[#06B6D4]',
  },
  {
    title: 'PostgreSQL',
    component: PostgreSqlIcon,
    logoClasses: 'text-[#336791]',
  },
];

export interface IProject {
  url?: string | null;
  name: string;
  description: string;
  image: string;
  mobileImage: string;
  backendRepositoryUrl?: string | null;
  frontendRepositoryUrl?: string | null;
}

export const PROJECTS: IProject[] = [
  {
    url: 'https://to-do-list-gules-three-33.vercel.app/',
    name: 'Todo List',
    description: `
        Aplicativo de gerenciamento de tarefas feito em React, Vite e TypeScript
      `,
    image: 'todo-thumb.png',
    mobileImage: 'todo-thumb-2.png',
    frontendRepositoryUrl: 'https://github.com/Thiago-Teofilo/to-do-list',
  },
  {
    url: 'https://ignite-feed-frontend-thiago-teofilos-projects.vercel.app/',
    name: 'Ignite Feed',
    description: `
        Aplicativo blog feito em React, Vite, TypeScript e uma API integrada feita em NestJS com um banco de dados PostgreSQL
      `,
    image: 'ignite-feed-thumb.png',
    mobileImage: 'ignite-feed-thumb-2.png',
    backendRepositoryUrl:
      'https://github.com/Thiago-Teofilo/ignite-feed-backend',
    frontendRepositoryUrl:
      'https://github.com/Thiago-Teofilo/ignite-feed-frontend',
  },
  {
    url: 'https://ignite-timer-frontend.vercel.app/',
    name: 'Ignite Timer',
    description: `
      Aplicativo de cronometragem feito em React que se aprofunda em hooks, como useReducer e useContext.
    `,
    image: 'ignite-timer-thumb.png',
    mobileImage: 'ignite-timer-thumb-2.png',
    backendRepositoryUrl:
      'https://github.com/Thiago-Teofilo/ignite-timer-backend',
    frontendRepositoryUrl:
      'https://github.com/Thiago-Teofilo/ignite-timer-frontend',
  },
];
