import {
  VueDotjsIcon,
  TypeScriptIcon,
  NestJsIcon,
  JavaScriptIcon,
  PostgreSqlIcon,
  Html5Icon,
  Css3Icon,
  TailwindCssIcon,
  ReactIcon,
} from 'vue3-simple-icons';

export const SKILLS = [
  {
    title: 'HTML5',
    component: Html5Icon,
    logoClasses: 'text-[#E34F26]',
  },
  {
    title: 'CSS3',
    component: Css3Icon,
    logoClasses: 'text-[#1572B6]',
  },
  {
    title: 'JavaScript',
    component: JavaScriptIcon,
    logoClasses: 'text-[#d8aa00] dark:text-[#F7DF1E]',
  },
  {
    title: 'TypeScript',
    component: TypeScriptIcon,
    logoClasses: 'text-[#3178C6]',
  },
  {
    title: 'Vue.js',
    component: VueDotjsIcon,
    logoClasses: 'text-[#1c9112] dark:text-[#42B883]',
  },
  {
    title: 'React',
    component: ReactIcon,
    logoClasses: 'text-[#3178C6] dark:text-[#61DAFB]',
  },
  {
    title: 'Tailwind CSS',
    component: TailwindCssIcon,
    logoClasses: 'text-[#06B6D4]',
  },
  {
    title: 'NestJS',
    component: NestJsIcon,
    logoClasses: 'text-[#E0234E]',
  },
  {
    title: 'PostgreSQL',
    component: PostgreSqlIcon,
    logoClasses: 'text-[#336791]',
  },
];

export const PROJECTS = [
  {
    url: 'https://to-do-list-gules-three-33.vercel.app/',
    name: 'Todo List',
    description: `
        Aplicativo de gerenciamento de tarefas feito em React, Vite e TypeScript
      `,
    image: 'todo-thumb.png',
    mobileImage: 'todo-thumb-2.png',
    imageWrapperClasses: 'bg-[#1E6F9F]',
    imageClasses: 'border-[#1E6F9F]',
    brandColor: '#1E6F9F',
  },
];
