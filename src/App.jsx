import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [page, setPage] = useState('home');

  return (
    <Layout selectedPage={page} onSetPage={setPage}>
      {page === 'home' && <HomePage />}
      {page === 'projects' && <ProjectsPage />}
      {page === 'about' && <AboutPage />}
    </Layout>
  );
}

export default App;