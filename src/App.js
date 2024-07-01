import logo from './logo.svg';
import './App.css';
import { getPrincipalRequest } from './apis/api/principal';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import { useQuery } from 'react-query';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import ShoppingRoute from './routes/ShoppingRoute';

function App() {

  const principalQuery = useQuery(
    ["principalQuery"],
    getPrincipalRequest,
    {
        retry: 0,
        refetchOnWindowFocus: false
    }
  );
  return (
    <>
      <Layout>
        <Header />
        <ShoppingRoute />
        <Footer />

          
      </Layout>
    </>
  );
}

export default App;
