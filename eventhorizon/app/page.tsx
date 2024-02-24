import Head from 'next/head'
import Image from "next/image";
import Script from 'next/script'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
           {/*  <Script src="/sc.js"  strategy="lazyOnload"></Script>  */}

      <nav className='mainnav'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>

      <h1>Event Horizon</h1>
    
      <p>Where imagination meets organization</p>

      <div className="blogs">
        <h2>Popular Event</h2>
        <div className="blogItem">
          <h3>How to organize perfect event?</h3>
            <p>Check the services page of our website for better idea!</p>
        </div>
        <div className="blogItem">
          <h3>How to organize perfect event?</h3>
            <p>Check the services page of our website for better idea!</p>
        </div>
        <div className="blogItem">
          <h3>How to organize perfect event?</h3>
            <p>Check the services page of our website for better idea!</p>
        </div>
      </div>

      
    </main>
  );
  }