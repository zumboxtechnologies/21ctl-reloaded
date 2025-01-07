import React from "react";

export default function ContactInfo() {
  return (
    <div className=" p-6 ">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800">Office Addresses</h2>
        <p className="text-gray-600 mt-2">
          <strong>Head Office:</strong> No.5 Jeremiah Ugwu Street, Off Babatunde
          Anjous, Lekki Phase 1, Lagos.
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Regional Office:</strong> 456 Progress Avenue, Metro State,
          Country.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800">Phone Numbers</h2>
        <p className="text-gray-600 mt-2">General Inquiries: +XX XXXXXXXX</p>
        <p className="text-gray-600 mt-2">
          Customer Support: +XX XXXXXXXX (Available 24/7)
        </p>
        <p className="text-gray-600 mt-2">Sales: +XX XXXXXXXX</p>
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-800">Email Addresses</h2>
        <p className="text-gray-600 mt-2">General: info@2ctcl.com</p>
        <p className="text-gray-600 mt-2">Support: support@2ctcl.com</p>
        <p className="text-gray-600 mt-2">Sales: sales@2ctcl.com</p>
      </div>
    </div>
  );
}
