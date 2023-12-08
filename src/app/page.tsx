import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-3xl font-playfair'>
        <span className='font-bold'>RollBucks</span>
        {/* <span className='font-bold'>Medium</span>-<i>rare</i> */}
        <div className='font-light text-sm italic'>Get paid <span className='italic'>effortlessly</span></div>
      </h1>
    </main>
  )
}
