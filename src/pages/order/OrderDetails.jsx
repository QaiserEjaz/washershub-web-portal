import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/layout/NavBar';
import { useOrders } from '../../context/OrdersContext';

const OrderDetails = () => {
    const { orderId } = useParams();
    const { orders } = useOrders();
    const order = orders[orderId];

    if (!order) {
        return <div>Order not found</div>;
    }

    return (
        <>
            <NavBar />
            <div className="p-4">
                <div className="col-lg-12 d-flex justify-content-between ">
                    <div className='d-flex flex-column'>
                        <h4 className=''>Orders #{order.id}</h4>
                        <h2 className='' style={{ color: 'blue' }}>{order.vendorName}</h2>
                        <h6 className=''>{order.service}</h6>
                    </div>

                    <div className='d-flex flex-column align-items-end text-right'>
                        <h3> Date: {order.date}</h3>
                        <h3>Time: {order.time}</h3>
                    </div>
                </div>

                <div className='col-12'>
                    <div className="customtextfield d-flex justify-content-between">
                        <span>Order Amount</span>
                        <span>Rs. {order.orderAmount}</span>
                    </div>
                    <hr />
                    <div className="customtextfield d-flex justify-content-between ">
                        <span>Commission Amount</span>
                        <span>Rs. {order.commissionAmount}</span>
                    </div>
                    <hr />
                    <div className="text-start d-flex flex-column">
                        <h4 style={{ textDecoration: 'underline' }}>Service Offered:</h4>
                        <span>{order.serviceOffered}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDetails;
