import * as React from 'react'
import './App.css'
import useAsync from 'react-use/esm/useAsync'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import api from './Api'
import Home from './Home'

interface AppProps {}

function App({}: AppProps) {
  console.log('nice')
  const state: any = useAsync(async () => {
    // const response = await fetch(url);
    // const result = await response.text();
    await api.fetchMostStarredJavascript()
    await api.fetchMostPullRequest()
    await api.fetchPopularJavascript()
    let result = await api.fetchPopular()
    return result
  }, [])
  return (
    <div className="App">
      {state.loading ? (
        <div>loading...</div>
      ) : state.error ? (
        <div>Error: {state.error.message}</div>
      ) : (
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      )}
    </div>
  )
}

export default App
