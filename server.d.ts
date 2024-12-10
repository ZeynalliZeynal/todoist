import ErrorCodes from "@/utils/error-codes";

declare global {
  interface ServerResponse {
    status: "fail" | "error" | "success";
    message: string;
    errorCode?: ErrorCodes;
  }
}

export {};
