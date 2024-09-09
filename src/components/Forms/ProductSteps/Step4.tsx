"use client";
import MultiSelectInput from "@/components/Atoms/Inputs/MultiSelectInput";
import SelectInput from "@/components/Atoms/Inputs/SelectInput";
import TextInput from "@/components/Atoms/Inputs/TextInput";
import React, { useState } from "react";
interface Step4Props {
  onMinOSChange: (value: any) => void;
  onRecOSChange: (value: any) => void;
  onMinCPUChange: (value: any) => void;
  onRecCPUChange: (value: any) => void;
  onMinRAMChange: (value: string) => void;
  onRecRAMChange: (value: string) => void;
  onMinStorageChange: (value: string) => void;
  onRecStorageChange: (value: string) => void;
  onMinGPUChange: (value: any) => void;
  onRecGPUChange: (value: any) => void;
  onMinSoundCardChange: (value: string) => void;
  onRecSoundCardChange: (value: string) => void;
  onNotesChange: (value: string) => void;
  onAccountsChange: (value: any) => void;
  onLanguageChange: (value: any) => void;
}

const Step4: React.FC<Step4Props> = ({
  onMinOSChange,
  onRecOSChange,
  onMinCPUChange,
  onRecCPUChange,
  onMinRAMChange,
  onRecRAMChange,
  onMinStorageChange,
  onRecStorageChange,
  onMinGPUChange,
  onRecGPUChange,
  onMinSoundCardChange,
  onRecSoundCardChange,
  onNotesChange,
  onAccountsChange,
  onLanguageChange,
}) => {
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
                    onChange={(selected: any) => onMinOSChange(selected)}
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
                    onChange={(selected: any) => onRecOSChange(selected)}
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
                    onChange={(selected: any) => onMinCPUChange(selected)}
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
                    onChange={(selected: any) => onRecCPUChange(selected)}
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
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      onMinRAMChange(e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-3">
                  <SelectInput
                    labelText={null}
                    options={["2 GB", "4 GB", "8 GB", "12 GB"]}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      onRecRAMChange(e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">Storage</td>
                <td className="px-4 py-3">
                  <SelectInput
                    labelText={null}
                    options={["212 GB", "512 GB", "812 GB", "1 TB"]}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      onMinStorageChange(e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-3">
                  <SelectInput
                    labelText={null}
                    options={["212 GB", "512 GB", "812 GB", "1 TB"]}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      onRecStorageChange(e.target.value)
                    }
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
                    onChange={(selected: any) => onMinGPUChange(selected)}
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
                    onChange={(selected: any) => onRecGPUChange(selected)}
                  />
                </td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="px-4 py-3">Sound Card</td>
                <td className="px-4 py-3">
                  <SelectInput
                    labelText={null}
                    options={["Windows Compatible Audio Device"]}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      onMinSoundCardChange(e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-3">
                  {" "}
                  <SelectInput
                    labelText={null}
                    options={["Windows Compatible Audio Device"]}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      onRecSoundCardChange(e.target.value)
                    }
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onNotesChange(e.target.value)
                    }
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
                    onChange={(selected: any) => onAccountsChange(selected)}
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
                    onChange={(selected: any) => onLanguageChange(selected)}
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

export default Step4;
