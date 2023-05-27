import './assets/css/App.css'
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
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
            <Contact />
        </div>
    )
}

export default App;