
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = () => {
  return (
    <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-white basis-1/3 flex-1 cursor-pointer'>
      <Skeleton circle width={ 100 } height={ 100 } containerClassName="flex-1" />
      <Skeleton width={'60%'} className='my-3'/>
      <Skeleton width={'30%'}/>
      <Skeleton width={'50%'}/>
      <div className='flex-1'>
        <Skeleton count={ 3 } width={'80%'}/>
      </div>
      <div className='pb-3' style={{ textAlign: 'left' }}>
        <Skeleton className='text-left' width={'30%'}/>
      </div>
      <div className='flex text-left justify-start' style={{ textAlign: 'left', justifyContent: 'space-around' }}>
        <Skeleton circle width={ 25 } height={ 25 }/>
        <Skeleton circle width={ 25 } height={ 25 }/>
        <Skeleton circle width={ 25 } height={ 25 }/>
        <Skeleton circle width={ 25 } height={ 25 }/>
      </div>
    </div>
  )
}

export default CardSkeleton
