import React from "react";
import qrcodeimg from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="bg-slate-500 min-h-full min-w-full fixed flex items-center font-sans">
      <div className="bg-white mx-auto w-80 h-160 align-middle relative rounded-2xl">
        <div className="w-50 h-50">
          <img
            src={qrcodeimg}
            alt="qrcode-img"
            className="p-4 h-auto max-w-full rounded-lg"
            style={{ borderRadius: 25 }}
          />
        </div>
        <div className="text-center">
          <h1 className="text-xl text-black  mx-4 font-bold">
            Improve your front-end <br /> skills by building projects
          </h1>
          <p className="text-md text-gray-600 mx-10 mb-10 mt-5">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
