import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './main'

export const Routing = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </>
)
