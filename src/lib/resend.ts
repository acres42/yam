import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) throw new Error("Resend API key not set.");

const resend = new Resend(apiKey);
export default resend;
