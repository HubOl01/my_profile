import './LeftBar.style.scss'
import about from '../../assets/images/About.jpg'
import isuct from '../../assets/images/isuct.png'
import web from '../../assets/images/web.png'
import vk from '../../assets/images/vk.png'
import github from '../../assets/images/GitHub.png'

const LeftBar = () => {
  return (
    <>
      <div>
        <a title="Куличков Олег" href="https://vk.com/oleg01f">
          <img
            alt="about"
            src={about}
            // width={400}

            // backgroundSize: 'contain'
            style={{
              borderRadius: '30px',
              display: 'flex',
            // position: "absolute",
              // position: "absolute",
              // left: 0,
              // top: 0,
              width: "100%", //auto
              // maxWidth:"100%"
              // objectFit: "scale-down"
              // backgroundSize: 'contain',
              // backgroundRepeat: 'no-repeat'
            }}
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
              src={isuct}
              width={20}
            // data-holder-rendered="true"
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
            "justifyContent": "center"
          }}>
            <div className="web1">
              <a
                href="mailto:kuloleg54@gmail.com?subject=Вопрос от подписчика"
                title="Email"
              >
                <img
                  className="img-icon"
                  alt="Email"
                  src={web}
                  width={40}
                />
              </a>
            </div>
            <div className="web2">
              <a href="https://vk.com/oleg01f" title="Vk">
                <img
                  className="img-icon"
                  alt="Vk"
                  src={vk}
                  width={20}
                />
              </a>
            </div>
            <div className="web3">
              <a href="https://github.com/HubOl01" title="GitHub">
                <img
                  className="img-icon"
                  alt="GitHub"
                  src={github}
                  width={20}
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