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
enum Platforms{
  Android = "Android",
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
    url_stores: [],
    url_sources: [""],
    creator: "ru-developer",
    fullStack: ["Flutter", "SQFlite"],
    platforms: [],
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
    url_stores: [],
    url_sources: [],
    creator: "ru-developer",
    fullStack: [],
    platforms: [],
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
    fullStack: [],
    platforms: [],
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
    fullStack: [],
    platforms: [],
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
    fullStack: [],
    platforms: [],
    color: "",
  },
  {
    title: "Bellisemo",
    description: ["Student project for study databases"],
    url_icon: "",
    url_images: [],
    url_stores: [],
    url_sources: [],
    creator: "Student project",
    fullStack: [],
    platforms: [],
    color: "",
  },
  {
    title: "Weather",
    description: ["Student project for study kotlin jetpack compose"],
    url_icon: "",
    url_images: [],
    url_stores: [],
    url_sources: [],
    creator: "ru-developer",
    fullStack: ["Kotlin", "Jetpack Compose", "Retrofit"],
    platforms: [],
    color: "",
  },
  {
    title: "My portfolio",
    description: ["Вебсайт для показа своих проектов, которые мы видим здесь"],
    url_icon: "",
    url_images: [],
    url_stores: [],
    url_sources: [],
    creator: "ru-developer",
    fullStack: ["React", "Vite", "Typescript", "Scss"],
    platforms: [],
    color: "",
  },
];