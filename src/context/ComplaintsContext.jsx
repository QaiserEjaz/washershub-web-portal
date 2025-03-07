import React, { createContext, useContext, useState } from 'react';

const ComplaintsContext = createContext();

export const ComplaintsProvider = ({ children }) => {
  const [complaints] = useState([
    {
      id: 1,
      customerName: "John Doe",
      vendorName: "Clean Pro Services",
      date: "2024-03-15",
      status: "Pending",
      description: "Service delayed by more than 2 hours"
    },
    {
      id: 2,
      customerName: "Jane Smith",
      vendorName: "Express Washers",
      date: "2024-03-14",
      status: "Resolved",
      description: "Incomplete cleaning service"
    },
    {
      id: 3,
      customerName: "Mike Johnson",
      vendorName: "Clean Pro Services",
      date: "2024-03-13",
      status: "In Progress",
      description: "Wrong service provided"
    },
    {
      id: 4,
      customerName: "Sarah Wilson",
      vendorName: "Swift Clean",
      date: "2024-03-15",
      status: "Pending",
      description: "Damaged vehicle during service"
    },
    {
      id: 5,
      customerName: "Robert Brown",
      vendorName: "Elite Washers",
      date: "2024-03-15",
      status: "Pending",
      description: "No-show for scheduled appointment"
    },
    {
      id: 6,
      customerName: "Emily Davis",
      vendorName: "Pro Washers",
      date: "2024-03-14",
      status: "Resolved",
      description: "Poor quality service"
    },
    {
      id: 7,
      customerName: "Tom Anderson",
      vendorName: "Clean Pro Services",
      date: "2024-03-15",
      status: "Pending",
      description: "Overcharged for services"
    }
  ]);

  return (
    <ComplaintsContext.Provider value={{ complaints }}>
      {children}
    </ComplaintsContext.Provider>
  );
};

export const useComplaints = () => useContext(ComplaintsContext);