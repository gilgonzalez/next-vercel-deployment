
import { Inter } from '@next/font/google'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import DarkLayout from '../components/layouts/DarkLayout'
import Galery from '../components/Galery'

const inter = Inter({ subsets: ['latin'] })
export default function HomePage() {
  return (
    <>
      <h1 className="link">HOME PAGE</h1>
        <h1 className='link'>
           Ir a {' '}
        <Link   href="/about">
          ABOUT
        </Link>
        </h1>
        <Galery/>
    </>
  )
}

HomePage.getLayout = function getLayout( page:JSX.Element[] ) {
  const styles = {backgroundColor:'#84b6f4'}
  return (
    <MainLayout styles={styles}>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
