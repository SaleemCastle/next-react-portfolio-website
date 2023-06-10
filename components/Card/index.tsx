import Image, { StaticImageData } from 'next/image'
import { TbPoint } from 'react-icons/tb'
import { getTechnologyLogos } from '../../utilityFunctions'

interface IProps {
  title: string,
  icon: StaticImageData,
  description: string,
  highlightsHeader?: string,
  period: string,
  highlights: string[],
  technologies: string[]
}

const Card = (props: IProps) => {

  const { title, icon, description, highlights, highlightsHeader, period, technologies } = props

  return (
    <div className='text-center p-10 my-10 bg-white basis-1/3 flex-1 cursor-pointer shadow-lg rounded-xl' style={{ 
      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      borderRadius: 12
    }}>
      <Image className='mx-auto' src={ icon } width={ 100 } height={ 100 } alt='avatar'/>
      <h3 className='text-lg font-medium pt-8 pb-2 text-gray-800'>{ title }</h3>
      <h3 className='font-light pb-2 text-gray-800 text-xs'>{ `(${period})` }</h3>
      <p className='py-2 text-gray-800 text-xs'>
        { description }
      </p>
      {
        highlightsHeader 
        ?
        <h4 className='py-4 text-teal-600'>{ highlightsHeader }</h4>
        :
        null
      }
      <div className='flex-1'>
        {
          highlights.map((highlight, index) => {
            return (
              <p key={ index } className='text-gray-800 py-1 flex-nowrap flex' style={{fontSize: 11, textAlign: 'left'}}>
                <span><TbPoint /></span> { highlight }
              </p>
            )
          })
        }
      </div>
      <h4 className='py-5 text-teal-600' style={{textAlign: 'left'}}>Technologies and Tools used:</h4>
      <div className='flex text-left justify-around' style={{ textAlign: 'left', justifyContent: 'space-around' }}>
        {
          technologies
          ?
          technologies.map((tech, index) => (
            <Image key={ index } className='mx-auto' src={ getTechnologyLogos(tech) } height={ 25 } alt={ tech }/>
          ))
          :
          null
        }
      </div>
    </div>
  )
}

export default Card
