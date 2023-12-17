import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

interface Props {
  imgUrl: string
  title: string
  site: string
  github: string
}

const CardProject = ({ imgUrl, title, site, github }: Props) => {
  return (
    <div className='flex justify-center items-center flex-col gap-4 p-2 bg-darkNav rounded-md'>
      <Image width={200} height={150} src={imgUrl} alt='profile' className='rounded-md w-[200px] h-[150px] object-cover'></Image>
      <p>{title}</p>
      <div className='flex  justify-around gap-5 w-1/2 items-center'>
        <Link title='visit project' href={site} target='_blank' className='hover:text-purple-400'>
          <MdOutlineOpenInNew className='w-6 h-6' />
        </Link>
        <Link title='github' href={github} target='_blank' className='hover:text-purple-400'>
          <FaGithub className='w-6 h-6' />
        </Link>
      </div>
    </div>
  )
}
export default CardProject
