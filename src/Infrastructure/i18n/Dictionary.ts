import { z } from 'zod';

export const dictionarySchema = z.object({
   Home: z.object({
      MainTitle: z.string(),
      CatchPhrase: z.string(),
      CTO: z.object({
         Resume: z.string(),
         Linkedin: z.string(),
         Github: z.string(),
         Contact: z.string()
      })
   }),
   Project: z.object({
      Discover: z.string(),
      Overview: z.string(),
      Role: z.string(),
      Technologies: z.string(),
      Interface: z.string(),
      Timeline: z.string(),
      Challenge: z.string(),
      Highlights: z.string()
   }),
   Projects: z.array(
      z.object({
         Id: z.number(),
         Name: z.string(),
         Type: z.string(),
         Color: z.string(),
         Intro: z.string(),
         Tags: z.string(),
         ProjectLink: z.string(),
         MediaPath: z.string(),
         Highlights: z.array(
            z.object({
               Name: z.string(),
               MediaTitle: z.string(),
               Caption: z.string()
            })
         ),
         Overview: z.string(),
         RoleOverview: z.string(),
         Collaborators: z.array(
            z.object({
               Name: z.string(),
               Role: z.string()
            })
         ),
         Technologies: z.array(z.string()),
         Interface: z.array(z.string()),
         Timeline: z.string(),
         SolvedProblems: z.array(
            z.object({
               Title: z.string(),
               Problem: z.string(),
               Solution: z.string()
            })
         )
      })
   )
});

export type Dictionary = z.infer<typeof dictionarySchema>;
