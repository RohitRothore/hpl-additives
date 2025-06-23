interface CustomSlickDotsProps {
  props: { className: string };
  key: string;
}

export default function CustomSlickDots(dots: CustomSlickDotsProps[]) {
  return (
    <ul className='space-x-2'>
      {dots?.map(({ props: { className }, key }) => (
        <li key={key} className={`size-2 rounded-full ${className === 'slick-active' ? 'bg-white' : 'bg-gray-400'}`} />
      ))}
    </ul>
  );
}
