import Header from '@/components/Navigation/Header'
import { MainNavLinks } from '@/constants/main-nav-link'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header navLinks={MainNavLinks} />
      {children}
    </main>
  )
}

export default MainLayout
