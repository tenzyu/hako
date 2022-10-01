import { Routes, Route } from 'react-router-dom'

import { IndexPage } from './pages'

export const App = () => {
  return (
    <Routes>
      <Route path="*" element={<IndexPage />} />
    </Routes>
  )
}
