import './App.css'
import NavBar from './component/NavBar/NavBar'
import Design from './component/Design/Design'
import SideBar from './component/SideBar/SideBar'
import { useEffect, useState } from 'react'

function App() {

  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setLoadData(data))
  }, []);


    

  return (
    <div className="App">
      <div className="main max-w-7xl mx-auto ">
        <div className="nav mt-12 mb-8 ">
          <NavBar></NavBar>
        </div>
        <div className="body  grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="design  col-span-2">
            {
              loadData.map(dataLoads => (<Design
                dataLoads={dataLoads}
                key={dataLoads.AuthorName}
              ></Design>))
            }
          </div>
          <div className="sideBar col-span-1">
            <SideBar ></SideBar>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
