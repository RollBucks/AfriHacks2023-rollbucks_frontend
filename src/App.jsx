import { Nav } from "./components/global/nav"
import grid from './assets/grid.svg'
import down from './assets/icons/down.svg'
import hero from './assets/images/heroImage.png'
import channel from './assets/icons/channel.svg'
import './App.css'
import { Link } from "react-router-dom"
import { useState } from "react"

const App = () => {
  const [channelColor, setChannelColor] = useState('currentColor')

  const handleChannelMouseEnter = () => {
    setChannelColor(
      <linearGradient id="gradient" x1="31.9977" y1="0" x2="31.9977" y2="64" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B2C2EC" offset="0%" />
        <stop offset="0.489583" stop-color="#F3D0BB" />
        <stop offset="1" stop-color="#FFDB63" />
      </linearGradient>
    )
  }

  const handleChannelMouseLeave = () => {
    setChannelColor('currentColor')
  }

  return (
    <section className="bg-white-400 font-body w-screen text-black-400">
      <Nav />
      <section className="w-full min-h-screen h-fit pt-[100px] px-[32px] flex justify-between items-center border-b-[1px] border-[#DDDDDD]"
        style={{
          backgroundImage: `url(${grid})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#EAEAEA',
        }}
      >
        <div className="space-y-[48px]">
          <h1 className="text-6xl font-bold">Seamless Payments, <br /> Global Exposure</h1>
          <p className="font-light text-2xl">We have redefined payments for remote <br /> workers, ensuring a seamless path to <br /> international success.</p>
          <div className="space-x-[18px]">
            <Link to="register" className="font-bold font-body text-white-400 rounded-xl py-4 px-3 text-sm bg-black-400 hover:bg-yellow hover:text-black-400">Get Started</Link>
            <a href="/#features" className="font-light text-black-400 text-lg hover:underline">Our Features ↘</a>
          </div>
        </div>

        <img src={hero} alt="hero image" className="" />
      </section>

      <a href="/#why" className="flex items-center w-full justify-center -mt-6 animate-bounce">
        <img src={down} alt="scroll down button" />
      </a>

      <section id="#why" className="w-full min-h-screen  pt-[200px] px-[32px] space-y-[84px]">
        <h1 className="text-6xl font-bold text-center">Crossing Borders – The <br /> Why of RollBucks.</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-blue overflow-hidden flex flex-col justify-between h-[250px] rounded-[18px] py-[21px] px-[26px] relative group">
            <h1 className="text-3xl font-bold text-right">Empowering <br /> the Workforce</h1>
            <p className="text-sm z-[5] font-light text-right">RollBucks empowers Africa's young workforce, <br /> ensuring seamless and prompt payments for their <br /> contributions to the global economy.</p>
            <span className="absolute z-[2] bottom-[-100px] left-10 font-display font-bold text-white-400 text-[171px] group-hover:bottom-0 transition-all duration-300 ease-in-out">01</span>
          </div>
          <div className="bg-yellow overflow-hidden flex flex-col justify-between h-[250px] rounded-[18px] py-[21px] px-[26px] relative group">
            <h1 className="text-3xl font-bold text-right">Financial <br />Inclusion</h1>
            <p className="text-sm z-[5] font-light text-right">RollBucks ensures financial inclusion for African <br /> remote workers by enabling quick and efficient <br /> payments in local currencies.</p>
            <span className="absolute z-[2] bottom-[-100px] left-10 font-display font-bold text-white-400 text-[171px] group-hover:bottom-0 transition-all duration-300 ease-in-out">02</span>
          </div>
          <div className="bg-black-400 text-blue overflow-hidden flex flex-col justify-between h-[250px] rounded-[18px] py-[21px] px-[26px] relative group">
            <h1 className="text-3xl font-bold text-right">International <br /> Visibility</h1>
            <p className="text-sm z-[5] font-light text-right">RollBucks streamlines the showcase of Africa's <br />young talent to global recruiters, connecting skilled <br />workers with eager employers on a global scale <br /> effortlessly.</p>
            <span className="absolute z-[2] bottom-[-100px] left-10 font-display font-bold text-white-400 text-[171px] group-hover:bottom-0 transition-all duration-300 ease-in-out">03</span>
          </div>
          <div className="bg-pink overflow-hidden flex flex-col justify-between h-[250px] rounded-[18px] py-[21px] px-[26px] relative group">
            <h1 className="text-3xl font-bold text-right">Strengthening <br /> Economic Growth</h1>
            <p className="text-sm z-[5] font-light text-right">RollBucks streamlines payments to boost <br /> economic growth in Africa, enhancing worker <br /> livelihoods and overall regional development.</p>
            <span className="absolute z-[2] bottom-[-100px] left-10 font-display font-bold text-white-400 text-[171px] group-hover:bottom-0 transition-all duration-300 ease-in-out">04</span>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen pt-[200px] px-[32px] space-y-[84px] flex flex-col lg:flex-row gap-[80px] items-center">
        <div className="space-y-8">
          <h1 className="text-6xl font-bold text-left">Key Features <br /> Empowering You</h1>
          <p className="font-light">Discover what sets rollbucks apart and <br /> Unlock it’s essence with our special <br /> features. Dive into the heart of innovation <br /> for a seamless and secure experience.</p>
          <Link to="register" className="font-bold block w-fit font-body text-white-400 rounded-xl py-4 px-3 text-sm bg-black-400 hover:bg-yellow hover:text-black-400">Get Started</Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div onMouseEnter={handleChannelMouseEnter} onMouseLeave={handleChannelMouseLeave} className="flex flex-col items-center gap-8 bg-white-500 text-white-600 hover:bg-black-400 p-[20px] rounded-[18px] h-[250px]">
            <p className="text-sm font-light">Multi-Channel Payment Optionss</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className="transition-all duration-300 ease-in-out">
              <path
                fill-rule="evenodd" clip-rule="evenodd"
                d="M31.3371 7.99995H46.8571C50.247 7.9952 53.5185 9.2461 56.0404 11.5113C58.5624 13.7765 60.1561 16.8954 60.5139 20.2663C60.8718 23.6373 59.9686 27.0213 57.9785 29.7655C55.9883 32.5098 53.0524 34.4197 49.7371 35.1268C49.1061 36.8664 47.9621 38.3735 46.4564 39.449C44.9506 40.5246 43.1539 41.1179 41.3037 41.1506C39.4536 41.1833 37.637 40.6538 36.0942 39.6322C34.5514 38.6105 33.3549 37.1447 32.6628 35.4285H17.1428C15.5483 35.4268 14.0029 35.9808 12.7727 36.9953C11.5425 38.0098 10.7043 39.4213 10.4023 40.987C10.1003 42.5527 10.3534 44.1747 11.1181 45.5739C11.8827 46.9732 13.1111 48.0622 14.592 48.6537C15.3517 47.0467 16.5635 45.696 18.0789 44.767C19.5943 43.8379 21.3477 43.3708 23.1245 43.4227C24.9013 43.4746 26.6244 44.0433 28.083 45.0592C29.5416 46.0751 30.6724 47.4942 31.3371 49.1428H50.7794C50.6215 48.5667 50.4384 47.9978 50.2308 47.4377C50.0256 46.8963 49.9621 46.3116 50.046 45.7388C50.13 45.166 50.3589 44.6242 50.7108 44.1645C51.1288 43.6258 51.7161 43.2436 52.3779 43.0794C53.0397 42.9152 53.7375 42.9786 54.3588 43.2594C56.0365 43.9908 57.6137 45.312 58.8571 46.8159C60.1097 48.3337 61.1565 50.1988 61.6457 52.1554C61.7363 52.5186 61.7363 52.8985 61.6457 53.2617C61.1173 55.2238 60.1654 57.0463 58.8571 58.6011C57.6137 60.1097 56.0365 61.4308 54.3588 62.1577C53.7379 62.4389 53.0405 62.5031 52.3787 62.3397C51.717 62.1763 51.1295 61.795 50.7108 61.2571C50.3589 60.7975 50.13 60.2556 50.046 59.6828C49.9621 59.11 50.0256 58.5253 50.2308 57.9839C50.4727 57.334 50.6802 56.6717 50.8525 56H31.3325C30.6397 57.7146 29.4431 59.1789 27.9008 60.1994C26.3586 61.2199 24.543 61.7488 22.694 61.7161C20.8449 61.6834 19.0492 61.0907 17.5439 60.0163C16.0387 58.9419 14.8946 57.4363 14.2628 55.6982C10.9475 54.9911 8.01157 53.0812 6.02146 50.337C4.03134 47.5927 3.12809 44.2087 3.48598 40.8378C3.84386 37.4668 5.43752 34.3479 7.95947 32.0827C10.4814 29.8175 13.7529 28.5666 17.1428 28.5714H32.6628C33.3275 26.9228 34.4583 25.5037 35.9169 24.4878C37.3755 23.4719 39.0987 22.9032 40.8754 22.8513C42.6522 22.7994 44.4056 23.2665 45.921 24.1956C47.4364 25.1246 48.6482 26.4753 49.408 28.0822C50.8839 27.4868 52.1071 26.3968 52.8679 24.9989C53.6287 23.601 53.8799 21.982 53.5785 20.4193C53.277 18.8565 52.4417 17.4471 51.2156 16.4324C49.9894 15.4177 48.4487 14.8608 46.8571 14.8571H31.3371C30.6555 16.5481 29.484 17.9967 27.9729 19.0169C26.4619 20.037 24.6803 20.5821 22.8571 20.5821C21.0339 20.5821 19.2523 20.037 17.7413 19.0169C16.2302 17.9967 15.0587 16.5481 14.3771 14.8571H6.8571C5.94779 14.8571 5.07572 14.4959 4.43273 13.8529C3.78975 13.2099 3.42853 12.3378 3.42853 11.4285C3.42853 10.5192 3.78975 9.64714 4.43273 9.00415C5.07572 8.36117 5.94779 7.99995 6.8571 7.99995H14.3771C15.0587 6.30893 16.2302 4.8603 17.7413 3.84015C19.2523 2.81999 21.0339 2.2749 22.8571 2.2749C24.6803 2.2749 26.4619 2.81999 27.9729 3.84015C29.484 4.8603 30.6555 6.30893 31.3371 7.99995Z"
                fill={channelColor != 'currentColor' ? 'url(#gradient)' : 'currentColor'}
              />
              <defs>
                {channelColor}
              </defs>
            </svg>
            <p className="text-sm font-light text-center">Flexible payment options, <br /> including mobile money, bank transfers, <br /> and digital wallets.</p>
          </div>

        </div>
      </section >
    </section >
  )
}

export default App;