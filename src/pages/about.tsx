import { Inter } from '@next/font/google'
import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import DarkLayout from '../components/layouts/DarkLayout'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
        <h1 className="link">ABOUT PAGE</h1>
          <h1 className='link'>
            Ir a {' '}
          <Link   href="/about">
            ABOUT
          </Link>
          </h1>
          
          <p className='parrafo'>
            Get Started by editing {' '}
            <code >pages/about.js</code>
          </p>  
    </>
  )
}

AboutPage.getLayout = function getLayout( page:JSX.Element[] ) {
  const styles = {
    backgroundColor:'#ff6961',width:'100%'
  }
  return (
    <MainLayout styles={styles}>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}