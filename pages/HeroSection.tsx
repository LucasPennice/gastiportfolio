import Link from 'next/link';
import { heroData } from '../data';

export const HeroSection = () => {
	return (
		<section className='heroSection'>
			<div className='flex flex-col justify-center w-1/2 h-full p-12'>
				<h1 className='text-3xl font-bold uppercase'>{heroData.title}</h1>
				<h2 className='py-5 text-2xl'>{heroData.subtitle}</h2>
				<a href='#projectSection' className='btn'>
					Check my work
				</a>
			</div>
		</section>
	);
};
export default HeroSection;
