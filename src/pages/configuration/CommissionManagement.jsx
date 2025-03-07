import React from 'react';
import CustomTextField from '../../components/common/CustomTextField';
import NavBar from '../../components/layout/NavBar';


export default function CommissionManagement() {
  return (
    <div>
      <NavBar />
      <div className='p-4'>
        <CustomTextField text='January,2024' color='green' state='Paid' icon="fi fi-sr-angle-right" />
        <CustomTextField text='February,2024' color='red' state='Unpaid' icon="fi fi-sr-angle-right" />
        <CustomTextField text='March,2024' color='green' state='Paid' icon="fi fi-sr-angle-right" />
      </div>
    </div>
  )
}
