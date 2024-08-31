import MultiSelectInput from "@/components/Atoms/Inputs/MultiSelectInput";
import SelectInput from "@/components/Atoms/Inputs/SelectInput";
import TextInput from "@/components/Atoms/Inputs/TextInput";
import React from "react";

const Step3 = () => {
  return (
    <section className="">
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
                <td className="px-4 py-3">
                  {" "}
                  <MultiSelectInput
                    placeholder="Select OS Versions"
                    options={[
                      { value: "win11", label: "Windows 11" },
                      { value: "win10-64", label: "Windows 10 64-bit" },
                      { value: "wind10-32", label: "Windows 10 32-bit" },
                    ]}
                  />{" "}
                </td>
                <td className="px-4 py-3">
                  {" "}
                  <MultiSelectInput
                    placeholder="Select OS Versions"
                    options={[
                      { value: "win11", label: "Windows 11" },
                      { value: "win10-64", label: "Windows 10 64-bit" },
                      { value: "wind10-32", label: "Windows 10 32-bit" },
                    ]}
                  />
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">CPU</td>
                <td className=" px-4 py-3">
                  <MultiSelectInput
                    placeholder="Select CPU"
                    options={[
                      {
                        value: "intel-i5",
                        label: "Intel Core i5-10400 @ 2.9 GHz",
                      },
                      {
                        value: "intel-i7",
                        label: "Intel Core i7-8700K @ 3.70 GHz",
                      },
                      {
                        value: "amd5-3600",
                        label: "AMD Ryzen 5 3600 @ 3.6 GHz",
                      },
                      {
                        value: "amd5-5600",
                        label: "AMD Ryzen 5 5600X @ 3.7 GHz",
                      },
                      {
                        value: "other",
                        label: "or better",
                      },
                    ]}
                  />
                </td>
                <td className="px-4 py-3">
                  {" "}
                  <MultiSelectInput
                    placeholder="Select CPU"
                    options={[
                      {
                        value: "intel-i5",
                        label: "Intel Core i5-10400 @ 2.9 GHz",
                      },
                      {
                        value: "intel-i7",
                        label: "Intel Core i7-8700K @ 3.70 GHz",
                      },
                      {
                        value: "amd5-3600",
                        label: "AMD Ryzen 5 3600 @ 3.6 GHz",
                      },
                      {
                        value: "amd5-5600",
                        label: "AMD Ryzen 5 5600X @ 3.7 GHz",
                      },
                      {
                        value: "other",
                        label: "or better",
                      },
                    ]}
                  />
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">RAM</td>
                <td className="px-4 py-3">
                  {" "}
                  <SelectInput
                    labelText={null}
                    options={["2 GB", "4 GB", "8 GB", "12 GB"]}
                  />
                </td>
                <td className="px-4 py-3">
                  <SelectInput
                    labelText={null}
                    options={["2 GB", "4 GB", "8 GB", "12 GB"]}
                  />
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">Storage</td>
                <td className="px-4 py-3">
                  <SelectInput
                    labelText={null}
                    options={["212 GB", "512 GB", "812 GB", "1 TB"]}
                  />
                </td>
                <td className="px-4 py-3">
                  <SelectInput
                    labelText={null}
                    options={["212 GB", "512 GB", "812 GB", "1 TB"]}
                  />
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">GPU</td>
                <td className="px-4 py-3">
                  <MultiSelectInput
                    placeholder="Select GPU"
                    options={[
                      {
                        value: "intel-i5",
                        label: "Intel Core i5-10400 @ 2.9 GHz",
                      },
                      {
                        value: "intel-i7",
                        label: "Intel Core i7-8700K @ 3.70 GHz",
                      },
                      {
                        value: "amd5-3600",
                        label: "AMD Ryzen 5 3600 @ 3.6 GHz",
                      },
                      {
                        value: "amd5-5600",
                        label: "AMD Ryzen 5 5600X @ 3.7 GHz",
                      },
                      {
                        value: "other",
                        label: "or better",
                      },
                    ]}
                  />
                </td>
                <td className="px-4 py-3">
                  <MultiSelectInput
                    placeholder="Select GPU"
                    options={[
                      {
                        value: "intel-i5",
                        label: "Intel Core i5-10400 @ 2.9 GHz",
                      },
                      {
                        value: "intel-i7",
                        label: "Intel Core i7-8700K @ 3.70 GHz",
                      },
                      {
                        value: "amd5-3600",
                        label: "AMD Ryzen 5 3600 @ 3.6 GHz",
                      },
                      {
                        value: "amd5-5600",
                        label: "AMD Ryzen 5 5600X @ 3.7 GHz",
                      },
                      {
                        value: "other",
                        label: "or better",
                      },
                    ]}
                  />
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">Sound Card</td>
                <td className="px-4 py-3">
                  <SelectInput
                    labelText={null}
                    options={["Windows Compatible Audio Device"]}
                  />
                </td>
                <td className="px-4 py-3">
                  {" "}
                  <SelectInput
                    labelText={null}
                    options={["Windows Compatible Audio Device"]}
                  />
                </td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">Additional Notes</td>
                <td className="px-4 py-3">
                  <TextInput
                    labelText={null}
                    placeholderText="Additional Notes"
                    defaultText=""
                  />
                </td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">Login Accounts Required</td>
                <td className="px-4 py-3">
                  <MultiSelectInput
                    placeholder="Select Accounts"
                    options={[
                      { value: "google", label: "Google" },
                      { value: "epic", label: "Epic Games" },
                      { value: "xbox", label: "Xbox" },
                      { value: "ubisoft", label: "Ubisoft" },
                      { value: "steam", label: "Steam" },
                    ]}
                  />
                </td>
              </tr>
              <tr className="">
                <td className="px-4 py-3">Languages Supported</td>
                <td className="px-4 py-3">
                  <MultiSelectInput
                    placeholder="Select Languages"
                    options={[
                      { value: "us-en", label: "English" },
                      { value: "in-hi", label: "Hindi" },
                      { value: "fa-fr", label: "French" },
                    ]}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Step3;
