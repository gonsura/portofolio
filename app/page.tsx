import Image from 'next/image'
import SectionWrapper from '../components/SectionWrapper'
import CardProject from '@/components/CardProject'
import TouchMe from '@/components/TouchMe'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <main className='flex justify-center items-start bg-darkBg text-grayText min-h-screen p-4'>
      <div className='p-4 max-w-[800px] space-y-8 flex justify-center items-center flex-col'>
        <Image
          priority
          className='rounded-full block'
          width={200}
          height={200}
          src='/ff.jpg'
          alt='profile'
        />
        <h1 className='text-2xl sm:text-3xl font-bold'>
          Fauzi Azhari <span className='text-purple-400'>Asri</span>
        </h1>
        <p className='text-center font-extralight max-w-[350px]'>
          Hey Im Fauzi, I like learning new things and <span className='text-purple-400'>discussing</span> them with
          friends to get new points of view
        </p>
        <SectionWrapper title='Projects'>
          <div className='flex flex-wrap justify-center items-center gap-8 p-1'>
            <CardProject
              imgUrl='/booking.png'
              title='booking hotel'
              site='https://dashboard-admin-ver-2-react.vercel.app'
              github='https://github.com/gonsura/dashboard-admin-ver.2'
            />
            <CardProject
              imgUrl='/game.png'
              title='game galery'
              site='https://react-ts-game-galery.vercel.app/'
              github='https://github.com/gonsura/react-ts-game-galery'
            />
            <CardProject
              imgUrl='/backendapi.png'
              title='checkin api'
              site='https://github.com/gonsura/final-backend-lite'
              github='https://github.com/gonsura/final-backend-lite'
            />
          </div>
        </SectionWrapper>
        <Skills />
        <TouchMe />
      </div>
    </main>
  )
}
