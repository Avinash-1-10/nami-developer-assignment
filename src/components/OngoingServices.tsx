import ServiceCard from "./ServiceCard";

const OngoingServices = () => {
  return (
    <div className='flex flex-col gap-8'>
      {[1, 2, 3, 4, 4, 5, 66, 6, 66, 2, 3, 3, 3].map(() => (
        <ServiceCard />
      ))}
    </div>
  );
};

export default OngoingServices;
