import React from 'react'

export default function Footer() {
  return (
    // <footer className="text-muted" style={{
    //   "width":"100%"
    // }}>
      <div className="container">
        <p className="float-right" style={{
      "textAlign": "right"
    }}>
          <a href="#">Вернуться к началу</a>
        </p>
        <p className="footer-text"
        style={{
          "textAlign": "center"
        }}
        >© ru-developer, 2022-{(new Date()).getFullYear()}. Все права защищены.</p>
      </div>
    </footer>
  )
}
