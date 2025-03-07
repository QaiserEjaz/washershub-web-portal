// import React, { useState, useEffect, forwardRef } from 'react';

// const VendorForm = forwardRef((props, ref) => {
//     const [formData, setFormData] = useState({
//         contactNumber: '',
//         email: '',
//         vendorName: '',
//         address: '',
//         latitude: '',
//         longitude: '',
//         area: '' 
//     });

//     const [availableAreas, setAvailableAreas] = useState([]);

//     useEffect(() => {
//         if (props.initialData) {
//             setFormData({
//                 ...props.initialData,
//                 area: '' 
//             });
//             setAvailableAreas(props.initialData.area || []); 
//         }
//     }, [props.initialData]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//         if (name === 'vendorName') {
//             props.onNameChange(value);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         // send data to the server
//     };

//     return (
//         <div className="m-4">
//             <form onSubmit={handleSubmit} ref={ref}>
//                 <div className="mb-2">
//                     <input
//                         type="tel"
//                         className="form-control"
//                         name="contactNumber"
//                         placeholder="Contact Number"
//                         value={formData.contactNumber}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-2">
//                     <input
//                         type="email"
//                         className="form-control"
//                         name="email"
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-2">
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="vendorName"
//                         placeholder="Vendor Name"
//                         value={formData.vendorName}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-2">
//                     <input
//                         type="text"
//                         className="form-control"
//                         name="address"
//                         placeholder="Address"
//                         value={formData.address}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className='col-lg-12 d-flex'>
//                     <div className="mb-2 col-lg-3">
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="latitude"
//                             placeholder="Map Latitude"
//                             value={formData.latitude}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="mb-2 col-lg-3 ms-2">
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="longitude"
//                             placeholder="Map Longitude"
//                             value={formData.longitude}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                 </div>
//                 <div className="mb-2">
//                     <select
//                         className="form-select"
//                         name="area"
//                         value={formData.area}
//                         onChange={handleChange}
//                         required
//                     >
//                         <option value="">Select an area</option>
//                         {availableAreas.map((areaOption, index) => (
//                             <option key={index} value={areaOption}>
//                                 {areaOption}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </form>
//         </div>
//     );
// });

// export default VendorForm;





import React, { useState, useEffect, forwardRef } from 'react';

const VendorForm = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        contactNumber: '',
        email: '',
        vendorName: '',
        address: '',
        latitude: '',
        longitude: '',
        area: '' 
    });

    const [availableAreas, setAvailableAreas] = useState([]);

    useEffect(() => {
        if (props.initialData) {
            setFormData({
                contactNumber: props.initialData.contactNumber || '',
                email: props.initialData.email || '',
                vendorName: props.initialData.shop_name || '',
                address: props.initialData.address || '',
                latitude: props.initialData.lat || '',
                longitude: props.initialData.long || '',
                area: props.initialData.area || ''
            });
            setAvailableAreas(props.initialData.area || []);
        }
    }, [props.initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (name === 'vendorName') {
            props.onNameChange(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // send data to the server
    };

    return (
        <div className="m-4">
            <form onSubmit={handleSubmit} ref={ref}>
                <div className="mb-2">
                    <input
                        type="tel"
                        className="form-control"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        name="vendorName"
                        placeholder="Vendor Name"
                        value={formData.vendorName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='col-lg-12 d-flex'>
                    <div className="mb-2 col-lg-3">
                        <input
                            type="text"
                            className="form-control"
                            name="latitude"
                            placeholder="Map Latitude"
                            value={formData.latitude}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-2 col-lg-3 ms-2">
                        <input
                            type="text"
                            className="form-control"
                            name="longitude"
                            placeholder="Map Longitude"
                            value={formData.longitude}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="mb-2">
                    <select
                        className="form-select"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an area</option>
                        {availableAreas.map((areaOption, index) => (
                            <option key={index} value={areaOption}>
                                {areaOption}
                            </option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    );
});

export default VendorForm;
