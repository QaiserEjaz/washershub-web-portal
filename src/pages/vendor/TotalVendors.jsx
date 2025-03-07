import React from 'react';
import { Link } from 'react-router-dom';
import CustomTextField from '../../components/common/CustomTextField';
import NavBar from '../../components/layout/NavBar';
import { useVendors } from '../../context/VendorsContext';

export default function TotalVendors() {
  const { vendors } = useVendors();

  return (
    <div>
      <NavBar />
      <div className='col-lg-12 container-fluid d-flex justify-content-between p-3'>
        <h3 className='mt-2'>Vendors</h3>
        <span>
          <button type="button" className="redbtn top-right"> Unpaid Vendors </button>
        </span>
      </div>
      <div className='textfieldouterpart'>
        {vendors.map(vendor => (
          <div key={vendor.id} className="d-flex justify-content-between align-items-center">
            <Link to={`/vendor-info/${vendor.id}`} style={{ textDecoration: 'none', flexGrow: 1 }}>
              <CustomTextField
                text={vendor.name}
                state={vendor.status}
                color={vendor.status === 'Active' ? 'green' : 'red'}
                icon="fi fi-sr-angle-right"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
