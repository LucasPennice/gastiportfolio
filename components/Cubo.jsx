export const Cubo = ({ isOnBanner }) => {
	return <div className={`absolute ${isOnBanner ? 'onBanner' : 'offBanner'}`}></div>;
};
