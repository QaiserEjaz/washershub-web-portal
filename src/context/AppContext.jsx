import React from 'react';
import { CategoriesProvider } from './CategoriesContext';
import { VendorsProvider } from './VendorsContext';

const AppProvider = ({ children }) => {
    return (
        <CategoriesProvider>
            <VendorsProvider>
                {children}
            </VendorsProvider>
        </CategoriesProvider>
    );
};

export default AppProvider;
