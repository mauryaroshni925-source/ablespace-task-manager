"use client";
// "use client" likhna zaroori hai kyunki hum yaha useState use karenge
// (user ka type kiya hua email store karne ke liye)

import { useState } from "react";
import Button from "./components/ui/Button";
   import Input from "./components/ui/Input";

export default function LoginPage() {
  // email input me user jo type karega, wo yaha store hoga
  const [email, setEmail] = useState("");

  const handleGuestLogin = () => {
    // abhi ke liye simple console log - baad me hum backend API call karenge
    console.log("Guest login clicked, email:", email);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    // poori screen ka background aur center karne ka layout
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* white card jisme sab kuch hai */}
      <div className="w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        
        {/* Top logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 bg-black rounded-full" />
          <span className="text-sm font-medium">Pyramid</span>
        </div>

        {/* Heading */}
        <h1 className="text-lg font-semibold text-center mb-1">
          Let&apos;s get back on track
        </h1>
        <p className="text-sm text-gray-500 text-center mb-5">
          Enter your email below to login to your account
        </p>

        {/* Email input */}
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Continue as Guest button (black) */}
        <div className="mb-3">
          <Button variant="primary" onClick={handleGuestLogin}>
            Continue as Guest
          </Button>
        </div>

        {/* Login with Google button (white) */}
        <Button variant="secondary" onClick={handleGoogleLogin}>
          <span>G</span> Login with Google
        </Button>

        {/* Bottom disclaimer text */}
        <p className="text-xs text-gray-400 text-center mt-5">
          By clicking continue, you agree to our{" "}
          <span className="underline cursor-pointer">Terms of Service</span>{" "}
          and <span className="underline cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}