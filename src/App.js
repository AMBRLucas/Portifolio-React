import './App.css';
import { Navbar } from './components/Navbar';
import { Content } from './components/Content';
import { ContentProvider } from './contexts/contentContext';

function App() {
  return (
    <div className="App">
      <ContentProvider>
        <Navbar />
        <Content />
      </ContentProvider>
    </div>
  );
}

export default App;
