import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCategories } from '../../context/CategoriesContext';
import NavBar from '../../components/layout/NavBar';


const Categories = () => {
  const { parentId } = useParams();
  const { parentCategories } = useCategories();
  const navigate = useNavigate();
  const parent = parentCategories.find(p => p.id === parseInt(parentId));

  if (!parent) {
    navigate("/parent-categories");
    return null;
  }

  const capitalizeWords = (str) => str.replace(/\b\w/g, char => char.toUpperCase());

  const handleEdit = (category) => {
    navigate(`/add-category/${parent.id}/${category.id}`);
  };

  return (
    <>
      <NavBar />
      <div className="p-3 mt-1">
        <div className='d-flex justify-content-between'>
          <h3>{capitalizeWords(parent.name)}</h3>
          <Link
            to={`/add-category/${parent.id}`}
            className="bluebtn mb-2"
          >
            Add
          </Link>
        </div>
        <div>
          {parent.categories.map((category, index) => (
            <div className='customtextfield col-lg d-flex justify-content-between' key={index}>
              {capitalizeWords(category.name)}
              <button
                className="btn btn-link"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEdit(category);
                }}
                style={{ marginRight: '10px', padding: 0, textDecoration: 'none', color: 'green' }}
              >
                <i className='fi fi-br-pencil' />
              </button>
            </div>
          ))}
          <Link to="/parent-categories" className="btn btn-secondary mt-3">Back to Parent Categories</Link>
        </div>
      </div>
    </>
  );
};

export default Categories;
