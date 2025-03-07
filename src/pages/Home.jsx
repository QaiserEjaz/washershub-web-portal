import ClickableCard from '../components/common/ClickableCard';
import { Link } from 'react-router-dom';
import CustomTextField from '../components/common/CustomTextField';
import NavBar from '../components/layout/NavBar';
import { useVendors } from '../context/VendorsContext';
import { useOrders } from '../context/OrdersContext';
import { useComplaints } from '../context/ComplaintsContext';


export default function Home() {
    const { vendors } = useVendors();
    const { orders } = useOrders();
    const { complaints } = useComplaints();
    const vendorCount = vendors.length;
    const orderCount = Object.keys(orders).length;
    const pendingComplaints = complaints.filter(c => c.status.toLowerCase() === 'pending').length;

    return (
        <>
            <NavBar />
            <div className='homepage'>
                <div className='d-flex flex-wrap p-3'>
                    <Link to={'/total-vendors'} style={{ textDecoration: 'none' }}>
                        <ClickableCard text='Total Vendors' data={vendorCount} boxColor='#1DD4FF' textColor='white' />
                    </Link>

                    <ClickableCard text='Total Users' data='156' boxColor='#B3FF5C' textColor='#19A900' />

                    <Link to={'/total-orders'} style={{ textDecoration: 'none' }}>
                        <ClickableCard text='Total Orders' data={orderCount} boxColor='#FF9624' textColor='white' />
                    </Link>
                </div>

                <div className='textfieldouterpart'>
                    <Link to="/complaints" style={{ textDecoration: 'none' }}>
                        <CustomTextField
                            text='Complaints'
                            number={pendingComplaints}
                            icon="fi fi-sr-angle-right"
                            color={pendingComplaints > 0 ? 'red' : undefined}
                            state={pendingComplaints > 0 ? `${pendingComplaints} Pending` : undefined}
                        />
                    </Link>
                    <CustomTextField text='Accounts' icon="fi fi-sr-angle-right" />
                    <Link to={'/project-configuration'} style={{ textDecoration: 'none' }}>
                        <CustomTextField text='Project Configuration' icon="fi fi-sr-angle-right" />
                    </Link>
                </div>

                <button type="button" className="bluebtn bottom-left"> Create Vendors </button>
            </div>
        </>
    );
}
