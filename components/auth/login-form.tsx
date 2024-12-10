"use client";

import { useState } from "react";
import LoginSendEmail from "@/components/auth/login-send-email";
import LoginOtpForm from "@/components/auth/login-otp-form";

export type Pages = "form" | "otp";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [page, setPage] = useState<Pages>("form");
  const [otp, setOtp] = useState("");

  return page === "form" ? (
    <LoginSendEmail
      email={email}
      onPageChange={setPage}
      onEmailChange={setEmail}
    />
  ) : page === "otp" ? (
    <LoginOtpForm
      otp={otp}
      onOtpChange={setOtp}
      email={email}
      goBack={() => setPage("form")}
    />
  ) : null;
}
