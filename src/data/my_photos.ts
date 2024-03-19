import photo1 from '../assets/images/gallery/0XzF3hmev3s.jpg';
import photo2 from '../assets/images/gallery/KBRyssWlQ1c.jpg';
import photo3 from '../assets/images/gallery/NqWxpAUwDLo.jpg';
import photo4 from '../assets/images/gallery/Uf4oqy85nUc.jpg';
import photo5 from '../assets/images/gallery/_plPkL2aLLg.jpg';
import photo6 from '../assets/images/gallery/fJ2emLcCC0k.jpg';
import photo7 from '../assets/images/gallery/publicpreview.jpg';
import photo8 from '../assets/images/gallery/IMG_20230414_213036_559.jpg';







export interface IPhoto{
    src: string,
    alt?: string,
    description?: string[],
    // date?: string
}

export const photos: IPhoto[] = [
{
    src: photo1
},
{
    src: photo2,
    description: [
"Инноваторы и креативные мыслители, соединяйтесь! 💡",
"",
"13 сентября в Штабе общественной поддержки в Ивановской области наградили призеров и участников Международной олимпиада в сфере информационных технологий.",
"",
"🥈🏆 За проделанную работу и получение достойного 2-го места в олимпиаде Депутат Государственной Думы РФ Кизеев Михаил Владимирович вручил благодарственные письма и подарки команде нашей кафедры, в состав которой вошли: Алёна Самсонова, Игорь Амелин, Олег Куличков и Егор Крюков.",
"",
"👏 Благодарность за помощь в создании проекта также получили преподаватели кафедры и научные руководители проекта - доцент Константинов Евгений Сергеевич и ассистент Суворов Иван Александрович.",
"",
"А мы напоминаем, 15 сентября мы запустили Форум инновационных проектов \"Цифровая креативная индустрия\", в рамках которого участников ждут увлекательные конкурсы с ценными призами, а также интересные и полезные мастер-классы от наших партнеров.",
"",
"👨‍💻👩‍💻😎 Не упустите свой шанс быть в курсе последних новостей и тенденций в IT-сфере и цифровой экономики! Ждем всех инноваторов и креативных мыслителей на нашем Форуме! Мы уверены, что это событие станет для вас источником новых идей и вдохновения!",
    ]
},
{
    src: photo3
},
{
    src: photo4
},
{
    src: photo5
},
{
    src: photo6
},
{
    src: photo7
},
{
    src: photo8
},
]