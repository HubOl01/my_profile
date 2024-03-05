import './App.css'

function App() {

  return (
    <div className="App">
    <header>
      <div>
        <h1>About myself</h1>
      </div>
    </header>
    <LeftBar></LeftBar>
    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <a href="#">Вернуться к началу</a>
        </p>
        <p className="footer-text">© ru-developer, 2022-{(new Date()).getFullYear()}. Все права защищены.</p>
      </div>
    </footer>

  </div>
  )
}

export default App
