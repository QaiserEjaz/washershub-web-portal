import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCategories } from '../../context/CategoriesContext';
import NavBar from '../../components/layout/NavBar';

const AddCategory = () => {
  const { parentId, categoryId } = useParams();
  const { parentCategories, addCategory, updateCategory } = useCategories();
  const [category, setCategory] = useState({ name: '', description: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryId) {
      const parent = parentCategories.find(p => p.id === parseInt(parentId));
      if (parent) {
        const existingCategory = parent.categories.find(c => c.id === parseInt(categoryId));
        if (existingCategory) {
          setCategory(existingCategory);
        }
      }
    }
  }, [parentId, categoryId, parentCategories]);

  const handleSave = (e) => {
    e.preventDefault();
    if (!category.name || !category.description) {
      setError('Both fields are required');
      return;
    }
    if (categoryId) {
      updateCategory(parseInt(parentId), { ...category, id: parseInt(categoryId) });
    } else {
      addCategory(parseInt(parentId), category);
    }
    navigate(`/categories/${parentId}`);
  };

  return (
    <>
      <NavBar />
      <div className="p-4">
        {error && <div className="alert alert-danger w-100 text-center">{error}</div>}
        <form onSubmit={handleSave} noValidate>
          <div className="form-group mb-2">
            <input
              type="text"
              placeholder='Category Name'
              className="form-control"
              value={category.name}
              onChange={(e) => setCategory({ ...category, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              placeholder='Category Description'
              className="form-control"
              value={category.description}
              onChange={(e) => setCategory({ ...category, description: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="bluebtn">Save</button>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
