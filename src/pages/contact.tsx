import { Inter } from '@next/font/google'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import DarkLayout from '../components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {  
  return (

    <>
      <h1 className="link">CONTACT PAGE</h1>
        <h1 className='link'>
           Ir a {' '}
        <Link   href="/about">
          ABOUT
        </Link>
        </h1>
        
    </>
  )
}

ContactPage.getLayout = function getLayout( page:JSX.Element[] ) {
  const styles = {
    backgroundColor:'#77dd77',width:'100%'
  }
  return (
    <MainLayout styles={styles}>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}