import { FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiExpress, SiTailwindcss } from 'react-icons/si'
import SectionWrapper from './SectionWrapper'
import ToolTip from './ToolTip'

interface Props {
  title: string
  icon: JSX.Element
}

const Skills = () => {
  const skillData: Props[] = [
    {
      title: 'React.js',
      icon: <FaReact className='w-6 h-6' />,
    },
    {
      title: 'Next.js',
      icon: <TbBrandNextjs className='w-6 h-6' />,
    },
    {
      title: 'Tailwindcss',
      icon: <SiTailwindcss className='w-6 h-6' />,
    },
    {
      title: 'express.js',
      icon: <SiExpress className='w-6 h-6' />,
    },
  ]
  return (
    <SectionWrapper title='skills'>
      <div className='flex justify-center gap-4'>
        {skillData.map(({ title, icon }) => {
          return (
            <ToolTip key={title} title={title}>
              {icon}
            </ToolTip>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
export default Skills
