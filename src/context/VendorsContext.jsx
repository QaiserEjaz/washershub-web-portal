import React, { createContext, useContext, useState } from 'react';

const VendorsContext = createContext();

export const useVendors = () => {
    return useContext(VendorsContext);
};

export const VendorsProvider = ({ children }) => {
    const [vendors, setVendors] = useState([
        { id: '1', name: 'FabCar Wash', status: 'Active', totalOrders: 156, contactNumber: '1234567890', email: 'contact@fabcarwash.com', vendorName: 'FabCar Wash', address: '123 Street', latitude: '40.7128', longitude: '-74.0060', area: ['Karachi', 'Hyderabad', 'Sukkur'] },
        { id: '2', name: 'SpeedWash Pro', status: 'Active', totalOrders: 145, contactNumber: '3334445555', email: 'info@speedwash.com', vendorName: 'SpeedWash Pro', address: '101 Main St', latitude: '31.5204', longitude: '74.3587', area: ['Lahore', 'Gujranwala', 'Sialkot'] },
        { id: '3', name: 'Clean Masters', status: 'Active', totalOrders: 98, contactNumber: '6667778888', email: 'service@cleanmasters.com', vendorName: 'Clean Masters', address: '202 Park Road', latitude: '24.8607', longitude: '67.0011', area: ['Karachi', 'Hyderabad'] },
        { id: '4', name: 'Auto Sparkle', status: 'Inactive', totalOrders: 67, contactNumber: '9990001111', email: 'care@autosparkle.com', vendorName: 'Auto Sparkle', address: '303 Lake View', latitude: '33.6007', longitude: '73.0679', area: ['Islamabad', 'Rawalpindi'] },
        { id: '5', name: 'Car Care Plus', status: 'Active', totalOrders: 234, contactNumber: '2223334444', email: 'support@carcare.com', vendorName: 'Car Care Plus', address: '404 Hill Road', latitude: '25.3960', longitude: '68.3578', area: ['Hyderabad', 'Mirpur'] },
        { id: '6', name: 'Wash Kings', status: 'Active', totalOrders: 189, contactNumber: '5556667777', email: 'hello@washkings.com', vendorName: 'Wash Kings', address: '505 River Side', latitude: '30.1575', longitude: '71.5249', area: ['Multan', 'Bahawalpur'] },
        { id: '7', name: 'Elite Washers', status: 'Inactive', totalOrders: 78, contactNumber: '8889990000', email: 'elite@washers.com', vendorName: 'Elite Washers', address: '606 Beach Road', latitude: '34.0151', longitude: '71.5249', area: ['Peshawar', 'Nowshera'] },
        { id: '8', name: 'Swift Clean', status: 'Active', totalOrders: 167, contactNumber: '1112223333', email: 'swift@clean.com', vendorName: 'Swift Clean', address: '707 Mall Road', latitude: '31.4504', longitude: '74.3087', area: ['Lahore', 'Kasur'] },
        { id: '9', name: 'Shine Express', status: 'Active', totalOrders: 145, contactNumber: '4445556666', email: 'shine@express.com', vendorName: 'Shine Express', address: '808 Canal Road', latitude: '33.7294', longitude: '73.0931', area: ['Islamabad', 'Murree'] },
        { id: '10', name: 'Pro Washers', status: 'Active', totalOrders: 198, contactNumber: '7778889999', email: 'pro@washers.com', vendorName: 'Pro Washers', address: '909 Green Town', latitude: '24.9056', longitude: '67.0822', area: ['Karachi', 'Thatta'] }
    ]);

    const updateVendor = (updatedVendor) => {
        setVendors(vendors.map(vendor => (vendor.id === updatedVendor.id ? updatedVendor : vendor)));
    };

    const removeVendor = (id) => {
        setVendors(vendors.filter(vendor => vendor.id !== id));
    };

    return (
        <VendorsContext.Provider value={{ vendors, updateVendor, removeVendor }}>
            {children}
        </VendorsContext.Provider>
    );
};








// import React, { createContext, useContext, useState, useEffect } from 'react';
// import apiClient from '../networking/apiClient';
// import { API_METHODS, API_PATHS } from '../networking/networkConstants';

// const VendorsContext = createContext();

// export const useVendors = () => {
//     return useContext(VendorsContext);
// };

// export const VendorsProvider = ({ children }) => {
//     const [vendors, setVendors] = useState([]);
//     const [totalVendors, setTotalVendors] = useState(0);
//     const [totalPages, setTotalPages] = useState(0);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchVendors = async () => {
//             try {
//                 const result = await apiClient.request(API_PATHS.VENDORS, API_METHODS.GET);
//                 if (result.status === 200 ) {
//                     console.log(result)
//                     const { items, total_items, total_pages, current_page } = result.data;
//                     setVendors(items);
//                     setTotalVendors(total_items);
//                     setTotalPages(total_pages);
//                     setCurrentPage(current_page);
//                 } else {
//                     setError(result.message);
//                 }
//             } catch (err) {
//                 setError('An error occurred while fetching vendors.');
//                 console.error(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchVendors();
//     }, []);

//     const updateVendor = async (updatedVendor) => {
//         try {
//             const result = await apiClient.request(`${API_PATHS.VENDORS}/${updatedVendor.id}`, API_METHODS.PUT, updatedVendor);
//             if (result.status === 200) {
//                 const { items } = result.data;
//                 setVendors(items.map(vendor => (vendor.id === updatedVendor.id ? updatedVendor : vendor)));
//             } else {
//                 setError(result.message);
//             }
//         } catch (err) {
//             setError('An error occurred while updating the vendor.');
//             console.error(err.message);
//         }
//     };

//     const removeVendor = async (id) => {
//         try {
//             const result = await apiClient.request(`${API_PATHS.VENDORS}/${id}`, API_METHODS.DELETE);
//             if (result.status === 200) {
//                 const { items } = result.data;
//                 setVendors(items.filter(vendor => vendor.id !== id));
//             } else {
//                 setError(result.message);
//             }
//         } catch (err) {
//             setError('An error occurred while removing the vendor.');
//             console.error(err.message);
//         }
//     };

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p style={{ color: 'red' }}>{error}</p>;

//     return (
//         <VendorsContext.Provider value={{ vendors, totalVendors, totalPages, currentPage, updateVendor, removeVendor }}>
//             {children}
//         </VendorsContext.Provider>
//     );
// };
