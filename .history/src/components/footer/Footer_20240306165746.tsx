import React from 'react'

export default function Footer() {
  return (
    <footer className="text-muted" >
      <div className="container">
        <p className="float-right">
          <a href="#">Вернуться к началу</a>
        </p>
        <p className="footer-text">© ru-developer, 2022-{(new Date()).getFullYear()}. Все права защищены.</p>
      </div>
    </footer>
  )
}
