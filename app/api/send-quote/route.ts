import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface QuoteRequest {
  name: string
  company: string
  email: string
  phone: string
  productName: string
  productId: string
  category: string
  series: string
  quantity: string
  notes: string
}

export async function POST(request: NextRequest) {
  try {
    const body: QuoteRequest = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.productName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter using environment variables
    // For production, use proper email service like SendGrid, AWS SES, or similar
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true' || false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to business
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h1 style="color: #2c3e50; margin: 0;">New Quote Request</h1>
          <p style="color: #7f8c8d; margin: 5px 0 0 0;">From SUDOOD Website</p>
        </div>

        <div style="background-color: #e8f4f8; padding: 15px; border-left: 4px solid #3498db; margin-bottom: 20px;">
          <h3 style="color: #2c3e50; margin-top: 0;">Product Information</h3>
          <p style="margin: 5px 0;"><strong>Product:</strong> ${body.productName}</p>
          <p style="margin: 5px 0;"><strong>Category:</strong> ${body.category}</p>
          <p style="margin: 5px 0;"><strong>Series:</strong> ${body.series}</p>
          <p style="margin: 5px 0;"><strong>Quantity:</strong> ${body.quantity}</p>
        </div>

        <div style="background-color: #f0f0f0; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #2c3e50; margin-top: 0;">Customer Information</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${body.name}</p>
          <p style="margin: 5px 0;"><strong>Company:</strong> ${body.company || 'N/A'}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${body.email}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${body.phone}</p>
        </div>

        ${body.notes ? `
        <div style="background-color: #fff9e6; padding: 15px; border-left: 4px solid #f39c12; margin-bottom: 20px;">
          <h3 style="color: #2c3e50; margin-top: 0;">Additional Notes</h3>
          <p style="white-space: pre-wrap; color: #34495e; margin: 0;">${body.notes}</p>
        </div>
        ` : ''}

        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #ecf0f1;">
          <p style="color: #7f8c8d; font-size: 12px;">
            This is an automated message from the SUDOOD website quote system.
          </p>
        </div>
      </div>
    `

    // Email to customer
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h1 style="color: #2c3e50; margin: 0;">Quote Request Received</h1>
          <p style="color: #7f8c8d; margin: 5px 0 0 0;">Thank you for choosing SUDOOD</p>
        </div>

        <p style="font-size: 16px; color: #34495e;">Dear ${body.name},</p>

        <p style="color: #34495e; line-height: 1.6;">
          Thank you for your interest in our products. We have received your quote request for:
        </p>

        <div style="background-color: #e8f4f8; padding: 15px; border-left: 4px solid #3498db; margin-bottom: 20px; border-radius: 4px;">
          <p style="margin: 5px 0;"><strong>${body.productName}</strong></p>
          <p style="margin: 5px 0; color: #7f8c8d;">Quantity: ${body.quantity}</p>
        </div>

        <p style="color: #34495e; line-height: 1.6;">
          Our sales team will review your request and contact you within 24-48 hours with a detailed quotation and any additional information you may need.
        </p>

        <div style="background-color: #f0f0f0; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c3e50; margin-top: 0;">Your Information</h3>
          <p style="margin: 5px 0; color: #34495e;"><strong>Email:</strong> ${body.email}</p>
          <p style="margin: 5px 0; color: #34495e;"><strong>Phone:</strong> ${body.phone}</p>
          <p style="margin: 5px 0; color: #34495e;"><strong>Company:</strong> ${body.company || 'Not provided'}</p>
        </div>

        <p style="color: #34495e; line-height: 1.6;">
          If you have any urgent questions, please feel free to call us directly at your earliest convenience.
        </p>

        <div style="text-align: center; padding: 30px 0; border-top: 1px solid #ecf0f1;">
          <p style="color: #7f8c8d; font-size: 14px; margin: 10px 0;">
            <strong>SUDOOD - Water Valves & Solutions</strong>
          </p>
          <p style="color: #95a5a6; font-size: 12px; margin: 5px 0;">
            Thank you for your interest in SUDOOD products.
          </p>
        </div>
      </div>
    `

    // Send email to business
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL || 'info@sudood.com',
      subject: `New Quote Request: ${body.productName}`,
      html: businessEmailHtml,
      replyTo: body.email,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: body.email,
      subject: 'Quote Request Received - SUDOOD',
      html: customerEmailHtml,
    })

    console.log('Emails sent successfully for quote request:', {
      customerEmail: body.email,
      productName: body.productName,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Quote request sent successfully. Check your email for confirmation.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      {
        error: 'Failed to send quote request. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
