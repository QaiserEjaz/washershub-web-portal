import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCategories } from '../../context/CategoriesContext';
import CustomTextField from '../../components/common/CustomTextField';
import NavBar from '../../components/layout/NavBar';

const ParentCategories = () => {
  const { parentCategories } = useCategories();
  const navigate = useNavigate();
  const [contextMenu, setContextMenu] = useState(null);

  const handleCategoryClick = (id) => {
    navigate(`/categories/${id}`);
  };

  const handleContextMenu = (event, id) => {
    event.preventDefault();
    setContextMenu({
      id,
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleEdit = (id) => {
    navigate(`/edit-parent-category/${id}`);
    setContextMenu(null);
  };

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <>
      <NavBar />
      <div className="p-3 mt-1">
        <div className='d-flex justify-content-end'>
          <Link to="/add-parent-category" className="bluebtn mb-2">Add</Link>
        </div>

        <div>
          {parentCategories.map((parent) => (
            <div key={parent.id} onContextMenu={(e) => handleContextMenu(e, parent.id)}>
              <CustomTextField
                text={capitalizeWords(parent.name)}
                onClick={() => handleCategoryClick(parent.id)}
                icon=" fi fi-sr-angle-right"
              />
            </div>
          ))}
        </div>

        {contextMenu && (
          <ul
            className="context-menu"
            style={{
              position: 'absolute',
              top: contextMenu.mouseY,
              left: contextMenu.mouseX,
              backgroundColor: 'white',
              boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
              listStyle: 'none',
              padding: '10px',
              borderRadius: '5px',
              zIndex: 1000,
            }}
            onClick={() => setContextMenu(null)}
          >
            <li
              onClick={() => handleEdit(contextMenu.id)}
              style={{
                cursor: 'pointer',
                height: '1.5rem',
                width: '2rem'
              }}
            >
              Edit
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ParentCategories;