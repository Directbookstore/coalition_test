export default function Card({children,noPadding}) {
    
    return (
      <div className='bg-white shadow-gray-300 rounded-md mb-2'>
        {children}
      </div>
    );
  }