import { FullStack } from "./my_projects";

interface ISkill{
    name: string;
    progress: number;
}

export const my_skills: ISkill[] = [
    {
        name: FullStack.Flutter,
        progress: .80
    },
    {
        name: FullStack.Dart,
        progress: 1
    },
    {
        name: FullStack.Kotlin,
        progress: .6
    },
    {
        name: FullStack.Jetpack_Compose,
        progress: .6
    },
    {
        name: FullStack.SQLite,
        progress: 1
    },
    {
        name: FullStack.C_sharp,
        progress: .8
    }
]