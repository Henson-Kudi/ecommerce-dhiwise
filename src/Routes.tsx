import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SignupLoginModule = React.lazy(() => import("pages/SignupLoginModule"));
const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
const SalesReporting = React.lazy(() => import("pages/SalesReporting"));
const Summarycard = React.lazy(() => import("pages/Summarycard"));
const RefundManagement = React.lazy(() => import("pages/RefundManagement"));
const InventoryTrendAnalysis = React.lazy(
  () => import("pages/InventoryTrendAnalysis"),
);
const RFID = React.lazy(() => import("pages/RFID"));
const GraphicalCharts = React.lazy(() => import("pages/GraphicalCharts"));
const Payments = React.lazy(() => import("pages/Payments"));
const Notifications = React.lazy(() => import("pages/Notifications"));
const QRCode = React.lazy(() => import("pages/QRCode"));
const PaymentAdmin = React.lazy(() => import("pages/PaymentAdmin"));
const WaitingList = React.lazy(() => import("pages/WaitingList"));
const PricingEngine = React.lazy(() => import("pages/PricingEngine"));
const Orderdetailview = React.lazy(() => import("pages/Orderdetailview"));
const Ordersummary = React.lazy(() => import("pages/Ordersummary"));
const InvoiceBilling = React.lazy(() => import("pages/InvoiceBilling"));
const ExpressDelivery = React.lazy(() => import("pages/ExpressDelivery"));
const ExpenseTracking = React.lazy(() => import("pages/ExpenseTracking"));
const AdvancedSearch = React.lazy(() => import("pages/AdvancedSearch"));
const CollectTransactionFees = React.lazy(
  () => import("pages/CollectTransactionFees"),
);
const CustomisedOrderStatus = React.lazy(
  () => import("pages/CustomisedOrderStatus"),
);
const AdhocReporting = React.lazy(() => import("pages/AdhocReporting"));
const ItemAvailability = React.lazy(() => import("pages/ItemAvailability"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/itemavailability" element={<ItemAvailability />} />
          <Route path="/adhocreporting" element={<AdhocReporting />} />
          <Route
            path="/customisedorderstatus"
            element={<CustomisedOrderStatus />}
          />
          <Route
            path="/collecttransactionfees"
            element={<CollectTransactionFees />}
          />
          <Route path="/advancedsearch" element={<AdvancedSearch />} />
          <Route path="/expensetracking" element={<ExpenseTracking />} />
          <Route path="/expressdelivery" element={<ExpressDelivery />} />
          <Route path="/invoicebilling" element={<InvoiceBilling />} />
          <Route path="/ordersummary" element={<Ordersummary />} />
          <Route path="/orderdetailview" element={<Orderdetailview />} />
          <Route path="/pricingengine" element={<PricingEngine />} />
          <Route path="/waitinglist" element={<WaitingList />} />
          <Route path="/paymentadmin" element={<PaymentAdmin />} />
          <Route path="/qrcode" element={<QRCode />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/graphicalcharts" element={<GraphicalCharts />} />
          <Route path="/rfid" element={<RFID />} />
          <Route
            path="/inventorytrendanalysis"
            element={<InventoryTrendAnalysis />}
          />
          <Route path="/refundmanagement" element={<RefundManagement />} />
          <Route path="/summarycard" element={<Summarycard />} />
          <Route path="/salesreporting" element={<SalesReporting />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signuploginmodule" element={<SignupLoginModule />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
