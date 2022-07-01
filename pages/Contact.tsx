import { Spacer } from '../components/Spacer';
import { contactData } from '../data';

const Contact = () => {
	return (
		<section id='contactSection' className='pb-36 px-11'>
			<Spacer />
			<h1 className='mb-10 text-5xl font-bold tracking-wider uppercase linearText'>Contact Me</h1>
			<ul>
				{contactData.map((contact, contactIdx) => {
					return (
						<li key={contactIdx} className='flex pl-5 mb-12 text-3xl font-light border-l-4 border-celesteOscuro'>
							<span className='flex items-end mr-5'>{contact.Icon}</span>
							{contact.text}
						</li>
					);
				})}
			</ul>
		</section>
	);
};
export default Contact;
