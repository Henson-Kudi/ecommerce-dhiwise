import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/itemavailability">ItemAvailability</Link>
        </li>
        <li>
          <Link to="/adhocreporting">AdhocReporting</Link>
        </li>
        <li>
          <Link to="/customisedorderstatus">CustomisedOrderStatus</Link>
        </li>
        <li>
          <Link to="/collecttransactionfees">CollectTransactionFees</Link>
        </li>
        <li>
          <Link to="/advancedsearch">AdvancedSearch</Link>
        </li>
        <li>
          <Link to="/expensetracking">ExpenseTracking</Link>
        </li>
        <li>
          <Link to="/expressdelivery">ExpressDelivery</Link>
        </li>
        <li>
          <Link to="/invoicebilling">InvoiceBilling</Link>
        </li>
        <li>
          <Link to="/ordersummary">Ordersummary</Link>
        </li>
        <li>
          <Link to="/orderdetailview">Orderdetailview</Link>
        </li>
        <li>
          <Link to="/pricingengine">PricingEngine</Link>
        </li>
        <li>
          <Link to="/waitinglist">WaitingList</Link>
        </li>
        <li>
          <Link to="/paymentadmin">PaymentAdmin</Link>
        </li>
        <li>
          <Link to="/qrcode">QRCode</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/payments">Payments</Link>
        </li>
        <li>
          <Link to="/graphicalcharts">GraphicalCharts</Link>
        </li>
        <li>
          <Link to="/rfid">RFID</Link>
        </li>
        <li>
          <Link to="/inventorytrendanalysis">InventoryTrendAnalysis</Link>
        </li>
        <li>
          <Link to="/refundmanagement">RefundManagement</Link>
        </li>
        <li>
          <Link to="/summarycard">Summarycard</Link>
        </li>
        <li>
          <Link to="/salesreporting">SalesReporting</Link>
        </li>
        <li>
          <Link to="/forgotpassword">ForgotPassword</Link>
        </li>
        <li>
          <Link to="/signuploginmodule">SignupLoginModule</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
