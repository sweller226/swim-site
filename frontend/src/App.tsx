import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Lessons from './pages/Lessons';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
