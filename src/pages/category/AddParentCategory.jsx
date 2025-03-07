// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useCategories } from '../components/CategoriesContext';
// import NavBar from '../components/NavBar';

// const AddParentCategory = () => {
//   const { id } = useParams();
//   const { parentCategories, addParentCategory, updateParentCategory } = useCategories();
//   const [categoryName, setCategoryName] = useState('');
//   const [categoryDescription, setCategoryDescription] = useState('');
//   const [fields, setFields] = useState([]);
//   const [newField, setNewField] = useState('');
//   const [showNewFieldInput, setShowNewFieldInput] = useState(false);
//   const navigate = useNavigate();
//   const [existingSubCategories, setExistingSubCategories] = useState([]);

//   useEffect(() => {
//     if (id) {
//       const category = parentCategories.find(parent => parent.id === parseInt(id));
//       if (category) {
//         setCategoryName(category.name);
//         setCategoryDescription(category.description);
//         setFields(category.fields);
//         setExistingSubCategories(category.categories);
//       }
//     }
//   }, [id, parentCategories]);

//   const handleAddField = () => {
//     if (newField) {
//       setFields([...fields, newField]);
//       setNewField('');
//       setShowNewFieldInput(false);
//     }
//   };

//   const handleRemoveField = (index) => {
//     setFields(fields.filter((_, i) => i !== index));
//   };

//   const handleSave = () => {
//     const newCategory = {
//       name: categoryName,
//       description: categoryDescription,
//       fields: fields,
//       id: id ? parseInt(id) : Date.now(),
//       categories: existingSubCategories, 
//     };
//     if (id) {
//       updateParentCategory(newCategory);
//     } else {
//       addParentCategory(newCategory);
//     }
//     navigate('/parent-categories');
//   };

//   return (
//     <>
//       <NavBar />
//       <div className="p-4 mt-1">
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Category Name"
//             id="categoryName"
//             value={categoryName}
//             onChange={(e) => setCategoryName(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Category Description"
//             id="categoryDescription"
//             value={categoryDescription}
//             onChange={(e) => setCategoryDescription(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <div className="d-flex align-items-center">
//             <label htmlFor="newField" className="form-label mb-0 fs-4" style={{ marginRight: '10px' }}>Field</label>
//             <button
//               className="btn"
//               type="button"
//               onClick={() => setShowNewFieldInput(true)}
//               style={{ fontSize: '17px', padding: '4px 8px', marginTop: '3px', border: 'none' }}
//             >
//               <i className="fi fi-sr-add" 
//                 style={{ color: '#3EA4F0' }} 
//               />
//             </button>
//           </div>
//           {showNewFieldInput && (
//             <div className="input-group mt-2" style={{ maxWidth: '570px' }}>
//               <input
//                 type="text"
//                 className="form-control rounded"
//                 style={{ maxWidth: '170px' }}
//                 id="newField"
//                 placeholder='Field Name'
//                 value={newField}
//                 onChange={(e) => setNewField(e.target.value)}
//               />
//               <button
//                 className="greenbtn rounded ms-3"
//                 type="button"
//                 onClick={handleAddField}
//                 style={{ width: '100px', fontSize: '14px', padding: '4px 8px', marginLeft: '4px' }}
//               >
//                 Add
//               </button>
//             </div>
//           )}
//         </div>

//         <div className="mb-3 d-flex flex-wrap">
//           {fields.map((field, index) => (
//             <div key={index} className="input-group mb-2 position-relative" style={{ maxWidth: '170px', marginRight: '10px' }}>
//               <input
//                 type="text"
//                 className="form-control rounded"
//                 value={field}
//                 readOnly
//               />
//               <button
//                 className="btn position-absolute"
//                 type="button"
//                 onClick={() => handleRemoveField(index)}
//                 style={{
//                   right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'red',
//                   fontSize: '17px', padding: '4px 8px', height: '25px', width: '25px', border: 'none',
//                   display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '30%'
//                 }}
//               >
//                 <i className="fi fi-br-cross-circle mt-1"></i>
//               </button>
//             </div>
//           ))}
//         </div>

//         <button className="bluebtn" onClick={handleSave} style={{ float: 'left' }}>Save </button>
//       </div>
//     </>
//   );
// };

// export default AddParentCategory;


import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCategories } from '../../context/CategoriesContext';
import NavBar from '../../components/layout/NavBar';

const AddParentCategory = () => {
  const { id } = useParams();
  const { parentCategories, addParentCategory, updateParentCategory } = useCategories();
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [fields, setFields] = useState([]);
  const [newField, setNewField] = useState({ name: '', placeholder: '', validation: '' });
  const [showNewFieldInput, setShowNewFieldInput] = useState(false);
  const navigate = useNavigate();
  const [existingSubCategories, setExistingSubCategories] = useState([]);

  useEffect(() => {
    if (id) {
      const category = parentCategories.find(parent => parent.id === parseInt(id));
      if (category) {
        setCategoryName(category.name);
        setCategoryDescription(category.description);
        setFields(category.fields);
        setExistingSubCategories(category.categories);
      }
    }
  }, [id, parentCategories]);

  const handleAddField = () => {
    if (newField.name) {
      setFields([...fields, newField]);
      setNewField({ name: '', placeholder: '', validation: '' });
      setShowNewFieldInput(false);
    }
  };

  const handleRemoveField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    const newCategory = {
      name: categoryName,
      description: categoryDescription,
      fields: fields,
      id: id ? parseInt(id) : Date.now(),
      categories: existingSubCategories,
    };
    if (id) {
      updateParentCategory(newCategory);
    } else {
      addParentCategory(newCategory);
    }
    navigate('/parent-categories');
  };

  return (
    <>
      <NavBar />
      <div className="p-4 mt-1">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category Name"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category Description"
            id="categoryDescription"
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <div className="d-flex align-items-center">
            <label htmlFor="newField" className="form-label mb-0 fs-4" style={{ marginRight: '10px' }}>Field</label>
            <button
              className="btn"
              type="button"
              onClick={() => setShowNewFieldInput(true)}
              style={{ fontSize: '17px', padding: '4px 8px', marginTop: '3px', border: 'none' }}
            >
              <i className="fi fi-sr-add"
                style={{ color: '#3EA4F0' }}
              />
            </button>
          </div>

          {showNewFieldInput && (
            <div className="input-group mt-2" style={{ maxWidth: '570px' }}>
              <input
                type="text"
                className="form-control rounded"
                style={{ maxWidth: '170px' }}
                id="newFieldName"
                placeholder='Field Name'
                value={newField.name}
                onChange={(e) => setNewField({ ...newField, name: e.target.value })}
              />
              <input
                type="text"
                className="form-control rounded"
                style={{ maxWidth: '170px' }}
                id="newFieldPlaceholder"
                placeholder='Placeholder'
                value={newField.placeholder}
                onChange={(e) => setNewField({ ...newField, placeholder: e.target.value })}
              />
              <input
                type="text"
                className="form-control rounded"
                style={{ maxWidth: '170px' }}
                id="newFieldValidation"
                placeholder='Validation'
                value={newField.validation}
                onChange={(e) => setNewField({ ...newField, validation: e.target.value })}
              />
              <button
                className="greenbtn rounded ms-3"
                type="button"
                onClick={handleAddField}
                style={{ width: '100px', fontSize: '14px', padding: '4px 8px', marginLeft: '4px' }}
              >
                Add
              </button>
            </div>
          )}
        </div>

        <div className="mb-3 d-flex flex-wrap">
          {fields.map((field, index) => (
            <div key={index} className="input-group mb-2 position-relative" style={{ maxWidth: '570px', marginRight: '10px' }}>
              <input
                type="text"
                className="form-control rounded"
                value={field.name}
                readOnly
                style={{ maxWidth: '170px' }}
              />
              <input
                type="text"
                className="form-control rounded"
                value={field.placeholder}
                readOnly
                style={{ maxWidth: '170px' }}
              />
              <input
                type="text"
                className="form-control rounded"
                value={field.validation}
                readOnly
                style={{ maxWidth: '170px' }}
              />
              <button
                className="btn position-absolute"
                type="button"
                onClick={() => handleRemoveField(index)}
                style={{
                  right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'red',
                  fontSize: '17px', padding: '4px 8px', height: '25px', width: '25px', border: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '30%'
                }}
              >
                <i className="fi fi-br-cross-circle mt-1"></i>
              </button>
            </div>
          ))}
        </div>

        <button className="bluebtn" onClick={handleSave} style={{ float: 'left' }}>Save </button>
      </div>
    </>
  );
};

export default AddParentCategory;



