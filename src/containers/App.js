import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import axios from 'axios'
import 'tachyons'
import './app.css'

function App() {

  const [searchText, setSearchText] = useState('')
  const [robotData, setRobotData] = useState([])

  const onSearch = (event) => {
    setSearchText(event)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      setRobotData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="tc">
    <h1 className='f1'>RoboFriends</h1>
      <SearchBox 
        onSearch={onSearch}
      />
      <Scroll>
        <ErrorBoundary>
          {robotData.length === 0 ? <h1>Loading...</h1> : 
              <CardList 
              data={
                robotData.filter((robot) => 
                robot.name.toLowerCase().includes(searchText.toLowerCase()) || 
                robot.username.toLowerCase().includes(searchText.toLowerCase()) || 
                robot.email.toLowerCase().includes(searchText.toLowerCase()))
              }
              searchText={searchText}
            />
          }
        </ErrorBoundary> 
      </Scroll>
    </div>
  );
}

export default App;
