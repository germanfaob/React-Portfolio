import './assets/css/App.css'
import { Header } from './components/Header/Header'
import { Project } from './components/Project/Project';

function App() {
    return (
        <div className='app'>
            <Header />
            <Project />
        </div>
    )
}

export default App;