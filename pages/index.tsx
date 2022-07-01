import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Spacer } from '../components/Spacer';
import { AboutMe } from './AboutMe';
import { Contact } from './Contact';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { PersonalProjects } from './PersonalProjects';
import { WorkExperience } from './WorkExperience';

const HomePage: NextPage = () => {
	const [isOnBanner, setIsOnBanner] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(false);

	const updateCubePosition = () => {
		window.scrollY !== 0 ? setIsOnBanner(true) : setIsOnBanner(false);
	};
	const updateMobileCheck = () => {
		window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
	};
	useEffect(() => {
		window.addEventListener('scroll', updateCubePosition);
		window.addEventListener('resize', updateMobileCheck);
		updateCubePosition();
		updateMobileCheck();
		return () => {
			window.removeEventListener('scroll', updateCubePosition);
			window.removeEventListener('resize', updateMobileCheck);
		};
	}, []);

	return (
		<main className='flex flex-col items-center min-h-screen text-blanco'>
			<Header isMobile={isMobile} isOnBanner={isOnBanner} />
			<div className='w-full max-w-7xl'>
				<HeroSection />
				<WorkExperience />
				<PersonalProjects />
				<AboutMe />
				<Contact />
			</div>
		</main>
	);
};

export default HomePage;
