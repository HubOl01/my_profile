import { FullStack } from "./my_projects";

export interface ISkill {
  name: string;
  progress?: number;
}

export const my_skills: ISkill[] = [
    {
        name: FullStack.Dart,
        progress: 1
    },
    {
        name: FullStack.Flutter,
        progress: .8
    },
    {
        name: FullStack.Kotlin,
        progress: .8
    },
    {
        name: FullStack.Jetpack_Compose,
        progress: .5
    },
    {
        name: FullStack.C_sharp,
        progress: .8
    },
    {
        name: FullStack.SQL,
        progress: .9
    },
    {
        name: FullStack.Winforms,
    },
    {
        name: FullStack.React,
    },
    {
        name: FullStack.Typescript,
    },
    {
        name: FullStack.Retrofit,
    },
    {
        name: FullStack.PHP,
    },
    {
        name: FullStack.SQLite,
    },
    
    {
        name: FullStack.MySQL,
    },
    {
        name: FullStack.PostgreSQL,
    },
    {
        name: FullStack.Git,
    },
    {
        name: FullStack.HTML,
    },
    {
        name: FullStack.CSS,
    },
    {
        name: FullStack.SCSS,
    },
    {
        name: FullStack.Vite,
    }
];
