import ErrorCodes from "@/utils/error-codes";

declare global {
  interface ServerErrorResponse {
    status: "fail" | "error" | "success";
    message: string;
    errorCode?: ErrorCodes;
  }
}

export {};
