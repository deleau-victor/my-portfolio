import { Dictionary, getDictionary } from '@/Infrastructure/Config/Dictionnaries';
import { i18n, Locale } from '@/Infrastructure/Config/i18n-config';
import { notFound } from 'next/navigation';
import ProjectElement from '@/Presentation/Components/Blocks/Project/Project';

// Get a literral type from the Projects array
export type ProjectName = Dictionary['Projects'][number]['Name'];
export type Project = Dictionary['Projects'][number];

interface IProjectParams {
   params?: {
      [key: string]: Locale | ProjectName;
   };
}

const getProject = async (projectName: string, lang: Locale) => {
   const dict = await getDictionary(lang);

   const urlDecodedProjectName = decodeURIComponent(projectName);

   return dict.Projects.find((project) => project.Name === urlDecodedProjectName);
};

const Project = async ({ params }: IProjectParams) => {
   const lang = params && params.lang ? (params.lang as Locale) : i18n.defaultLocale;
   const projectName = params && (params.project as ProjectName);

   if (!projectName) {
      return notFound();
   }

   const dict = await getDictionary(lang);
   const project = await getProject(projectName, lang);

   if (!project) {
      return notFound();
   }

   return (
      <>
         <ProjectElement project={project} dict={dict} />
      </>
   );
};

export default Project;
