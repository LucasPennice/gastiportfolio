import { Spacer } from '../components/Spacer';
import { BiWorld } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { personalProjectData } from '../data';

const PersonalProjects = () => {
	return (
		<section id='projectSection' className='px-11'>
			<Spacer />
			<h1 className='mb-10 text-5xl font-bold tracking-wider uppercase linearText'>Personal Projects</h1>
			{personalProjectData.map((item, itemIdx) => {
				return (
					<div className='w-full p-8 text-blanco' key={itemIdx}>
						<h1 className='w-full py-3 text-2xl tracking-widest text-slate-400'>
							{item.proyecto} - <mark className='bg-transparent text-blanco'>{item.rol}</mark>
						</h1>
						<h2 className='mb-5'>{item.tecnologias}</h2>
						<ul>
							{item.bulletItems.map((bullet, bulletIdx) => {
								return (
									<li key={`${itemIdx}${bulletIdx}`} className='pl-5 mb-5 border-l-4 border-celesteOscuro'>
										{bullet}
									</li>
								);
							})}
						</ul>
						{item.links && (
							<section className='flex gap-8 text-5xl text-slate-400 '>
								{item.links.live && (
									<a
										target='_blank'
										rel='noreferrer'
										href={item.links.live}
										className='transition-all hover:text-celesteOscuro'>
										<BiWorld />
									</a>
								)}
								{item.links.repo && (
									<a
										target='_blank'
										rel='noreferrer'
										href={item.links.repo}
										className='transition-all hover:text-celesteOscuro'>
										<AiFillGithub />
									</a>
								)}
							</section>
						)}
					</div>
				);
			})}
		</section>
	);
};
export default PersonalProjects;
