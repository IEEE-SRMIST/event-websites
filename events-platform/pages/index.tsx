import Image from 'next/image'
import { Nunito_Sans } from 'next/font/google'
import Bg from '../public/assets/bg.png'

const nunito_sans = Nunito_Sans({
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={`relative z-0 bg-black flex h-screen w-full ${nunito_sans.className}`}>
      <Image className="fixed top-0 left-0 -z-10 w-full h-screen" src={Bg} alt="Background Image" width={1000} height={1000} />
      <div className="w-[50%] h-screen"></div>
      <div className="w-[50%] h-screen"></div>
    </main>
  )
}
