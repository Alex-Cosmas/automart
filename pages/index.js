import Head from 'next/head'
import Image from 'next/image'
import Header from '/components/global/Header'
import CardWrapper from '../components/shared/CardWrapper'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Drive Mart: One Stop shop for all your auto needs: Deals,
          Parts,Mechanics
        </title>
        <meta
          name='description'
          content='One Stop shop for all your auto needs: "Deals,Parts,Mechanics"'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header />

        <div className='container px-24 mx-auto'>
          <div className='flex flex-col mainListingContainer'>
            <div className='py-4 text-sm'>
              {` Used Automotive Vehicles for Sale > Quick Sale > Nairobi`}
            </div>

            <div className='resultsWrapper'>
              <h3>
                31 Ads for <strong> {` "Quick Sale"`}</strong> in
                <strong>{` "Nairobi"`}</strong>
              </h3>
            </div>

            <div className='grid grid-cols-4'>
              {/* Card Wrapper */}
              <CardWrapper />
            </div>
          </div>
        </div>
      </main>

      {/* <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span classNameName={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
