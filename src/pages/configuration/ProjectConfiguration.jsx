import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleSwitch from '../../components/common/ToggleSwitch';
import CustomInputField from '../../components/common/CustomInputField';
import NavBar from '../../components/layout/NavBar';

const ProjectConfiguration = () => {
    const navigate = useNavigate();

    const handleCountryClick = () => {
        navigate('/countries');
    };

    const handleCategoryClick = () => {
        navigate('/parent-categories');
    };

    return (
        <>
            <NavBar />
            <div className="p-4">
                <form>

                    <CustomInputField text='Commission in %' placeholder={10} />

                    <CustomInputField text='Premium Fee' inputinfo='Rs' placeholder={1500} />

                    <CustomInputField text='Latest ios App Version' placeholder={1.2} />

                    <CustomInputField text='Latest Android App Version' placeholder={1.5} />


                    <div className='customtextfield col-lg-2 d-flex justify-content-between align-items-center'>
                        <div>Country</div>
                        <div>
                            <button
                                type="button" className="btn p-0 fw-bolder"
                                onClick={handleCountryClick} style={{ textDecoration: 'none' }}>
                                <i className="fi fi-sr-angle-right" />
                            </button>
                        </div>
                    </div>
                    <div className='customtextfield col-lg-2 d-flex justify-content-between align-items-center'>
                        <div>Categories</div>
                        <div>
                            <button
                                type="button" className="btn p-0 fw-bolder"
                                onClick={handleCategoryClick} style={{ textDecoration: 'none', border: 'none' }}>
                                <i className="fi fi-sr-angle-right" />
                            </button>
                        </div>
                    </div>

                    <div className='col-lg-12 d-flex justify-content-between align-items-center'>
                        <div className=" ms-2 mt-2 align-items-center">Free Mode</div>
                        <div className=" customtextfield col-lg-2 d-flex align-items-center">
                            <ToggleSwitch />
                        </div>
                    </div>

                    <div className="d-flex justify-content-end mt-4">
                        <button type="submit" className="bluebtn" style={{ width: '150px' }}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ProjectConfiguration;
