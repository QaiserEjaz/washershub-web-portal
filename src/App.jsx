import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppProvider from "./context/AppContext";  // Changed from named to default import
import { OrdersProvider } from "./context/OrdersContext";
import { ComplaintsProvider } from "./context/ComplaintsContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import Login from "./pages/auth/login.component";
import Home from "./pages/Home";
import TotalVendors from "./pages/vendor/TotalVendors";
import TotalOrders from "./pages/order/TotalOrders";
import VendorInfo from "./pages/vendor/VendorInfo";
import Countries from "./pages/configuration/Countries";
import ProjectConfiguration from "./pages/configuration/ProjectConfiguration";
import OrderDetails from "./pages/order/OrderDetails";
import CommissionManagement from "./pages/configuration/CommissionManagement";
import ParentCategories from "./pages/category/ParentCategories";
import Categories from "./pages/category/Categories";
import AddParentCategory from "./pages/category/AddParentCategory";
import AddCategory from "./pages/category/AddCategory";
import Complaints from "./pages/complaint/Complaints";

function App() {
  return (
    <>
      <AppProvider>
        <OrdersProvider>
          <ComplaintsProvider>
            <CategoriesProvider>
              <Router basename="/washershub-web-portal" >
                <div className="App">
                  <Routes>
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/" element={<Navigate to="/sign-in" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/total-vendors" element={<TotalVendors />} />
                    <Route path="/vendor-info/:id" element={<VendorInfo />} />
                    <Route path="/commission-management" element={<CommissionManagement />} />

                    <Route path="/total-orders" element={<TotalOrders />} />
                    <Route path="/order/:orderId" element={<OrderDetails />} />
                    <Route path="/order/:unique_identifier" element={<OrderDetails />} />

                    <Route path="/project-configuration" element={<ProjectConfiguration />} />
                    <Route path="/countries" element={<Countries />} />

                    <Route path="/parent-categories" element={<ParentCategories />} />
                    <Route path="/categories/:parentId" element={<Categories />} />

                    <Route path="/add-parent-category" element={<AddParentCategory />} />
                    <Route path="/edit-parent-category/:id" element={<AddParentCategory />} />

                    <Route path="/add-category/:parentId" element={<AddCategory />} />
                    <Route path="/add-category/:parentId/:categoryId" element={<AddCategory />} />{" "}

                    <Route path="/complaints" element={<Complaints />} />
                  </Routes>
                </div>
              </Router>
            </CategoriesProvider>
          </ComplaintsProvider>
        </OrdersProvider>
      </AppProvider>
    </>
  );
}

export default App;
