import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import SectionWrapper from './SectionWrapper'

const TouchMe = () => {
  return (
    <SectionWrapper title='Touch me'>
      <div className='flex justify-center gap-4'>
        <Link href='https://github.com/gonsura' className='hover:text-purple-400'>
          <FaGithub className='w-6 h-6' />
        </Link>
        <Link href='https://www.linkedin.com/in/fauzi-azhari-asri-6b199025b/' className='hover:text-purple-400'>
          <FaLinkedin className='w-6 h-6' />
        </Link>
      </div>
    </SectionWrapper>
  )
}
export default TouchMe
