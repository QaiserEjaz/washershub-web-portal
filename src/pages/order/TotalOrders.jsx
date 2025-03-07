import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavBar from '../../components/layout/NavBar';
import { useOrders } from '../../context/OrdersContext';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const TotalOrders = () => {
    const { orders } = useOrders();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 8;
    const query = useQuery();
    const vendorName = query.get('vendor');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to first page when searching
    };

    const filteredOrders = Object.values(orders).filter(order => {
        const matchesVendor = !vendorName || order.vendorName === vendorName;
        const matchesSearch = !searchTerm ||
            order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.vendorName.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesVendor && matchesSearch;
    });

    const indexOfLastOrder = currentPage * ordersPerPage;
    const paginatedOrders = filteredOrders.slice(0, indexOfLastOrder);
    const hasMore = filteredOrders.length > indexOfLastOrder;

    const handleLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <>
            <NavBar />
            <div className="p-3">
                <div className='d-flex align-items-center pt-2 mb-4'>
                    <h3 className='pt-2'>Orders</h3>
                    <input
                        type="text"
                        placeholder="Search Orders"
                        className="form-control form-control-sm ms-3"
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{ maxWidth: '150px' }}
                    />
                </div>

                {paginatedOrders.map(order => (
                    <Link
                        key={order.id}
                        to={`/order/${order.id}`}
                        className="text-decoration-none">
                        <div className="customtextfield col-lg-12 d-flex justify-content-between">
                            <span>Order #{order.id}</span>
                            <span>
                                <i className="fi fi-sr-angle-right" />
                            </span>
                        </div>
                    </Link>
                ))}

                {hasMore && (
                    <div className="list-footer mt-4 d-flex justify-content-center">
                        <button onClick={handleLoadMore} className="btn btn-primary">Load More</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default TotalOrders;
