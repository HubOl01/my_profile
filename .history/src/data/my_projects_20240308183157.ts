export interface IProjects {
  title: string;
  description: string[];
  url_icon: string;
  url_images: string[];
  url_stores: string[];
  url_sources: string[];
  creator: string;
  fullStack: string[];
  platforms: string[];
  color: string;
}
export const nickname = "ru-developer"
export enum Platforms {
  Android = "Android",
  IOS = "IOS",
  Windows = "Windows",
  Linux = "Linux",
  Web = "Web",
}
enum Colors {
  Red = "",
  White = "",
  Black = "",
  Green = "",
}
export enum FullStack{
  Flutter = "Flutter",
  Dart = "Dart",
  Kotlin = "Kotlin",
  Jetpack_Compose = "Jetpack Compose",
  Winforms = "Winforms",
  C_sharp = "C#",
  React = "React",
  Typescript = "Typescript",
  Retrofit = "Retrofit",
  PHP = "PHP",
  SQLite = "SQLite",
  MySQL = "MySQL",
  PostgreSQL = "PostgreSQL",
  Git = "Git",

}

export const projects: IProjects[] = [
  {
    title: "My Songbook",
    description: [
      "My Songbook – это творческая мастерская в вашем кармане. Независимо от того, являетесь ли вы гитаристом, певцом, композитором или просто энтузиастом музыки, это приложение поможет вам воплотить ваши музыкальные идеи в жизнь.",
      "\n",
      "Основные возможности:",
      "\n",
      "- Записывайте и редактируйте песни: Создавайте музыку в любое время, в любом месте. Записывайте мелодии, добавляйте тексты и настраивайте аранжировки – все это в вашем распоряжении.",
      "- Справочник аккордов для гитары: Независимо от вашего уровня мастерства, наше приложение предлагает обширный справочник аккордов для гитары. Найдите нужный аккорд и создайте свой собственный уникальный звук.",
      "- Автоскролл и легкая навигация: Никогда больше не теряйтесь в тексте. Функция автоскролла позволяет вам сконцентрироваться на музыке, а не на прокрутке текста.",
      "- Делитесь своей музыкой: Поделитесь своими произведениями с миром через социальные сети непосредственно из приложения. Позвольте всем услышать вашу творческую энергию.",
      "- Аудиофайлы с песнями: Сохраняйте свои композиции в виде аудиофайлов. Прослушивайте их в любое время или отправляйте друзьям и коллегам.",
      "\n",
      "Почему выбрать My Songbook?",
      "\n",
      "- Простота и удобство: Даже если вы начинающий музыкант, вы сможете создавать профессиональные композиции с легкостью.",
      "- Безопасное хранение ваших произведений: Ваши записи остаются конфиденциальными. Спокойно работайте над своими идеями, зная, что они в безопасности.",
      "\n",
      "Неважно, вы начинающий музыкант или профессионал, My Songbook поможет вам создать и поделиться музыкой, которая касается сердец. Начните свое музыкальное путешествие сегодня!",
    ],
    url_icon: "",
    url_images: [],
    url_stores: ["https://apps.rustore.ru/app/ru.ru_developer.my_songbook", "https://appgallery.huawei.com/app/C109087129", "https://global.app.mi.com/details?lo=RU&la=en_US&id=ru.ru_developer.my_songbook.mi"],
    url_sources: ["https://github.com/HubOl01/my_songbook"],
    creator: nickname,
    fullStack: [FullStack.Flutter, FullStack.Dart],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    title: "Мой универ - ИГХТУ",
    description: [
      '"Мой универ - ИГХТУ" - это мобильное приложение, специально разработанное для студентов Ивановского государственного химико-технологического университета. Вы теперь сможете посмотреть расписание пар даже без интернета! Также можно получать уведомления об информации пар каждый день. В приложении также доступны заметки и вы можете записывать лекции, делать пометки, прикреплять ссылки и также делиться ими.',
      "\n",
      "Основные функции приложения:",
      "\n",
      "- Календарь с расписанием пар на текущий день",
      "- Расписание лекций, практик и семинаров",
      "- Новости ВУЗа",
      "- Вход в moodle ИГХТУ",
      "- Расписание преподавателей, сессий",
      "- Поисковик",
      "- Заметки, конспекты",
      "- Уведомления об информации пар на каждый день",
      "\n",
      "Также приложение адаптировано под планшеты      ",
    ],
    url_icon: "",
    url_images: [],
    url_stores: ["https://apps.rustore.ru/app/ru.ru_developer.my_university_isuct"],
    url_sources: ["https://github.com/HubOl01/my_university_isuct"],
    creator: nickname,
    fullStack: [FullStack.Flutter, FullStack.Dart, FullStack.PHP],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    title: "MyAppHome",
    description: ["Приложение для многоквартирных домов"],
    url_icon: "",
    url_images: [],
    url_stores: [],
    url_sources: [],
    creator: "Создано вместе с командой OVERLAGO",
    fullStack: [FullStack.Flutter, FullStack.Dart],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    title: "City Adventures",
    description: [],
    url_icon: "",
    url_images: [],
    url_stores: [],
    url_sources: [],
    creator: "Создано с командой на хакатоне",
    fullStack: [FullStack.Flutter, FullStack.Dart],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    title: "Bellisemo",
    description: ["Student project for study architectural technologies"],
    url_icon: "",
    url_images: [],
    url_stores: [],
    url_sources: [],
    creator: "Student project",
    fullStack: [FullStack.React, FullStack.Typescript],
    platforms: [Platforms.Web],
    color: "",
  },
  {
    title: "Weather",
    description: ["Student project for study kotlin jetpack compose"],
    url_icon: "",
    url_images: [],
    url_stores: [],
    url_sources: [],
    creator: nickname,
    fullStack: [FullStack.Jetpack_Compose, FullStack.Kotlin, FullStack.Retrofit],
    platforms: [Platforms.Android],
    color: "",
  },
  {
    title: "My portfolio",
    description: ["Вебсайт для показа своих проектов, которые мы видим здесь"],
    url_icon: "",
    url_images: [],
    url_stores: [],
    url_sources: [],
    creator: nickname,
    fullStack: [FullStack.React, FullStack.Typescript],
    platforms: [Platforms.Web],
    color: "",
  },
];