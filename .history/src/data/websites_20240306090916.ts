import web_icon from '../../assets/images/web.png'
import vk from '../../assets/images/vk.png'
import github from '../../assets/images/GitHub.png'
interface Web {
title: string;
  href: string;
  alt: string?;
  src: string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const websites: Web[] = [{
    title: "Email",
    href: "mailto:ru-developer@mail.ru?subject=Вопрос от подписчика",
    alt: "Email",
    src: web_icon
},
{
    title: "",
    href: "",
    alt: "",
    src: vk
},
{
    title: "",
    href: "",
    alt: "",
    src: github
}]
// <a href="https://vk.com/oleg01f" title="Vk">
// <img
//   className="img-icon"
//   alt="Vk"
//   src={vk}
//   width={20}
// />
// </a>
