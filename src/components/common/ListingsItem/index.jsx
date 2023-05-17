import Image from 'next/image';
import Link from 'next/link';

const ListingsItem = ({ id, img, type, title, address, properties }) => {
	return (
		<Link className='flex flex-col h-full' href={`/listings/${id}`}>
			<div className='max-w-full'>
				<Image
					className='object-cover w-full'
					src={img}
					width={501}
					height={312}
					alt=''
				/>
			</div>
			<div className='grow bg-tertiary lg:py-6 lg:px-7 py-5 px-5'>
				<div className='text-[#a5875f] lg:text-lg text-base leading-tight'>
					{type}
				</div>
				<div className='lg:text-[20px] md:text-lg text-base font-medium leading-tight lg:mt-3 mt-2'>
					{title}
				</div>
				<div className='lg:text-[20px] md:text-lg text-base leading-tight lg:mt-1 mt-2'>
					{address}
				</div>
				<div className='flex flex-wrap items-center md:gap-x-5 lg:gap-y-1 gap-y-[3px] gap-x-4 md:mt-5 mt-4'>
					{properties.map(prop => (
						<div
							key={prop}
							className='lg:text-[20px] md:text-[18px] text-[16px] leading-tight'
						>
							{prop}
						</div>
					))}
				</div>
			</div>
		</Link>
	);
};

export default ListingsItem;