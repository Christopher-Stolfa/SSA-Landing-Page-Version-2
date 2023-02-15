const regexStripHtml = (string = '') => {
  if (!string) return '';
  if (typeof string !== 'string') return '';
  let newString = string;
  const stripHtml = /(<([^>]+)>)/gi;
  const stripEntities = /&#{0,1}[a-z0-9]+;/gi;

  newString = newString?.replace(stripHtml, '');
  newString = newString?.replace(stripEntities, '');
  return newString;
};

export default regexStripHtml;
