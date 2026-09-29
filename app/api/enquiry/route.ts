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
    const phone = String(data.phone || "").trim();
    const service = String(
      data.service || "",
    ).trim();
    const injury = String(
      data.injury || "",
    ).trim();
    const message = String(
      data.message || "",
    ).trim();

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter your name.",
        },
        { status: 400 },
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please enter your email address.",
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
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(service);
    const safeInjury = escapeHtml(injury);
    const safeMessage = escapeHtml(message);

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>New JT Fitness Enquiry</title>
      </head>

      <body
        style="
          margin:0;
          padding:0;
          background:#f7f6f2;
          font-family:Arial,Helvetica,sans-serif;
          color:#282828;
        "
      >

        <div
          style="
            padding:40px 20px;
            background:#f7f6f2;
          "
        >

          <div
            style="
              max-width:760px;
              margin:0 auto;
              overflow:hidden;
              border:1px solid rgba(40,40,40,0.08);
              border-radius:28px;
              background:#ffffff;
              box-shadow:0 25px 80px rgba(40,40,40,0.08);
            "
          >

            <!-- HEADER -->
            <div
              style="
                padding:40px 40px 44px;
                background:#282828;
              "
            >

              <div
                style="
                  width:42px;
                  height:2px;
                  margin-bottom:20px;
                  background:#FF5E1A;
                "
              ></div>

              <div
                style="
                  margin-bottom:10px;
                  color:rgba(255,255,255,0.55);
                  font-size:10px;
                  font-weight:700;
                  letter-spacing:3px;
                  text-transform:uppercase;
                "
              >
                JT FITNESS & INJURY
              </div>

              <h1
                style="
                  margin:0;
                  color:#ffffff;
                  font-size:36px;
                  line-height:1.1;
                  letter-spacing:-1.4px;
                "
              >
                New Enquiry
              </h1>

              <p
                style="
                  max-width:560px;
                  margin:16px 0 0;
                  color:rgba(255,255,255,0.62);
                  font-size:14px;
                  line-height:1.8;
                "
              >
                A new enquiry has been submitted through
                the JT Fitness website.
              </p>

            </div>

            <!-- INTRO -->
            <div
              style="
                padding:34px 40px 10px;
              "
            >

              <div
                style="
                  display:inline-block;
                  padding:8px 12px;
                  border-radius:999px;
                  background:rgba(255,94,26,0.08);
                  color:#FF5E1A;
                  font-size:10px;
                  font-weight:700;
                  letter-spacing:2px;
                  text-transform:uppercase;
                "
              >
                Start here
              </div>

              <h2
                style="
                  margin:16px 0 0;
                  color:#282828;
                  font-size:25px;
                  line-height:1.3;
                  letter-spacing:-0.7px;
                "
              >
                Client enquiry details
              </h2>

            </div>

            <!-- DETAILS -->
            <div
              style="
                padding:25px 40px 10px;
              "
            >

              <table
                role="presentation"
                cellpadding="0"
                cellspacing="0"
                border="0"
                width="100%"
                style="border-collapse:collapse;"
              >

                <tr>
                  <td
                    style="
                      width:36%;
                      padding:16px 15px 16px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      color:rgba(40,40,40,0.48);
                      font-size:12px;
                      font-weight:700;
                    "
                  >
                    Full Name
                  </td>

                  <td
                    style="
                      padding:16px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      color:#282828;
                      font-size:14px;
                      font-weight:600;
                    "
                  >
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      width:36%;
                      padding:16px 15px 16px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      color:rgba(40,40,40,0.48);
                      font-size:12px;
                      font-weight:700;
                    "
                  >
                    Email Address
                  </td>

                  <td
                    style="
                      padding:16px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      color:#282828;
                      font-size:14px;
                    "
                  >
                    ${safeEmail}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      width:36%;
                      padding:16px 15px 16px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      color:rgba(40,40,40,0.48);
                      font-size:12px;
                      font-weight:700;
                    "
                  >
                    Phone Number
                  </td>

                  <td
                    style="
                      padding:16px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      color:#282828;
                      font-size:14px;
                    "
                  >
                    ${safePhone || "Not provided"}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      width:36%;
                      padding:16px 15px 16px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      color:rgba(40,40,40,0.48);
                      font-size:12px;
                      font-weight:700;
                    "
                  >
                    Service
                  </td>

                  <td
                    style="
                      padding:16px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      color:#282828;
                      font-size:14px;
                      font-weight:600;
                    "
                  >
                    ${safeService}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      width:36%;
                      padding:16px 15px 16px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      color:rgba(40,40,40,0.48);
                      font-size:12px;
                      font-weight:700;
                    "
                  >
                    Area of Injury
                  </td>

                  <td
                    style="
                      padding:16px 0;
                      border-bottom:1px solid rgba(40,40,40,0.08);
                      vertical-align:top;
                      color:#282828;
                      font-size:14px;
                    "
                  >
                    ${safeInjury || "Not provided"}
                  </td>
                </tr>

              </table>

            </div>

            <!-- MESSAGE -->
            <div
              style="
                padding:30px 40px 40px;
              "
            >

              <div
                style="
                  margin-bottom:12px;
                  color:#FF5E1A;
                  font-size:10px;
                  font-weight:700;
                  letter-spacing:2.5px;
                  text-transform:uppercase;
                "
              >
                Message
              </div>

              <div
                style="
                  padding:22px;
                  border:1px solid rgba(40,40,40,0.08);
                  border-radius:18px;
                  background:#faf9f6;
                "
              >

                <p
                  style="
                    margin:0;
                    color:#282828;
                    font-size:15px;
                    line-height:1.85;
                    white-space:pre-wrap;
                  "
                >
                  ${safeMessage || "No message provided."}
                </p>

              </div>

            </div>

            <!-- REPLY BOX -->
            <div
              style="
                margin:0 40px 38px;
                padding:22px;
                border-radius:18px;
                background:#282828;
              "
            >

              <div
                style="
                  margin-bottom:8px;
                  color:#FF5E1A;
                  font-size:10px;
                  font-weight:700;
                  letter-spacing:2px;
                  text-transform:uppercase;
                "
              >
                Reply directly
              </div>

              <p
                style="
                  margin:0;
                  color:rgba(255,255,255,0.65);
                  font-size:13px;
                  line-height:1.7;
                "
              >
                Reply to this email to contact the person
                who submitted the enquiry.
              </p>

            </div>

            <!-- FOOTER -->
            <div
              style="
                padding:22px 40px;
                border-top:1px solid rgba(40,40,40,0.08);
                background:#faf9f6;
              "
            >

              <p
                style="
                  margin:0;
                  color:rgba(40,40,40,0.45);
                  font-size:11px;
                  line-height:1.7;
                "
              >
                This enquiry was submitted through the
                JT Fitness website.
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
        subject: `New Enquiry — ${name}`,
        html: emailHtml,
        replyTo: email,
      });

    if (error) {
      console.error(
        "RESEND ENQUIRY ERROR:",
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
      message: "Enquiry sent successfully.",
      data: result,
    });
  } catch (error) {
    console.error("ENQUIRY API ERROR:", error);

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
