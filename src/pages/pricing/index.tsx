
import Link from 'next/link'
import React from 'react'
import { Inter } from '@next/font/google'
import MainLayout from '../../components/layouts/MainLayout'
import DarkLayout from '../../components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })
const Pricing = () => {
  return (
    <>
      <h1 className="link">ABOUT PAGE</h1>
      <h1 className='link'>
        Ir a {' '}
        <Link href="/about">
          PRICING
        </Link>
      </h1>

      <p className='parrafo'>
        Get Started by editing {' '}
        <code >pages/about.js</code>
      </p>
    </>
  )
}

export default Pricing

Pricing.getLayout = function getLayout( page:JSX.Element[] ) {
  const styles = {backgroundColor:'#fdfd96',width:'100%'}
  return (
    <MainLayout styles={styles}>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}