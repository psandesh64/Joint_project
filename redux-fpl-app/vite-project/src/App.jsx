import './App.css'
import Layout from './components/Layout'
import PlayerListView from './features/bootstrap/PlayerListView'
import  { FixtureView } from './features/fixtures/FixtureView'
import Home from './features/home/Home'
import { ManagerView } from './features/manager/ManagerView'
import PlayerStatsView from './features/player/PlayerStatsView'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>          
          <Route path="/gameweeklive" element={<FixtureView/>}/>
          <Route path="/fixtures" element={<FixtureView/>}/>
          <Route path="/manager" element={<ManagerView/>}/>
          <Route path="/stats" element={<PlayerListView/>}/>
          <Route path="/standings" element={<FixtureView/>}/>
          <Route path="/league" element={<FixtureView/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
