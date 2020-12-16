import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Manage from './pages/manage/index';
import axios from 'axios';
function App() {
  const [add, setAdd] = React.useState([]);
  React.useEffect(async () => {
    await axios
    .get('http://localhost:3000/database.json')
    .then((call) => call)
    .then(({ data }) => setAdd(data.users));
  }, []);
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Manage database={add}/>
    </div>
  );
}

export default App;
