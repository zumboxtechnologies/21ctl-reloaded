import React from "react";
import PolygonBox from "../security/PolygonBox";

export default function ContactInfo() {
  return (
    <div className=" p-6 ">
      <PolygonBox classname=" addressDiv ">
        <div className="address">
          <h2 className="text-lg font-bold ">Office Addresses</h2>
          <div className="flex flex-col gap-3 mt-[40px]">
            <p className="text-gray-600 mt-2">
              <strong>Head Office:</strong>
              <br /> No.5 Jeremiah Ugwu Street, Off Babatunde Anjous, Lekki
              Phase 1, Lagos.
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Regional Office:</strong> <br /> 456 Progress Avenue,
              Metro State, Country.
            </p>
          </div>
        </div>
      </PolygonBox>

      <PolygonBox classname="addressDiv ">
        <div className="address flex flex-col gap-[40px]">
          <h2 className="text-lg font-bold ">Phone Numbers</h2>
          <div className="flex flex-col gap-2">
            <p className="text-gray-600 mt-2">
              General Inquiries: +XX XXXXXXXX
            </p>
            <p className="text-gray-600 mt-2">
              Customer Support: +XX XXXXXXXX (Available 24/7)
            </p>
            <p className="text-gray-600 mt-2">Sales: +XX XXXXXXXX</p>
          </div>
        </div>
      </PolygonBox>

      <PolygonBox classname="addressDiv">
        <div className="address flex flex-col gap-[40px]">
          <h2 className="text-lg font-bold ">Email Addresses</h2>
          <div className="flex flex-col gap-3">
            <p className="text-gray-600 mt-2">
              <span className="sm">General</span>: info@2ctcl.com
            </p>
            <p className="text-gray-600 mt-2">
              <span className="sm">Support</span>: support@2ctcl.com
            </p>
            <p className="text-gray-600 mt-2">
              <span className="sm">Sales</span>: sales@2ctcl.com
            </p>
          </div>
        </div>
      </PolygonBox>
    </div>
  );
}
