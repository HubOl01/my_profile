import web_icon from "../assets/images/web.png";
import vk from "../assets/images/vk.png";
import github from "../assets/images/GitHub.png";
import telegram from "../assets/images/telegram.png";

export interface IWeb {
  title: string;
  href: string;
  alt: string;
  src: string;
}

export const websites: IWeb[] = [
  {
    title: "Email",
    href: "mailto:ru-developer@mail.ru?subject=Вопрос от подписчика",
    alt: "Email",
    src: web_icon,
  },
  {
    title: "VK",
    href: "https://vk.com/oleg01f",
    alt: "VK",
    src: vk,
  },
  {
    title: "Telegram",
    href: "https://t.me/foward01",
    alt: "Telegram",
    src: telegram,
  },
  {
    title: "GitHub",
    href: "https://github.com/HubOl01",
    alt: "GitHub",
    src: github,
  }
];

// <a href="https://vk.com/oleg01f" title="Vk">
// <img
//   className="img-icon"
//   alt="Vk"
//   src={vk}
//   width={20}
// />
// </a>
