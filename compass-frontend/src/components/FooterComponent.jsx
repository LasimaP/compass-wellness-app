import React from "react";

const FooterComponent = () => {
  return (
    <div className="position-absolute bottom-0 w-100">
      <footer className="mt-2">
        <nav className="navbar navbar-dark bg-dark py-4 mt-auto">
          <div className="container-fluid justify-content-center">
            <p className="text-center text-white-50 mb-0 fs-6">
              &copy; 2026 Company. All rights reserved.
            </p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default FooterComponent;
