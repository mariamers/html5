import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import '/css/custom.css';
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Relatorios from './components/relatorios/Relatorios';
import Tabela from './components/tabela/Tabela';


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Header />
        <Relatorios />
        <Tabela />

      </div>
  )
}

export default App
