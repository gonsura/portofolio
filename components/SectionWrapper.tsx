type Props = {
  children: string | JSX.Element
  title: string
}

const SectionWrapper = ({ children, title }: Props) => {
  return (
    <div className='space-y-2'>
      <h2 className='text-xl font-bold text-center'>{title}</h2>
      {children}
    </div>
  )
}
export default SectionWrapper
