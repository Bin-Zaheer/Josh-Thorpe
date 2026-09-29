import {
  NextResponse,
  NextRequest,
} from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY,
);

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const service = String(
      data.service || "",
    ).trim();
    const message = String(
      data.message || "",
    ).trim();

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          error: "Full name is required.",
        },
        { status: 400 },
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error: "Email address is required.",
        },
        { status: 400 },
      );
    }

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          error: "Please select a service.",
        },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message);

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Website Contact Enquiry</title>
        </head>

        <body style="
          margin:0;
          padding:0;
          background:#f7f6f2;
          font-family:Arial,Helvetica,sans-serif;
          color:#282828;
        ">

          <div style="
            width:100%;
            padding:40px 20px;
            box-sizing:border-box;
            background:#f7f6f2;
          ">

            <div style="
              max-width:720px;
              margin:0 auto;
              background:#ffffff;
              border:1px solid rgba(40,40,40,0.08);
              border-radius:26px;
              overflow:hidden;
              box-shadow:0 20px 70px rgba(40,40,40,0.08);
            ">

              <!-- HEADER -->
              <div style="
                position:relative;
                padding:36px 38px 40px;
                background:#282828;
                color:#ffffff;
              ">

                <div style="
                  width:42px;
                  height:2px;
                  background:#FF5E1A;
                  margin-bottom:18px;
                "></div>

                <div style="
                  margin-bottom:10px;
                  font-size:10px;
                  font-weight:700;
                  letter-spacing:3px;
                  text-transform:uppercase;
                  color:rgba(255,255,255,0.55);
                ">
                  JT FITNESS & INJURY
                </div>

                <h1 style="
                  margin:0;
                  font-size:34px;
                  line-height:1.12;
                  letter-spacing:-1.2px;
                  font-weight:700;
                  color:#ffffff;
                ">
                  New Contact Enquiry
                </h1>

                <p style="
                  margin:15px 0 0;
                  max-width:520px;
                  font-size:14px;
                  line-height:1.8;
                  color:rgba(255,255,255,0.62);
                ">
                  A new message has been submitted through the
                  Josh Thorpe Fitness website.
                </p>

              </div>

              <!-- INTRO -->
              <div style="
                padding:30px 38px 10px;
              ">
                <div style="
                  display:inline-block;
                  padding:8px 12px;
                  border-radius:999px;
                  background:rgba(255,94,26,0.08);
                  color:#FF5E1A;
                  font-size:10px;
                  font-weight:700;
                  letter-spacing:2px;
                  text-transform:uppercase;
                ">
                  Get Started
                </div>

                <h2 style="
                  margin:16px 0 0;
                  font-size:24px;
                  line-height:1.3;
                  letter-spacing:-0.6px;
                  color:#282828;
                ">
                  Tell us what they need.
                </h2>
              </div>

              <!-- CONTACT DETAILS -->
              <div style="
                padding:24px 38px 10px;
              ">

                <div style="
                  margin-bottom:14px;
                  font-size:10px;
                  font-weight:700;
                  letter-spacing:2.5px;
                  text-transform:uppercase;
                  color:#FF5E1A;
                ">
                  Contact Details
                </div>

                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  width="100%"
                  style="border-collapse:collapse;"
                >

                  <tr>
                    <td style="
                      width:36%;
                      padding:15px 15px 15px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      font-size:12px;
                      font-weight:700;
                      color:rgba(40,40,40,0.48);
                    ">
                      Full Name
                    </td>

                    <td style="
                      padding:15px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      font-size:14px;
                      font-weight:600;
                      color:#282828;
                    ">
                      ${safeName}
                    </td>
                  </tr>

                  <tr>
                    <td style="
                      width:36%;
                      padding:15px 15px 15px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      font-size:12px;
                      font-weight:700;
                      color:rgba(40,40,40,0.48);
                    ">
                      Email Address
                    </td>

                    <td style="
                      padding:15px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      font-size:14px;
                      color:#282828;
                    ">
                      ${safeEmail}
                    </td>
                  </tr>

                  <tr>
                    <td style="
                      width:36%;
                      padding:15px 15px 15px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      font-size:12px;
                      font-weight:700;
                      color:rgba(40,40,40,0.48);
                    ">
                      Service Interested In
                    </td>

                    <td style="
                      padding:15px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      font-size:14px;
                      font-weight:600;
                      color:#282828;
                    ">
                      ${safeService}
                    </td>
                  </tr>

                </table>
              </div>

              <!-- MESSAGE -->
              <div style="
                padding:30px 38px 34px;
              ">

                <div style="
                  margin-bottom:14px;
                  font-size:10px;
                  font-weight:700;
                  letter-spacing:2.5px;
                  text-transform:uppercase;
                  color:#FF5E1A;
                ">
                  Message
                </div>

                <div style="
                  padding:22px;
                  border-radius:18px;
                  background:#faf9f6;
                  border:1px solid rgba(40,40,40,0.08);
                ">

                  <p style="
                    margin:0;
                    font-size:15px;
                    line-height:1.85;
                    color:#282828;
                    white-space:pre-wrap;
                  ">
                    ${safeMessage || "No message provided."}
                  </p>

                </div>

              </div>

              <!-- CTA / REPLY INFO -->
              <div style="
                margin:0 38px 34px;
                padding:20px 22px;
                border-radius:18px;
                background:#282828;
              ">

                <div style="
                  font-size:10px;
                  font-weight:700;
                  letter-spacing:2px;
                  text-transform:uppercase;
                  color:#FF5E1A;
                  margin-bottom:8px;
                ">
                  Reply directly
                </div>

                <p style="
                  margin:0;
                  font-size:13px;
                  line-height:1.7;
                  color:rgba(255,255,255,0.68);
                ">
                  You can reply directly to this email to contact
                  the person who submitted the enquiry.
                </p>

              </div>

              <!-- FOOTER -->
              <div style="
                border-top:1px solid rgba(40,40,40,0.08);
                padding:22px 38px;
                background:#faf9f6;
              ">

                <p style="
                  margin:0;
                  font-size:11px;
                  line-height:1.7;
                  color:rgba(40,40,40,0.45);
                ">
                  This enquiry was submitted through the
                  JT Fitness website contact form.
                </p>

              </div>

            </div>

          </div>

        </body>
      </html>
    `;

    const toEmail = process.env.ENQUIRY_TO_EMAIL;

    if (!toEmail) {
      throw new Error(
        "ENQUIRY_TO_EMAIL is not defined in environment variables.",
      );
    }

    const { data: result, error } =
      await resend.emails.send({
        from: "JT Fitness Website <hello@joshthorpefitness.co.uk>",
        to: [toEmail],
        subject: `New Message From — ${name}`,
        html: emailHtml,
        replyTo: email,
      });

    if (error) {
      console.error(
        "RESEND CONTACT ERROR:",
        error,
      );

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Contact enquiry sent successfully.",
      data: result,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
