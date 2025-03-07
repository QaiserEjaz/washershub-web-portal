import React, { createContext, useContext, useState } from 'react';

const CategoriesContext = createContext();

export const useCategories = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
  const [parentCategories, setParentCategories] = useState([
    {
      name: 'Car Wash',
      id: 101,
      categories: [
        { id: 1, name: 'Wash', description: '' }, 
        { id: 2, name: 'Polish', description: 'abc' }
      ],
      fields: [
        { name: 'Vehicle-Number', placeholder: 'Enter vehicle number', validation: 'required' },
        { name: 'Color', placeholder: 'Enter vehicle color', validation: 'required' }
      ]
    },
    {
      name: 'Sofa Wash',
      id: 102,
      categories: [
        { id: 1, name: 'Wash', description: '' },
        { id: 2, name: 'Polish', description: 'def' }
      ],
      fields: [
        { name: 'Brand', placeholder: 'Enter sofa brand', validation: 'required' },
        { name: 'no. of sofas', placeholder: 'Enter number of sofas', validation: 'number' }
      ]
    }
  ]);

  const addParentCategory = (category) => {
    setParentCategories([...parentCategories, category]);
  };

  const updateParentCategory = (updatedCategory) => {
    setParentCategories(parentCategories.map(category =>
      category.id === updatedCategory.id ? { ...category, ...updatedCategory } : category
    ));
  };

  const addCategory = (parentId, category) => {
    setParentCategories(parentCategories.map(parent =>
      parent.id === parentId ? { ...parent, categories: [...parent.categories, category] } : parent
    ));
  };

  const updateCategory = (parentId, updatedCategory) => {
    setParentCategories(parentCategories.map(parent =>
      parent.id === parentId
        ? {
          ...parent,
          categories: parent.categories.map(category =>
            category.id === updatedCategory.id ? { ...category, ...updatedCategory } : category
          )
        }
        : parent
    ));
  };

  const contextValue = {
    parentCategories,
    addParentCategory,
    updateParentCategory,
    addCategory,
    updateCategory,
  };

  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
