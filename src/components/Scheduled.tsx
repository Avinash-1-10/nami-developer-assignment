import ScheduledTaskCard from './ScheduledTaskCard'

const Scheduled = () => {
  return (
    <div className='flex flex-col gap-8'>
      {[1, 2, 3, 4, 4, 5, 66, 6, 66, 2, 3, 3, 3].map((t, i) => (
        <ScheduledTaskCard/>
      ))}
    </div>
  )
}

export default Scheduled