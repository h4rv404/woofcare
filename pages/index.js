
import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-beige min-h-screen text-brown font-sans">
      <Head>
        <title>WoofCare</title>
      </Head>
      <main className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">WoofCare 🐾</h1>
        <p className="text-xl italic">"Because every woof matters."</p>
        <p className="mt-6 max-w-xl text-center">
          WoofCare is a kindness initiative to feed and care for street dogs — not for the gram, but for the good. 
          Join us in making every street a little kinder.
        </p>
      </main>
    </div>
  )
}
