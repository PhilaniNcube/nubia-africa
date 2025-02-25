"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(prevState: unknown, formData: FormData) {
  const values = Object.fromEntries(formData.entries());

  const { first_name, last_name, email, phone, message } = values;

  // validate that these fields are not empty
  if (!first_name || !last_name || !email || !phone || !message) {
    return { success: false, error: "All fields are required" };
  }

  try {
    const { data, error } = await resend.emails.send({
      to: "hello@nubia.africa.com",
      from: "info@nubia.africa.com",
      cc: "ncbphi001@gmail.com",
      subject: "New Contact Form Submission",
      text: `First Name: ${first_name}\nLast Name: ${last_name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    console.log({ data, error });
    if (error) {
      return {
        success: false,
        error: "An error occurred while sending the email",
      };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error(error);
    return {
      error: "An error occurred while sending the email",
      success: false,
    };
  }
}
