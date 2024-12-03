import { Resend } from "resend";
import { resend_api_key } from "../constants/env";

const resend = new Resend(resend_api_key);

export default resend;
