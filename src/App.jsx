import './assets/css/App.css'
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Header } from './components/Header/Header'
import { Project } from './components/Project/Project';

function App() {
    return (
        <div className='app'>
            <Header />
            <Project />
            <Experience />
            <About />
        </div>
    )
}

export default App;