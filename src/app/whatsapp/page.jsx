"use client";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    const whatsappUrl = "https://wa.me/9110068182";
    window.location.href = whatsappUrl;
  }, []);

  return (
    <div>
      <p>Redirecting to WhatsApp...</p>
    </div>
  );
};

export default page;
