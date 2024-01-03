import spinner from '../assets/images/loader2.svg'

function Loader() {
  return (
    <div className='mt-20'>
      <img
        width={60}
        className='text-center mx-auto'
        src={spinner}
        alt='Loading...'
      />
    </div>
  )
}

export default Loader
