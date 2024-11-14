import { Route, Routes, Navigate } from 'react-router-dom'
import { Header } from '@/components/templates'
import { MainHeaderIcons, ContentHeaderIcons } from '@/components/modules'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/main' replace />} />
      <Route path='/main' element={<Header Icons={MainHeaderIcons} />}>
        <Route index element={<div />} />
        <Route path='search' element={<div />} />
      </Route>
      <Route path='/auth' element={<Header />}>
        <Route path='sign-in' element={<div />} />
        <Route path='sign-up' element={<div />} />
      </Route>
      <Route path='/content' element={<Header Icons={ContentHeaderIcons} />}>
        <Route path='write' element={<div />} />
        <Route path='detail/:mailId' element={<div />} />
        <Route path='read/:userId' element={<div />} />
      </Route>
    </Routes>
  )
}
