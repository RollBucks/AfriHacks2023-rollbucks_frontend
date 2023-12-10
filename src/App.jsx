import { Nav } from "./components/global/nav"
import grid from './assets/grid.svg'
import down from './assets/icons/down.svg'
import hero from './assets/images/heroImage.png'
import channel from './assets/icons/channel.svg'
import './App.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import { Footer } from "./components/global/footer"

const App = () => {
  const [channelColor, setChannelColor] = useState('currentColor')
  const [currencyColor, setCurrencyColor] = useState('currentColor')

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

  const handleCurrencyMouseEnter = () => {
    setChannelColor(
      <linearGradient id="paint0_linear_15_710" x1="31.9977" y1="0" x2="31.9977" y2="64" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B2C2EC" />
        <stop offset="0.489583" stop-color="#F3D0BB" />
        <stop offset="1" stop-color="#FFDB63" />
      </linearGradient>
    )
  }

  const handleCurrencyMouseLeave = () => {
    setChannelColor('currentColor')
  }

  return (
    <section className="bg-white-400 font-body w-screen text-black-400 relative">
      <Nav />
      <section id="home" className="w-full min-h-screen h-fit pt-[100px] px-[32px] flex justify-between items-center border-b-[1px] border-[#DDDDDD]"
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

      <section id="about" className="w-full min-h-screen  pt-[200px] px-[32px] space-y-[84px]">
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

      <section id="features" className="w-full min-h-screen pt-[200px] px-[32px] space-y-[84px] flex flex-col lg:flex-row gap-[80px] items-center">
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

          <div onMouseEnter={handleCurrencyMouseEnter} onMouseLeave={handleCurrencyMouseLeave} className="flex flex-col items-center gap-8 bg-white-500 text-white-600 hover:bg-black-400 p-[20px] rounded-[18px] h-[250px]">
            <p className="text-sm font-light">Multi-Channel Payment Optionss</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
              <g clip-path="url(#clip0_49_2230)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.4286 3.42857C35.4286 2.51926 35.0673 1.64719 34.4244 1.00421C33.7814 0.361223 32.9093 0 32 0C31.0907 0 30.2186 0.361223 29.5756 1.00421C28.9326 1.64719 28.5714 2.51926 28.5714 3.42857V7.00343C22.4823 7.56571 17.312 9.68686 13.4994 13.4994C9.68686 17.312 7.56571 22.4823 7.00343 28.5714H3.42857C2.51926 28.5714 1.64719 28.9327 1.00421 29.5756C0.361223 30.2186 0 31.0907 0 32C0 32.9093 0.361223 33.7814 1.00421 34.4244C1.64719 35.0674 2.51926 35.4286 3.42857 35.4286H7.00343C7.56571 41.5177 9.68686 46.688 13.4994 50.5006C17.312 54.3131 22.4823 56.4343 28.5714 56.9966V60.5714C28.5714 61.4807 28.9326 62.3528 29.5756 62.9958C30.2186 63.6388 31.0907 64 32 64C32.9093 64 33.7814 63.6388 34.4244 62.9958C35.0673 62.3528 35.4286 61.4807 35.4286 60.5714V57.0011C41.5177 56.4343 46.688 54.3131 50.5006 50.5006C54.3131 46.688 56.4343 41.5177 57.0011 35.4286H60.5669C61.4762 35.4286 62.3482 35.0674 62.9912 34.4244C63.6342 33.7814 63.9954 32.9093 63.9954 32C63.9954 31.0907 63.6342 30.2186 62.9912 29.5756C62.3482 28.9327 61.4762 28.5714 60.5669 28.5714H57.0011C56.4343 22.4823 54.3131 17.312 50.5006 13.4994C46.688 9.68686 41.5177 7.56571 35.4286 7.00343V3.42857ZM28.5714 13.8971C28.5714 14.8065 28.9326 15.6785 29.5756 16.3215C30.2186 16.9645 31.0907 17.3257 32 17.3257C32.9093 17.3257 33.7814 16.9645 34.4244 16.3215C35.0673 15.6785 35.4286 14.8065 35.4286 13.8971C39.968 14.4229 43.328 16.0229 45.6549 18.3497C47.9771 20.6766 49.5817 24.032 50.1074 28.576C49.2299 28.6214 48.4033 29.0019 47.7983 29.639C47.1932 30.2762 46.8558 31.1213 46.8558 32C46.8558 32.8787 47.1932 33.7238 47.7983 34.361C48.4033 34.9981 49.2299 35.3786 50.1074 35.424C49.5817 39.968 47.9771 43.3234 45.6549 45.6503C43.3234 47.9817 39.968 49.5817 35.424 50.1074C35.3916 49.2204 35.0164 48.3805 34.3774 47.7644C33.7384 47.1483 32.8854 46.804 31.9977 46.804C31.1101 46.804 30.257 47.1483 29.618 47.7644C28.979 48.3805 28.6038 49.2204 28.5714 50.1074C24.032 49.5771 20.6766 47.9771 18.3497 45.6503C16.0229 43.3234 14.4183 39.968 13.8971 35.424C14.7746 35.3786 15.6012 34.9981 16.2063 34.361C16.8114 33.7238 17.1487 32.8787 17.1487 32C17.1487 31.1213 16.8114 30.2762 16.2063 29.639C15.6012 29.0019 14.7746 28.6214 13.8971 28.576C14.4229 24.032 16.0229 20.6766 18.3497 18.3497C20.6766 16.0183 24.032 14.4183 28.5714 13.8926V13.8971ZM31.7989 26.08C32.7243 26.003 33.6509 26.2154 34.4503 26.688C34.7746 26.8741 35.0767 27.0965 35.3509 27.3509L35.36 27.3646C35.8754 27.9006 36.5796 28.2145 37.3228 28.2397C38.066 28.2648 38.7897 27.9992 39.3402 27.4993C39.8907 26.9994 40.2246 26.3045 40.271 25.5623C40.3174 24.8202 40.0726 24.0891 39.5886 23.5246L37.5223 25.376L39.5886 23.52L39.584 23.5154L39.5749 23.5063L39.5566 23.4834L39.5109 23.4377C39.3246 23.2381 39.1262 23.0503 38.9166 22.8754C38.4165 22.4471 37.8778 22.066 37.3074 21.7371C35.4952 20.6793 33.4006 20.2067 31.3097 20.384C26.4457 20.8046 23.2777 24.0503 23.2777 28.0457C23.2777 29.2891 23.552 30.464 24.1691 31.4971C24.7863 32.5303 25.6366 33.2343 26.496 33.7189C27.9771 34.56 29.7966 34.8937 31.0583 35.1269L31.2777 35.168C32.832 35.456 33.7006 35.6571 34.2491 35.9771C34.4457 36.0914 34.4914 36.1691 34.5051 36.192C34.5189 36.2149 34.5966 36.3429 34.6057 36.704C34.5403 36.7929 34.4634 36.8729 34.3771 36.9417C33.8335 37.3544 33.2012 37.6346 32.5303 37.76C30.7931 38.144 28.8091 37.8103 27.3966 36.5257C27.1221 36.2587 26.7968 36.0496 26.4399 35.9108C26.083 35.772 25.7019 35.7064 25.3191 35.7178C24.9364 35.7292 24.5598 35.8175 24.2118 35.9773C23.8639 36.1371 23.5516 36.3652 23.2935 36.6481C23.0354 36.931 22.8369 37.2629 22.7096 37.624C22.5823 37.9852 22.5289 38.3682 22.5526 38.7504C22.5763 39.1326 22.6766 39.5061 22.8475 39.8488C23.0184 40.1915 23.2564 40.4963 23.5474 40.7451C26.6103 43.5429 30.624 44.032 33.76 43.3417C35.3371 42.9943 36.8686 42.3177 38.0617 41.3074C39.2503 40.3017 40.32 38.7657 40.32 36.7954C40.32 35.5429 40.0549 34.3634 39.4469 33.3211C38.8886 32.3743 38.0929 31.5895 37.1383 31.0446C35.6251 30.1577 33.76 29.8103 32.48 29.5817L32.32 29.5497C30.752 29.2571 29.8697 29.0651 29.312 28.7497C29.1154 28.64 29.0789 28.5669 29.0743 28.5623C29.0537 28.5282 29.0383 28.4912 29.0286 28.4526C28.9996 28.3174 28.9873 28.1793 28.992 28.0411C28.992 27.6754 29.1291 27.2914 29.4766 26.944C29.824 26.6103 30.5143 26.1897 31.7989 26.0754V26.08ZM34.6286 36.6583L34.6194 36.6766C34.6211 36.6699 34.6242 36.6636 34.6286 36.6583Z"
                  fill={currencyColor != 'currentColor' ? 'url(#paint0_linear_15_710)' : 'currentColor'}
                />
              </g>
              <defs>
                {currencyColor}
                <clipPath id="clip0_49_2230">
                  <rect width="64" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="text-sm font-light text-center">Flexible payment options, <br /> including mobile money, bank transfers, <br /> and digital wallets.</p>
          </div>

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
      <Footer />
    </section >
  )
}

export default App;