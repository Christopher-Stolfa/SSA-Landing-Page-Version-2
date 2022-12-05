import React, { createContext } from 'react';
import { IPageData } from '../data/get-data';

interface PageDataContextType {
  setPageData?: React.Dispatch<React.SetStateAction<IPageData>>;
  pageData: IPageData;
}

const pageDataContext: PageDataContextType = {
  setPageData: () => {},
  pageData: {},
};

const PageDataContext = createContext(pageDataContext);
const PageDataProvider = PageDataContext.Provider;

export { PageDataContext, PageDataProvider };
