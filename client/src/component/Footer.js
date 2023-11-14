import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container4">
          <div className="row">
            <div className="footer-col-1">
              <div className="app-logo">
                <img src="../images/logo.png" alt="" /><br />
                <h5>Ride with purpose, share with heart.</h5>
              </div>
            </div>
            <div className="footer-col-2">
              <h3>Product</h3>
              <ul>
                <li>Infrastructer</li>
                <li>Preview</li>
                <li>Turbo</li>
                <li>Enterprise</li>
                <li>CLI & API</li>
                <li>changelog</li>
              </ul>
            </div>

            <div className="footer-col-2">
              <h3>Explore</h3>
              <ul>
                <li>Docs</li>
                <li>Pricing </li>
                <li>Customers</li>
                <li>Experts</li>
                <li>Guides</li>
                <li>Help</li>
              </ul>
            </div>

            <div className="footer-col-2">
              <h3>Company</h3>
              <ul>
                <li>About</li>
                <li>Contact us</li>
                <li>Partners</li>
                <li>Security</li>
                <li>Privicy Policy</li>
                <li>Legal</li>
              </ul>
            </div>
          </div>
            <p className="copyright">Copyright &copy;Kunal Air</p>
        </div>
      </div>
    </>
  )
}

export default Footer