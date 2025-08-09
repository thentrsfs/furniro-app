const StarRating = ({ rating }: { rating: number }) => {
  const full = '★'.repeat(Math.floor(rating));
  const half = rating % 1 >= 0.5 ? '½' : '';
  const empty = '☆'.repeat(5 - Math.ceil(rating));

  return <div className="flex items-center"><div className="text-yellow-500 text-2xl">{full}{half}{empty}</div> <div className='w-[2px] h-7 bg-gray-light mx-4'/> <span className='text-gray-light text-sm'>5 customers reviews</span></div>;
};

export default StarRating;