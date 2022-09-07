import Head from 'next/head';

import Lottie from 'react-lottie';
import animationDataBrowser from '../svg/QI_logo_ani_horizontal.json';
import animationDataMobile from '../svg/QI_logo_ani_vertical.json';
import { isMobile } from 'react-device-detect';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Homepage = () => {
	const { t } = useTranslation('common');
	console.log(isMobile);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: isMobile ? animationDataMobile : animationDataBrowser,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div className="home">
			<Head>
				<title>Quantinum Investment</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="keywords" content="퀀티넘, 투자자문, 인베스트먼트, 부동산투자" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <h1>{t('test')}</h1> */}
			<div className="svg">
				<Lottie options={defaultOptions} />
			</div>

			{/* <Lottie options={defaultOptions} height={800} width={1280} /> */}
			<h2 className="en">COMING SOON</h2>
			<p className="en">info@quantinuminvestent.com</p>
		</div>
	);
};

// export const getServerSideProps = async ({ locale }) => ({
export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common', 'footer'])),
	},
});

export default Homepage;
