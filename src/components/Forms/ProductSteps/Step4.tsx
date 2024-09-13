import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

interface Step4Props {
  onFileChange: (file: File | null) => void;
}

const Step4: React.FC<Step4Props> = ({ onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) return;

    if (file.type.startsWith("image/") || file.type.startsWith("video/")) {
      setErrorMessage("Only .zip, .exe, .apk, and .msi files are allowed.");
      setSelectedFile(null);
      return;
    }

    if (file) {
      onFileChange(file);
    }

    setErrorMessage("");
    setSelectedFile(file);
    handleUpload(file);
  };

  const handleUpload = (file: File) => {
    const uploadSimulator = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(uploadSimulator);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);
    setUploadProgress(0);
  };

  return (
    <>
      <div className="w-full mb-8">
        <h2 className="text-3xl font-bold text-white">File Uploads</h2>
      </div>
      <section className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border-4 border-dotted rounded-xl border-primary/40 w-1/2 h-[350px] p-2">
          <div className="flex flex-col gap-2 items-center ">
            <IoCloudUploadOutline className="text-5xl" />
            <label
              htmlFor="FileUpload"
              className="bg-primary hover:bg-primary/90 text-white rounded-full py-1.5 px-2 cursor-pointer"
            >
              Browser Computer
            </label>
            <input
              type="file"
              id="FileUpload"
              name="FileUpload"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          {selectedFile && (
            <div className="w-full mt-3">
              {uploadProgress == 100 ? (
                <p>File uploaded successfully</p>
              ) : (
                <p>Uploading: {uploadProgress}%</p>
              )}
              <progress
                value={uploadProgress}
                max="100"
                className="bg-white w-full rounded-full"
              />
            </div>
          )}
          {uploadProgress == 100 && selectedFile && (
            <div className="flex gap-2 text-sm justify-start items-start w-full px-3">
              <p className="truncate">
                <strong>File Name:</strong> {selectedFile.name}
              </p>
              <p>
                <strong>File Type:</strong> {selectedFile.name.split(".").pop()}
              </p>
              <p>
                <strong>File Size:</strong>{" "}
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Step4;
