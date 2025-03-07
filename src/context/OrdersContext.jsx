import React, { createContext, useContext, useState } from 'react';

const OrdersContext = createContext();

export const useOrders = () => {
    return useContext(OrdersContext);
};

export const OrdersProvider = ({ children }) => {
    const [orders] = useState({
        // FabCar Wash Orders (5 orders)
        ORD001: { id: 'ORD001', unique_identifier: 'ORD001', date: '12/4/2024', time: '09:00 AM - 10:00 AM', vendorName: 'FabCar Wash', service: 'Car Exterior Wash', orderAmount: 2500, commissionAmount: 250, serviceOffered: 'Premium Exterior Wash with Wax', status: 'Completed' },
        ORD002: { id: 'ORD002', unique_identifier: 'ORD002', date: '12/4/2024', time: '10:00 AM - 11:00 AM', vendorName: 'FabCar Wash', service: 'Full Service Wash', orderAmount: 4500, commissionAmount: 450, serviceOffered: 'Complete Interior & Exterior Cleaning', status: 'Pending' },
        ORD003: { id: 'ORD003', unique_identifier: 'ORD003', date: '12/7/2024', time: '09:00 AM - 10:00 AM', vendorName: 'FabCar Wash', service: 'Interior Cleaning', orderAmount: 3000, commissionAmount: 300, serviceOffered: 'Deep Interior Cleaning', status: 'Completed' },
        ORD004: { id: 'ORD004', unique_identifier: 'ORD004', date: '12/7/2024', time: '11:00 AM - 12:00 PM', vendorName: 'FabCar Wash', service: 'Polish Service', orderAmount: 5000, commissionAmount: 500, serviceOffered: 'Premium Polish and Wax', status: 'Cancelled' },
        ORD005: { id: 'ORD005', unique_identifier: 'ORD005', date: '12/7/2024', time: '02:00 PM - 03:00 PM', vendorName: 'FabCar Wash', service: 'Express Wash', orderAmount: 1800, commissionAmount: 180, serviceOffered: 'Quick Exterior Wash', status: 'Pending' },
        
        // SpeedWash Pro Orders (4 orders)
        ORD006: { id: 'ORD006', unique_identifier: 'ORD006', date: '12/4/2024', time: '11:00 AM - 12:00 PM', vendorName: 'SpeedWash Pro', service: 'Express Wash', orderAmount: 1500, commissionAmount: 150, serviceOffered: 'Quick Exterior Wash', status: 'Completed' },
        ORD007: { id: 'ORD007', unique_identifier: 'ORD007', date: '12/4/2024', time: '12:00 PM - 01:00 PM', vendorName: 'SpeedWash Pro', service: 'Interior Detailing', orderAmount: 3500, commissionAmount: 350, serviceOffered: 'Deep Interior Cleaning', status: 'Pending' },
        ORD008: { id: 'ORD008', unique_identifier: 'ORD008', date: '12/8/2024', time: '09:00 AM - 10:00 AM', vendorName: 'SpeedWash Pro', service: 'Full Detail', orderAmount: 6000, commissionAmount: 600, serviceOffered: 'Complete Car Detailing', status: 'Completed' },
        ORD009: { id: 'ORD009', unique_identifier: 'ORD009', date: '12/8/2024', time: '11:00 AM - 12:00 PM', vendorName: 'SpeedWash Pro', service: 'Wash & Wax', orderAmount: 4000, commissionAmount: 400, serviceOffered: 'Exterior Wash with Wax', status: 'Cancelled' },
        
        // Clean Masters Orders (4 orders)
        ORD010: { id: 'ORD010', unique_identifier: 'ORD010', date: '12/4/2024', time: '01:00 PM - 02:00 PM', vendorName: 'Clean Masters', service: 'Premium Package', orderAmount: 6000, commissionAmount: 600, serviceOffered: 'Complete Car Care Package', status: 'Completed' },
        ORD011: { id: 'ORD011', unique_identifier: 'ORD011', date: '12/8/2024', time: '02:00 PM - 03:00 PM', vendorName: 'Clean Masters', service: 'Basic Wash', orderAmount: 2000, commissionAmount: 200, serviceOffered: 'Basic Exterior Wash', status: 'Pending' },
        ORD012: { id: 'ORD012', unique_identifier: 'ORD012', date: '12/8/2024', time: '04:00 PM - 05:00 PM', vendorName: 'Clean Masters', service: 'Interior Clean', orderAmount: 2500, commissionAmount: 250, serviceOffered: 'Basic Interior Cleaning', status: 'Cancelled' },
        ORD013: { id: 'ORD013', unique_identifier: 'ORD013', date: '12/9/2024', time: '10:00 AM - 11:00 AM', vendorName: 'Clean Masters', service: 'Full Detail', orderAmount: 5500, commissionAmount: 550, serviceOffered: 'Premium Detailing', status: 'Completed' },
        
        // Car Care Plus Orders (5 orders)
        ORD014: { id: 'ORD014', unique_identifier: 'ORD014', date: '12/5/2024', time: '09:00 AM - 10:00 AM', vendorName: 'Car Care Plus', service: 'Deluxe Package', orderAmount: 5500, commissionAmount: 550, serviceOffered: 'Premium Interior & Exterior Service', status: 'Completed' },
        ORD015: { id: 'ORD015', unique_identifier: 'ORD015', date: '12/5/2024', time: '10:00 AM - 11:00 AM', vendorName: 'Car Care Plus', service: 'Basic Wash', orderAmount: 2000, commissionAmount: 200, serviceOffered: 'Basic Exterior Cleaning', status: 'Pending' },
        ORD016: { id: 'ORD016', unique_identifier: 'ORD016', date: '12/6/2024', time: '11:00 AM - 12:00 PM', vendorName: 'Car Care Plus', service: 'Steam Clean', orderAmount: 3500, commissionAmount: 350, serviceOffered: 'Steam Cleaning Service', status: 'Cancelled' },
        ORD017: { id: 'ORD017', unique_identifier: 'ORD017', date: '12/7/2024', time: '02:00 PM - 03:00 PM', vendorName: 'Car Care Plus', service: 'Polish Service', orderAmount: 4000, commissionAmount: 400, serviceOffered: 'Premium Polish', status: 'Completed' },
        ORD018: { id: 'ORD018', unique_identifier: 'ORD018', date: '12/8/2024', time: '03:00 PM - 04:00 PM', vendorName: 'Car Care Plus', service: 'Interior Detail', orderAmount: 3800, commissionAmount: 380, serviceOffered: 'Deep Interior Cleaning', status: 'Pending' },
        
        // Wash Kings Orders (4 orders)
        ORD019: { id: 'ORD019', unique_identifier: 'ORD019', date: '12/5/2024', time: '11:00 AM - 12:00 PM', vendorName: 'Wash Kings', service: 'Steam Wash', orderAmount: 3000, commissionAmount: 300, serviceOffered: 'Steam Cleaning Service', status: 'Completed' },
        ORD020: { id: 'ORD020', unique_identifier: 'ORD020', date: '12/6/2024', time: '09:00 AM - 10:00 AM', vendorName: 'Wash Kings', service: 'Full Service', orderAmount: 4500, commissionAmount: 450, serviceOffered: 'Complete Cleaning Package', status: 'Pending' },
        ORD021: { id: 'ORD021', unique_identifier: 'ORD021', date: '12/7/2024', time: '10:00 AM - 11:00 AM', vendorName: 'Wash Kings', service: 'Interior Detail', orderAmount: 3800, commissionAmount: 380, serviceOffered: 'Premium Interior Service', status: 'Cancelled' },
        ORD022: { id: 'ORD022', unique_identifier: 'ORD022', date: '12/8/2024', time: '01:00 PM - 02:00 PM', vendorName: 'Wash Kings', service: 'Express Clean', orderAmount: 2200, commissionAmount: 220, serviceOffered: 'Quick Clean Service', status: 'Completed' },
        
        // Swift Clean Orders (4 orders)
        ORD023: { id: 'ORD023', unique_identifier: 'ORD023', date: '12/5/2024', time: '02:00 PM - 03:00 PM', vendorName: 'Swift Clean', service: 'Quick Wash', orderAmount: 1800, commissionAmount: 180, serviceOffered: 'Express Cleaning Service', status: 'Completed' },
        ORD024: { id: 'ORD024', unique_identifier: 'ORD024', date: '12/5/2024', time: '03:00 PM - 04:00 PM', vendorName: 'Swift Clean', service: 'Polish Service', orderAmount: 4000, commissionAmount: 400, serviceOffered: 'Car Polish and Wax', status: 'Pending' },
        ORD025: { id: 'ORD025', unique_identifier: 'ORD025', date: '12/6/2024', time: '10:00 AM - 11:00 AM', vendorName: 'Swift Clean', service: 'Deep Clean', orderAmount: 5000, commissionAmount: 500, serviceOffered: 'Deep Cleaning Package', status: 'Cancelled' },
        ORD026: { id: 'ORD026', unique_identifier: 'ORD026', date: '12/7/2024', time: '11:00 AM - 12:00 PM', vendorName: 'Swift Clean', service: 'Full Detail', orderAmount: 5500, commissionAmount: 550, serviceOffered: 'Premium Detailing', status: 'Completed' },
        
        // Pro Washers Orders (5 orders)
        ORD027: { id: 'ORD027', unique_identifier: 'ORD027', date: '12/6/2024', time: '09:00 AM - 10:00 AM', vendorName: 'Pro Washers', service: 'Deep Clean', orderAmount: 5000, commissionAmount: 500, serviceOffered: 'Deep Cleaning Package', status: 'Completed' },
        ORD028: { id: 'ORD028', unique_identifier: 'ORD028', date: '12/6/2024', time: '10:00 AM - 11:00 AM', vendorName: 'Pro Washers', service: 'Express Service', orderAmount: 2200, commissionAmount: 220, serviceOffered: 'Quick Service Package', status: 'Pending' },
        ORD029: { id: 'ORD029', unique_identifier: 'ORD029', date: '12/7/2024', time: '11:00 AM - 12:00 PM', vendorName: 'Pro Washers', service: 'Premium Wash', orderAmount: 4200, commissionAmount: 420, serviceOffered: 'Premium Cleaning Service', status: 'Cancelled' },
        ORD030: { id: 'ORD030', unique_identifier: 'ORD030', date: '12/8/2024', time: '02:00 PM - 03:00 PM', vendorName: 'Pro Washers', service: 'Interior Detail', orderAmount: 3500, commissionAmount: 350, serviceOffered: 'Deep Interior Clean', status: 'Completed' },
        ORD031: { id: 'ORD031', unique_identifier: 'ORD031', date: '12/9/2024', time: '10:00 AM - 11:00 AM', vendorName: 'Pro Washers', service: 'Full Service', orderAmount: 6000, commissionAmount: 600, serviceOffered: 'Complete Detail Package', status: 'Pending' }
    });

    return (
        <OrdersContext.Provider value={{ orders }}>
            {children}
        </OrdersContext.Provider>
    );
};