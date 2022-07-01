import * as React from 'react';
import { Spacer } from '../components/Spacer';
import { workExperienceData } from '../data';

const WorkExperience = () => {
	return (
		<section id='workSection' className='px-11'>
			<Spacer />
			<h1 className='mb-10 text-5xl font-bold tracking-wider uppercase linearText'>Work Experience</h1>
			{workExperienceData.map((item, itemIdx) => {
				return (
					<div className='w-full p-8 text-blanco' key={itemIdx}>
						<h1 className='w-full py-3 text-2xl tracking-widest text-slate-400'>
							{item.empresa} - <mark className='bg-transparent text-blanco'>{item.rol}</mark>
						</h1>
						<h2 className='mb-5'>{item.tiempoEnRol}</h2>
						<ul>
							{item.bulletItems.map((bullet, bulletIdx) => {
								return (
									<li key={`${itemIdx}${bulletIdx}`} className='pl-5 mb-5 border-l-4 border-celesteOscuro'>
										{bullet}
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</section>
	);
};
export default WorkExperience;
