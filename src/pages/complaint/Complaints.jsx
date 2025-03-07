import React from 'react';
import { useComplaints } from '../../context/ComplaintsContext';
import NavBar from '../../components/layout/NavBar';

const Complaints = () => {
  const { complaints } = useComplaints();

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'resolved':
        return 'text-success';
      case 'pending':
        return 'text-danger';
      case 'in progress':
        return 'text-warning';
      default:
        return 'text-secondary';
    }
  };

  return (
    <>
      <NavBar />
      <div className="p-4">
        <h3 className="mb-4">Customer Complaints</h3>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Vendor</th>
                <th>Date</th>
                <th>Status</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id}>
                  <td>#{complaint.id}</td>
                  <td>{complaint.customerName}</td>
                  <td>{complaint.vendorName}</td>
                  <td>{complaint.date}</td>
                  <td className={getStatusColor(complaint.status)}>
                    {complaint.status}
                  </td>
                  <td>{complaint.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Complaints;