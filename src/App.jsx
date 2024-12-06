import React from 'react'
import Header from './components/Header'

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-16"> {/* Añade padding-top para compensar el header fijo */}
        {/* Aquí irán las demás secciones de tu portfolio */}
      </main>
    </div>
  )
}