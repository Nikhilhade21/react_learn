import { useState } from 'react'
import { Footer, Header } from './components'

import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
