import React from "react";

const SystemTable = () => {
  return (
    <>
      <div>
        <div className="w-full mb-8">
          <h2 className="text-3xl font-bold text-white">System Requirements</h2>
        </div>
        <div className="w-full">
          <table className="w-full text-sm font-medium">
            <thead>
              <tr className="text-lg">
                <th className="px-4 py-2 font-bold text-left text-white bg-slate-800">
                  Requirement
                </th>
                <th className="px-4 py-2 font-bold text-left text-white bg-slate-800">
                  Minimum
                </th>
                <th className="px-4 py-2 font-bold text-left text-white bg-slate-800">
                  Recommended
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">OS version</td>
                <td className="px-4 py-3">Windows 10 64-bit</td>
                <td className="px-4 py-3">Windows 10 64-bit</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">CPU</td>
                <td className=" px-4 py-3">
                  Intel Core i5-8400 / AMD Ryzen 5 1600
                </td>
                <td className="px-4 py-3">Intel Core i7</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">RAM</td>
                <td className="px-4 py-3">8 GB</td>
                <td className="px-4 py-3">16 GB</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">Storage</td>
                <td className="px-4 py-3">256 GB</td>
                <td className="px-4 py-3">512 GB</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">GPU</td>
                <td className="px-4 py-3">
                  Intel UHD Graphics / AMD Radeon RX 550
                </td>
                <td className="px-4 py-3">
                  Nvidia GeForce RTX 3060 / AMD Radeon RX 6600 XT
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">Sound Card</td>
                <td className="px-4 py-3">Windows Compatible Audio Device</td>
                <td className="px-4 py-3">Windows Compatible Audio Device</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">Additional Notes</td>
                <td className="px-4 py-3">
                  The above specifications were tested with DLSS/FSR/XeSS
                  enabled.
                </td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">Login Accounts Required</td>
                <td className="px-4 py-3">Epic ID / Google</td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">Languages Supported</td>
                <td className="px-4 py-3">Audio: English, Italian</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SystemTable;
