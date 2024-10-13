// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate input data
    if (!name || !email || !message) {
      return new Response("Name, email, and message are required.", {
        status: 400,
      });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content with HTML formatting
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "shivam.work222@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="background-color: #39177D; color: #ffffff; padding: 10px; text-align: center; border-radius: 4px;">New Contact Form Submission</h2>
          <p style="font-size: 16px; color: #333;">You have a new contact form submission:</p>
          <div style="margin-top: 20px;">
            <h3 style="color: #39177D;">Name:</h3>
            <p style="font-size: 16px; color: #555;">${name}</p>
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #39177D;">Email:</h3>
            <p style="font-size: 16px; color: #555;">${email}</p>
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #39177D;">Phone:</h3>
            <p style="font-size: 16px; color: #555;">${
              phone ? phone : "N/A"
            }</p>
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #39177D;">Message:</h3>
            <p style="font-size: 16px; color: #555;">${message}</p>
          </div>
          <hr style="border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #888;">Sent on: ${new Date().toLocaleString()}</p>
          <div style="text-align: center; margin-top: 20px;">
            <img src="https://img.icons8.com/clouds/100/000000/paper-plane.png" alt="Contact Icon" style="width: 80px; height: auto;" />
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response("Message sent successfully!", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send message.", { status: 500 });
  }
}
