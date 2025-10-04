import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create transporter using SMTP configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',// true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Portfolio Contact`,
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; max-width: 640px; margin: 0 auto; background-color: #f9fafb; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <div style="background-color: #1f2937; padding: 20px 25px;">
            <h2 style="color: #ffffff; margin: 0; font-weight: 600;">📩 New Contact Message</h2>
          </div>

          <!-- Contact Details -->
          <div style="background-color: #ffffff; padding: 24px; border-bottom: 1px solid #e5e7eb;">
            <h3 style="color: #111827; margin-top: 0; font-size: 18px;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
              <tr>
                <td style="padding: 6px 0; color: #374151;"><strong>Name:</strong></td>
                <td style="padding: 6px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #374151;"><strong>Email:</strong></td>
                <td style="padding: 6px 0; color: #1f2937;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #374151;"><strong>Subject:</strong></td>
                <td style="padding: 6px 0; color: #1f2937;">${subject}</td>
              </tr>
            </table>
          </div>

          <!-- Message Section -->
          <div style="background-color: #f9fafb; padding: 24px;">
            <h3 style="color: #111827; margin-top: 0; font-size: 18px;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.7; color: #374151; margin: 10px 0 0;">${message}</p>
          </div>

          <!-- Reply Info -->
          <div style="padding: 18px 24px; background-color: #ecfdf5; border-top: 1px solid #d1fae5;">
            <p style="margin: 0; color: #065f46; font-size: 15px;">
              💬 <strong>Reply to:</strong> 
              <a href="mailto:${email}" style="color: #047857; text-decoration: none;">${email}</a>
            </p>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding: 12px; font-size: 12px; color: #d1d5db; background-color: #1f2937;">
            <p style="margin: 0;">This message was sent via your website contact form.</p>
          </div>

        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        Reply to: ${email}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: `Thank you for your message! I'll get back to you soon.` },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
