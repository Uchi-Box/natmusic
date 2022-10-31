import { BrowserRouter } from 'react-router-dom'
import Content from './components/content'
import { Provider } from 'react-redux'
import store from './store'
import Player from './views/player'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-black relative">
          <Content />
          <Player />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
