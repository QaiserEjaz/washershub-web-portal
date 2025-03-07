// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import NavBar from '../../components/layout/NavBar';

// const VendorInfo = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [vendor, setVendor] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     status: 'Active',
//     rating: 0,
//     totalOrders: 0,
//     completedOrders: 0,
//     pendingOrders: 0,
//     cancelledOrders: 0
//   });

//   useEffect(() => {
//     // TODO: Fetch vendor data from API
//     // For now using mock data
//     setVendor({
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       phone: '+1234567890',
//       address: '123 Main St, City, Country',
//       status: 'Active',
//       rating: 4.5,
//       totalOrders: 150,
//       completedOrders: 120,
//       pendingOrders: 20,
//       cancelledOrders: 10
//     });
//   }, [id]);

//   return (
//     <>
//       <NavBar />
//       <div className="container mt-4">
//         <div className="row">
//           <div className="col-md-8 offset-md-2">
//             <div className="card">
//               <div className="card-header bg-primary text-white">
//                 <h3 className="mb-0">Vendor Information</h3>
//               </div>
//               <div className="card-body">
//                 <div className="row mb-3">
//                   <div className="col-md-6">
//                     <h5>Basic Information</h5>
//                     <p><strong>Name:</strong> {vendor.name}</p>
//                     <p><strong>Email:</strong> {vendor.email}</p>
//                     <p><strong>Phone:</strong> {vendor.phone}</p>
//                     <p><strong>Address:</strong> {vendor.address}</p>
//                     <p><strong>Status:</strong> 
//                       <span className={`badge ${vendor.status === 'Active' ? 'bg-success' : 'bg-danger'} ms-2`}>
//                         {vendor.status}
//                       </span>
//                     </p>
//                     <p><strong>Rating:</strong> {vendor.rating} / 5</p>
//                   </div>
//                   <div className="col-md-6">
//                     <h5>Order Statistics</h5>
//                     <div className="list-group">
//                       <div className="list-group-item">
//                         <div className="d-flex justify-content-between">
//                           <span>Total Orders:</span>
//                           <strong>{vendor.totalOrders}</strong>
//                         </div>
//                       </div>
//                       <div className="list-group-item">
//                         <div className="d-flex justify-content-between">
//                           <span>Completed Orders:</span>
//                           <strong className="text-success">{vendor.completedOrders}</strong>
//                         </div>
//                       </div>
//                       <div className="list-group-item">
//                         <div className="d-flex justify-content-between">
//                           <span>Pending Orders:</span>
//                           <strong className="text-warning">{vendor.pendingOrders}</strong>
//                         </div>
//                       </div>
//                       <div className="list-group-item">
//                         <div className="d-flex justify-content-between">
//                           <span>Cancelled Orders:</span>
//                           <strong className="text-danger">{vendor.cancelledOrders}</strong>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-end">
//                   <button 
//                     className="btn btn-secondary me-2" 
//                     onClick={() => navigate('/total-vendors')}
//                   >
//                     Back to Vendors
//                   </button>
//                   <button className="btn btn-primary">
//                     Edit Vendor
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VendorInfo;


import React, { useRef, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import CustomTextField from '../../components/common/CustomTextField';
import ToggleSwitch from '../../components/common/ToggleSwitch';
import VendorForm from '../../components/VendorForm';
import NavBar from '../../components/layout/NavBar';
import { useVendors } from '../../context/VendorsContext';
import { useOrders } from '../../context/OrdersContext';  // Add this import

export default function VendorInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const { vendors, updateVendor, removeVendor } = useVendors();
  const { orders } = useOrders();  // Add this line
  const vendor = vendors.find(v => v.id.toString() === id);

  // Calculate order statistics
  const vendorOrders = Object.values(orders).filter(order => order.vendorName === vendor?.name);
  const totalOrders = vendorOrders.length;
  
  const [vendorStatus, setVendorStatus] = useState(vendor?.status || '');
  const [vendorName, setVendorName] = useState(vendor?.name || '');

  useEffect(() => {
    if (vendor) {
      setVendorStatus(vendor.status);
      setVendorName(vendor.name);
    }
  }, [vendor]);

  const handleToggle = (newStatus) => {
    setVendorStatus(newStatus);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to save changes?")) {
      const updatedVendor = { ...vendor, name: vendorName, status: vendorStatus };
      updateVendor(updatedVendor);
      navigate('/total-vendors');
    }
  };

  const handleNameChange = (newName) => {
    setVendorName(newName);
  };

  if (!vendor) {
    return <div>Vendor not found</div>;
  }

  return (
    <div>
      <NavBar />
      <div className='col-lg-12 container-fluid d-flex justify-content-between p-3'>
        <div className='customtextfield col-lg-2 d-flex'>
          <ToggleSwitch initialState={vendorStatus} onToggle={handleToggle} />
        </div>
        <button
          type='button'
          onClick={handleSubmit}
          className="bluebtn top-right"
          style={{ width: '150px', height: '40px' }}
        >
          Save
        </button>
      </div>
      <div className='textfieldouterpart'>
        <Link to={`/total-orders?vendor=${vendor.name}`} style={{ textDecoration: 'none' }}>
          <CustomTextField text='Total Orders' number={totalOrders} icon="fi fi-sr-angle-right" />
        </Link>
        <Link to={'/commission-management'} style={{ textDecoration: 'none' }}>
          <CustomTextField text='Commission Management' icon="fi fi-sr-angle-right" />
        </Link>
      </div>
      <VendorForm ref={formRef} initialData={vendor} onNameChange={handleNameChange} />

      <button
        type="button"
        className="redbtn"
        onClick={() => {
          if (window.confirm('Are you sure you want to delete this vendor?')) {
            // console.log(vendor)
            removeVendor(vendor.id);
            navigate('/total-vendors');
          }
        }}
        style={{ marginLeft: '10px' }}
      >
        Delete <i className="fi fi-ts-delete-user ms-1" />
      </button>
    </div>
  );
}
