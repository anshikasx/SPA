import React from "react";

const services = [
  {
    id: 1,
    name: "Free Delivery",
    desc: "Fast delivery on all orders within 2-3 days.",
    type: "Delivery",
  },
  {
    id: 2,
    name: "24/7 Support",
    desc: "We are available anytime to help you with queries.",
    type: "Support",
  },
  {
    id: 3,
    name: "Easy Returns",
    desc: "Return products easily within 7 days of delivery.",
    type: "Returns",
  },
  {
    id: 4,
    name: "Secure Payment",
    desc: "100% safe and secure payment options available.",
    type: "Payment",
  },
  {
    id: 5,
    name: "Best Offers",
    desc: "Get exciting discounts and special deals daily.",
    type: "Offers",
  },
  {
    id: 6,
    name: "Quality Assurance",
    desc: "We provide best quality checked products & services.",
    type: "Quality",
  },
];

export default function App() {
  return (
    <div className="page-bg py-4">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold title-text">Services</h2>
          <p className="text-muted mb-0">
            Card Layout
          </p>
        </div>

       
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.id}>
              <div className="card service-card h-100">
                <div className="card-body">
                  <span className="badge service-badge mb-3">
                    {service.type}
                  </span>

                  <h5 className="fw-bold">{service.name}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>

                  <button className="btn service-btn btn-sm w-100">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}