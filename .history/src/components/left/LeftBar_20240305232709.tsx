import './LeftBar.style.scss'
import about from '../../assets/images/About.jpg'

const LeftBar = () => {
  return (
    <>
    <div>
      <a title="Куличков Олег" href="https://vk.com/oleg01f">
        <img
          alt="about"
          src={about}
          width={400}
          data-holder-rendered="true"
        />
      </a>
      <div>
        <p>
          <b>Куличков Олег Павлович</b>
        </p>
        <p>
          <span >День рождения:</span> 8 декабря 2002
        </p>
        <p>
          <span className="text-format">Город:</span> Иваново
        </p>
        <p>
          Студент ИГХТУ
          <img
            className="isuct"
            alt="ISUCT"
            src="https://forms.isuct.ru/media/images/emblem.png"
          />
        </p>
        <p>
          <span className="text-format">Факультет:</span> Факультет техники,
          управления и цифровой инфраструктуры
        </p>
        <p>
          <span className="text-format">Специальность:</span> Информационные
          системы и технологии
        </p>
        <p style={{
            "textAlign": "center"
          }}>
          <span className="text-format" >Социальные сети</span>
        </p>
        <div className="websites" style={{
            "textAlign": "center",
            "display": "inline-flex",
            "padding": "10px",
            "justify-content": "center"
          }}>
          <div className="web1">
            <a
              href="mailto:kuloleg54@gmail.com?subject=Вопрос от подписчика"
              title="Email"
            >
              <img
                className="img-icon"
                alt="Email"
                src="https://cdn-icons-png.flaticon.com/512/2301/2301129.png"
              />
            </a>
          </div>
          <div className="web2">
            <a href="https://vk.com/oleg01f" title="Vk">
              <img
                className="img-icon"
                alt="Vk"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VK_Compact_Logo.svg/1024px-VK_Compact_Logo.svg.png"
              />
            </a>
          </div>
          <div className="web3">
            <a href="https://github.com/HubOl01" title="GitHub">
              <img
                className="img-icon"
                alt="GitHub"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FGitHub_logo.png&f=1&nofb=1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default LeftBar