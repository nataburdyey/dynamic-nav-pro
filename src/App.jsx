import { useGlobalContext } from './Context';
import Hero from './Hero';
import Navbar from './Navbar';
import Submenu from './Submenu';
import Sidebar from './Sidebar';

const App = () => {
  const { isSidebarOpen } = useGlobalContext();

  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
