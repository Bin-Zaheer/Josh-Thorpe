import {
  NextResponse,
  NextRequest,
} from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY,
);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const labelStyle = `
  width:38%;
  padding:12px 14px 12px 0;
  border-bottom:1px solid rgba(40,40,40,0.08);
  vertical-align:top;
  font-size:12px;
  font-weight:700;
  color:rgba(40,40,40,0.5);
`;

    const valueStyle = `
  padding:12px 0;
  border-bottom:1px solid rgba(40,40,40,0.08);
  vertical-align:top;
  font-size:14px;
  line-height:1.7;
  color:#282828;
  white-space:pre-wrap;
`;

    const sectionEyebrowStyle = `
  font-size:11px;
  font-weight:700;
  letter-spacing:2px;
  text-transform:uppercase;
  color:#FF5E1A;
  margin-bottom:8px;
`;

    const headingStyle = `
  margin:0 0 20px;
  font-size:22px;
  color:#282828;
`;

    const {
      fullName,
      email,
      phoneNumber,
      heardAbout,
      heardAboutOther,

      goals,
      trainingDays,
      sessionLength,
      sessionLengthOther,
      trainingConsistency,
      trainingType,
      trainingTypeOther,

      previousInjuries,
      currentPain,
      surgeriesConditions,
      medicallyCleared,

      trainingLocation,
      trainingLocationOther,
      equipmentAccess,
      typicalDay,

      whyNow,
      motivation,
      coachSupport,

      serviceInterested,
      coachingBudget,
      startDate,

      additionalInfo,
      confirmationEmail,
    } = data;

    const emailHtml = `
  <div style="
    margin:0;
    padding:40px 20px;
    background:#f7f6f2;
    font-family:Arial,Helvetica,sans-serif;
    color:#282828;
  ">
    <div style="
      max-width:760px;
      margin:0 auto;
      background:#ffffff;
      border:1px solid rgba(40,40,40,0.08);
      border-radius:24px;
      overflow:hidden;
      box-shadow:0 20px 60px rgba(40,40,40,0.08);
    ">

      <!-- HEADER -->
      <div style="
        background:#282828;
        padding:32px 36px;
        color:#ffffff;
      ">
        <div style="
          font-size:11px;
          font-weight:700;
          letter-spacing:3px;
          text-transform:uppercase;
          color:#FF5E1A;
          margin-bottom:10px;
        ">
          JT Fitness & Injury Clinic
        </div>

        <h1 style="
          margin:0;
          font-size:30px;
          line-height:1.2;
          font-weight:700;
        ">
          New Coaching Enquiry
        </h1>

        <p style="
          margin:12px 0 0;
          font-size:14px;
          line-height:1.7;
          color:rgba(255,255,255,0.65);
        ">
          A new coaching enquiry has been submitted through the website.
        </p>
      </div>

      <!-- PERSONAL DETAILS -->
      <div style="padding:34px 36px 10px;">
        <div style="
          font-size:11px;
          font-weight:700;
          letter-spacing:2px;
          text-transform:uppercase;
          color:#FF5E1A;
          margin-bottom:8px;
        ">
          01 / Personal Details
        </div>

        <h2 style="
          margin:0 0 20px;
          font-size:22px;
          color:#282828;
        ">
          About the client
        </h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="${labelStyle}">Full Name</td>
            <td style="${valueStyle}">${fullName || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Email Address</td>
            <td style="${valueStyle}">${email || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Phone Number</td>
            <td style="${valueStyle}">${phoneNumber || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">How did they hear about me?</td>
            <td style="${valueStyle}">${heardAbout || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">How did they hear about me? — Other</td>
            <td style="${valueStyle}">${heardAboutOther || "N/A"}</td>
          </tr>
        </table>
      </div>

      <!-- TRAINING BACKGROUND -->
      <div style="padding:30px 36px 10px;">
        <div style="${sectionEyebrowStyle}">
          02 / Training Background
        </div>

        <h2 style="${headingStyle}">
          Training experience
        </h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="${labelStyle}">Goals</td>
            <td style="${valueStyle}">${goals || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Training Days Per Week</td>
            <td style="${valueStyle}">${trainingDays || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Usual Session Length</td>
            <td style="${valueStyle}">${sessionLength || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Session Length — Other</td>
            <td style="${valueStyle}">${sessionLengthOther || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Training Consistency</td>
            <td style="${valueStyle}">${trainingConsistency || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Type of Training</td>
            <td style="${valueStyle}">${trainingType || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Training Type — Other</td>
            <td style="${valueStyle}">${trainingTypeOther || "N/A"}</td>
          </tr>
        </table>
      </div>

      <!-- INJURY & MEDICAL -->
      <div style="padding:30px 36px 10px;">
        <div style="${sectionEyebrowStyle}">
          03 / Injury & Medical History
        </div>

        <h2 style="${headingStyle}">
          Injury & medical information
        </h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="${labelStyle}">Previous Injuries</td>
            <td style="${valueStyle}">${previousInjuries || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Current Pain / Movement Limitations</td>
            <td style="${valueStyle}">${currentPain || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Surgeries / Medical Conditions</td>
            <td style="${valueStyle}">${surgeriesConditions || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Medically Cleared to Exercise</td>
            <td style="${valueStyle}">${medicallyCleared || "N/A"}</td>
          </tr>
        </table>
      </div>

      <!-- LIFESTYLE -->
      <div style="padding:30px 36px 10px;">
        <div style="${sectionEyebrowStyle}">
          04 / Lifestyle & Training Environment
        </div>

        <h2 style="${headingStyle}">
          Lifestyle & environment
        </h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="${labelStyle}">Training Location</td>
            <td style="${valueStyle}">${trainingLocation || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Training Location — Other</td>
            <td style="${valueStyle}">${trainingLocationOther || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Equipment Access</td>
            <td style="${valueStyle}">${equipmentAccess || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Typical Day</td>
            <td style="${valueStyle}">${typicalDay || "N/A"}</td>
          </tr>
        </table>
      </div>

      <!-- MOTIVATION -->
      <div style="padding:30px 36px 10px;">
        <div style="${sectionEyebrowStyle}">
          05 / Motivation & Commitment
        </div>

        <h2 style="${headingStyle}">
          Motivation & coaching support
        </h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="${labelStyle}">Why Now? Why Coaching?</td>
            <td style="${valueStyle}">${whyNow || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Motivation Rating</td>
            <td style="${valueStyle}">
              ${motivation ? `${motivation} / 10` : "N/A"}
            </td>
          </tr>

          <tr>
            <td style="${labelStyle}">Coach Support Needed</td>
            <td style="${valueStyle}">
              ${
                Array.isArray(coachSupport) &&
                coachSupport.length
                  ? coachSupport.join(", ")
                  : "N/A"
              }
            </td>
          </tr>
        </table>
      </div>

      <!-- SERVICE & BUDGET -->
      <div style="padding:30px 36px 10px;">
        <div style="${sectionEyebrowStyle}">
          06 / Budget & Start Date
        </div>

        <h2 style="${headingStyle}">
          Coaching plan
        </h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="${labelStyle}">Service Interested In</td>
            <td style="${valueStyle}">${serviceInterested || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Coaching Budget</td>
            <td style="${valueStyle}">${coachingBudget || "N/A"}</td>
          </tr>

          <tr>
            <td style="${labelStyle}">Preferred Start Date</td>
            <td style="${valueStyle}">${startDate || "N/A"}</td>
          </tr>
        </table>
      </div>

      <!-- FINAL DETAILS -->
      <div style="padding:30px 36px 34px;">
        <div style="${sectionEyebrowStyle}">
          07 / Final Details
        </div>

        <h2 style="${headingStyle}">
          Additional information
        </h2>

        <div style="
          margin-top:20px;
          padding:18px;
          border-radius:16px;
          background:#faf9f6;
          border:1px solid rgba(40,40,40,0.08);
        ">
          <div style="
            font-size:12px;
            font-weight:700;
            color:rgba(40,40,40,0.55);
            margin-bottom:8px;
          ">
            Anything else they would like you to know
          </div>

          <div style="
            font-size:15px;
            line-height:1.8;
            color:#282828;
            white-space:pre-wrap;
          ">
            ${additionalInfo || "N/A"}
          </div>
        </div>

        <table style="
          width:100%;
          margin-top:18px;
          border-collapse:collapse;
        ">
          <tr>
            <td style="${labelStyle}">Confirmation Email</td>
            <td style="${valueStyle}">${confirmationEmail || "N/A"}</td>
          </tr>
        </table>
      </div>

      <!-- FOOTER -->
      <div style="
        border-top:1px solid rgba(40,40,40,0.08);
        background:#faf9f6;
        padding:22px 36px;
      ">
        <p style="
          margin:0;
          font-size:12px;
          line-height:1.7;
          color:rgba(40,40,40,0.5);
        ">
          This enquiry was submitted through the JT Fitness website.
        </p>
      </div>

    </div>
  </div>
`;

    const toEmail = process.env.ENQUIRY_TO_EMAIL;

    if (!toEmail) {
      throw new Error(
        "ENQUIRY_TO_EMAIL is not defined in environment variables.",
      );
    }

    const { error } = await resend.emails.send({
      from: "Website Enquiries <hello@joshthorpefitness.co.uk>",
      to: [toEmail],
      subject: `New Website Enquiry from ${fullName || "Visitor"}`,
      html: emailHtml,
      replyTo: email,
    });
    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Enquiry sent successfully Submitted.",
    });
  } catch (error) {
    console.error("SEND ENQUIRY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 },
    );
  }
}
