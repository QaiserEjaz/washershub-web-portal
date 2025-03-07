import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useComplaints } from '../context/ComplaintsContext';

const ComplaintsOverview = () => {
  const navigate = useNavigate();
  const { complaints } = useComplaints();

  const pendingComplaints = complaints.filter(c => c.status.toLowerCase() === 'pending').length;

  return (
    <div
      className="customtextfield col-lg-12 d-flex justify-content-between align-items-center"
      onClick={() => navigate('/complaints')}
      style={{ cursor: 'pointer' }}
    >
      <div>
        <span>Complaints</span>
        {pendingComplaints > 0 && (
          <span className="badge bg-danger ms-2">{pendingComplaints}</span>
        )}
      </div>
      <i className="fi fi-sr-angle-right"></i>
    </div>
  );
};

export default ComplaintsOverview;