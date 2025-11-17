// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Ages from './pages/Ages'
import Project from './pages/Project'
import HomeHeroText from './assets/componenets/Home/HomeHeroText'

const App = () => {
  return (
    <div>
      {/* <Link to='/' className='mr-2'>Home</Link>
      <Link to='/Project' className='mr-2'>Project</Link>
      <Link to='/Ages' className='mr-2'>Ages</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ages" element={<Ages />} />
        <Route path="/Project" element={<Project />} />

      </Routes>
    </div>
  )
}

export default App
