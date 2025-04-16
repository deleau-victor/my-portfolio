import { InternationalizationContext } from '@/Infrastructure/Internationalization/InternationalizationContext';
import HomeBackground from '@/Presentation/Components/Blocks/Home/Background/HomeBackground';
import HomeHeader from '@/Presentation/Components/Blocks/Home/Header/HomeHeader';
import Project from '@/Presentation/Components/Blocks/Home/Projects/Project';
import { IInternationalizationParam } from '@/Shared/Helpers/IInternationalizationParam';

const Home = async ({ params }: IInternationalizationParam) => {
   const _locale: string | undefined = params?.lang;
   const _internationalizationContext = InternationalizationContext.getInstance();
   const dict = await _internationalizationContext.getDictionary(_locale);

   return (
      <>
         <HomeBackground />
         <HomeHeader dict={dict} />
         {dict.Projects.sort((a, b) => b.Id - a.Id).map((project, index) => (
            <Project key={project.Id} project={project} reverse={index % 2 !== 0} />
         ))}
      </>
   );
};

export default Home;
