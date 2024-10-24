export const isNullOrUndefined = (value: any) => value === null || value === undefined;

export const parseJsonToHtml = (json: string) =>
   json
      .replace(/\n/g, '<br /><br />')
      .replace(/\*\*/g, '<strong>')
      .replace(/\*\/\*/g, '</strong>');
