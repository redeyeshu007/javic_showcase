import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Preloader from './components/layout/Preloader';

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <AppRoutes />
    </BrowserRouter>
  );
}
