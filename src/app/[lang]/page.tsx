import { Ii18nParam } from '@/Domain/Contracts/Ii18nParam';
import { getDictionary } from '@/Infrastructure/Config/Dictionnaries';
import HomeBackground from '@/Presentation/Components/Blocks/Home/Background/HomeBackground';
import HomeHeader from '@/Presentation/Components/Blocks/Home/Header/HomeHeader';
import Project from '@/Presentation/Components/Blocks/Home/Projects/Project';
import Image from 'next/image';
import badge from '../../Presentation/Assets/badge_confirmé.png';
import Link from 'next/link';
import { i18n } from '@/Infrastructure/Config/i18n-config';

const Home = async ({ params }: Ii18nParam) => {
   const dict = await getDictionary(params && params.lang ? params.lang : i18n.defaultLocale);

   return (
      <>
         <HomeBackground />
         <HomeHeader dict={dict} />
         <Project project={dict.Projects[0]} />
         <Link
            href={'https://directory.opquast.com/fr/certificat/JHTE5N/'}
            target="_blank"
            style={{
               width: 'fit-content',
               margin: 'auto',
               display: 'flex',
               justifyContent: 'center'
            }}
         >
            <Image src={badge} alt="badge" width={175} height={131} />
         </Link>
      </>
   );
};

export default Home;
