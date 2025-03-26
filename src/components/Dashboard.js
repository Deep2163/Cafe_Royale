import React from "react";
import "../css/dashboard.css";

function Dashboard() {
  return (
    <div className="container-fluid dashboard-container">
      <h2 className="welcome_admin">Welcome to Cafe Royale</h2>

      <div className="row mt-4">
        <div className="col-md-3 stat-box">
          Sales Graph: <strong>&#8377;8,000+</strong>
        </div>
        <div className="col-md-3 stat-box">
          Total Visitors: <strong>3,000+</strong>
        </div>
        <div className="col-md-3 stat-box">
          New Users: <strong>7,000+</strong>
        </div>
        <div className="col-md-3 stat-box">
          Total Reservations: <strong>8,000+</strong>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Recent Orders Requested</div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Food Item</th>
                    <th>Price</th>
                    <th>Product ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pizza</td>
                    <td>$19.99</td>
                    <td>67384917</td>
                  </tr>
                  <tr>
                    <td>French Fries</td>
                    <td>$14.59</td>
                    <td>789398319</td>
                  </tr>
                  <tr>
                    <td>Multigrain Hot Cereal</td>
                    <td>$25.22</td>
                    <td>137893137</td>
                  </tr>
                  <tr>
                    <td>Fried Egg Sandwich</td>
                    <td>$11.23</td>
                    <td>235193138</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Monthly Revenue</div>
            <div className="card-body">
              <p>Week 1: 25%</p>
              <p>Week 2: 50%</p>
              <p>Week 3: 75%</p>
              <p>Week 4: 40%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Recently Placed Orders</div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Reservation ID</th>
                    <th>Person Name</th>
                    <th>Person Mobile</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Jhon Leo</td>
                    <td>9876543210</td>
                    <td>20 Jan, 2025</td>
                    <td>10:00 PM</td>
                    <td>Completed</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jhon Leo</td>
                    <td>9876543210</td>
                    <td>20 Jan, 2025</td>
                    <td>10:00 PM</td>
                    <td>Completed</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jhon Leo</td>
                    <td>9876543210</td>
                    <td>20 Jan, 2025</td>
                    <td>10:00 PM</td>
                    <td>Completed</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Jhon Leo</td>
                    <td>9876543210</td>
                    <td>20 Jan, 2025</td>
                    <td>10:00 PM</td>
                    <td>Completed</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Jhon Leo</td>
                    <td>9876543210</td>
                    <td>20 Jan, 2025</td>
                    <td>10:00 PM</td>
                    <td>Completed</td>
                    <td>$10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
