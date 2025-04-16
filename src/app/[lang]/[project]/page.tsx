import { Dictionary } from '@/Infrastructure/i18n/Dictionary';
import { InternationalizationContext } from '@/Infrastructure/Internationalization/InternationalizationContext';
import ProjectElement from '@/Presentation/Components/Blocks/Project/Project';
import { notFound } from 'next/navigation';

export type ProjectName = Dictionary['Projects'][number]['Name'];
export type Project = Dictionary['Projects'][number];

interface IProjectParams {
   params?: {
      [key: string]: string | ProjectName;
   };
}

const getProject = async (projectName: string, locale: string | undefined) => {
   const _internationalizationContext = InternationalizationContext.getInstance();
   const dict = await _internationalizationContext.getDictionary(locale);

   const urlDecodedProjectName = decodeURIComponent(projectName);

   return dict.Projects.find((project) => project.Name === urlDecodedProjectName);
};

const Project = async ({ params }: IProjectParams) => {
   const _locale: string | undefined = params?.lang;
   const projectName = params && (params.project as ProjectName);
   const _internationalizationContext = new InternationalizationContext();
   const dict = await _internationalizationContext.getDictionary(_locale);

   if (!projectName) {
      return notFound();
   }

   const project = await getProject(projectName, _locale);

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
