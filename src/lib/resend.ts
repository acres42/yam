import { Resend } from "resend";

const resendApiKey = import.meta.env.RESEND_API_KEY;
if (!resendApiKey) throw new Error("Resend API key not set.");
export const resend = new Resend(resendApiKey);
