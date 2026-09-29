"use client";

import {
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Dumbbell,
  HeartPulse,
  Target,
  UserRound,
} from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  heardAbout: string;
  heardAboutOther: string;

  goals: string;
  trainingDays: string;
  sessionLength: string;
  sessionLengthOther: string;
  trainingConsistency: string;
  trainingType: string;
  trainingTypeOther: string;

  previousInjuries: string;
  currentPain: string;
  surgeriesConditions: string;
  medicallyCleared: string;

  trainingLocation: string;
  trainingLocationOther: string;
  equipmentAccess: string;
  typicalDay: string;

  whyNow: string;
  motivation: string;
  coachSupport: string[];

  serviceInterested: string;
  coachingBudget: string;
  startDate: string;

  additionalInfo: string;
  confirmationEmail: string;
};

const TOTAL_STEPS = 7;

const initialForm = {
  fullName: "",
  email: "",
  phoneNumber: "",
  heardAbout: "",
  heardAboutOther: "",

  goals: "",
  trainingDays: "",
  sessionLength: "",
  sessionLengthOther: "",
  trainingConsistency: "",
  trainingType: "",
  trainingTypeOther: "",

  previousInjuries: "",
  currentPain: "",
  surgeriesConditions: "",
  medicallyCleared: "",

  trainingLocation: "",
  trainingLocationOther: "",
  equipmentAccess: "",
  typicalDay: "",

  whyNow: "",
  motivation: "",
  coachSupport: [],

  serviceInterested: "",
  coachingBudget: "",
  startDate: "",

  additionalInfo: "",
  confirmationEmail: "",
};

const steps = [
  {
    number: "01",
    title: "Personal Details",
    short: "Tell me about you",
    icon: UserRound,
  },
  {
    number: "02",
    title: "Training Background",
    short: "Your training experience",
    icon: Dumbbell,
  },
  {
    number: "03",
    title: "Injury & Medical",
    short: "Your health history",
    icon: HeartPulse,
  },
  {
    number: "04",
    title: "Lifestyle & Environment",
    short: "Your daily routine",
    icon: Target,
  },
  {
    number: "05",
    title: "Motivation & Commitment",
    short: "What drives you",
    icon: Target,
  },
  {
    number: "06",
    title: "Budget & Start Date",
    short: "Your coaching plan",
    icon: Target,
  },
  {
    number: "07",
    title: "Final Details",
    short: "One last thing",
    icon: Check,
  },
];

function FieldLabel({
  children,
  required = false,
  hint = "",
}: {
  children: ReactNode;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-[15px] font-semibold tracking-[-0.01em] text-[#282828]">
        {children}
        {required && (
          <span
            className="ml-1 text-[#FF5E1A]"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>

      {hint && (
        <p className="mt-1.5 text-sm leading-6 text-[#282828]/55">
          {hint}
        </p>
      )}
    </div>
  );
}

function TextInput({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="
        h-14 w-full rounded-2xl
        border border-[#282828]/10
        bg-[#faf9f6]
        px-5 text-[15px] text-[#282828]
        outline-none
        transition-all duration-300
        placeholder:text-[#282828]/30
        hover:border-[#282828]/20
        focus:border-[#FF5E1A]
        focus:bg-white
        focus:ring-4 focus:ring-[#FF5E1A]/10
      "
    />
  );
}

function TextArea({
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 5,
}: {
  name: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className="
        min-h-[150px] w-full resize-y rounded-2xl
        border border-[#282828]/10
        bg-[#faf9f6]
        px-5 py-4 text-[15px] leading-7 text-[#282828]
        outline-none
        transition-all duration-300
        placeholder:text-[#282828]/30
        hover:border-[#282828]/20
        focus:border-[#FF5E1A]
        focus:bg-white
        focus:ring-4 focus:ring-[#FF5E1A]/10
      "
    />
  );
}

function RadioCard({
  name,
  value,
  checked,
  onChange,
  children,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`
        group flex cursor-pointer items-center gap-3 rounded-2xl
        border px-4 py-4 transition-all duration-300
        ${
          checked
            ? "border-[#FF5E1A] bg-[#FF5E1A]/6 shadow-[0_8px_30px_rgba(255,94,26,0.08)]"
            : "border-[#282828]/10 bg-[#faf9f6] hover:border-[#282828]/20 hover:bg-white"
        }
      `}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      <span
        className={`
          flex h-5 w-5 shrink-0 items-center justify-center rounded-full border
          transition-all duration-300
          ${
            checked
              ? "border-[#FF5E1A] bg-[#FF5E1A]"
              : "border-[#282828]/20 bg-white"
          }
        `}
      >
        {checked && (
          <span className="h-2 w-2 rounded-full bg-white" />
        )}
      </span>

      <span className="text-sm font-medium text-[#282828]">
        {children}
      </span>
    </label>
  );
}

function CheckboxCard({
  value,
  checked,
  onChange,
  children,
}: {
  value: string;
  checked: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`
        group flex cursor-pointer items-center gap-3 rounded-2xl
        border px-4 py-4 transition-all duration-300
        ${
          checked
            ? "border-[#FF5E1A] bg-[#FF5E1A]/6 shadow-[0_8px_30px_rgba(255,94,26,0.08)]"
            : "border-[#282828]/10 bg-[#faf9f6] hover:border-[#282828]/20 hover:bg-white"
        }
      `}
    >
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      <span
        className={`
          flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
          transition-all duration-300
          ${
            checked
              ? "border-[#FF5E1A] bg-[#FF5E1A]"
              : "border-[#282828]/20 bg-white"
          }
        `}
      >
        {checked && (
          <Check
            size={13}
            strokeWidth={3}
            color="white"
          />
        )}
      </span>

      <span className="text-sm font-medium text-[#282828]">
        {children}
      </span>
    </label>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#FF5E1A]">
        {eyebrow}
      </p>

      <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[#282828] sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#282828]/55">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Booked() {
  const [step, setStep] = useState(0);
  const [form, setForm] =
    useState<FormData>(initialForm);
  const [submitted, setSubmitted] =
    useState(false);
  const [error, setError] = useState("");

  const progress = useMemo(
    () => ((step + 1) / TOTAL_STEPS) * 100,
    [step],
  );

  const updateField = (
    field: string,
    value: string,
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setError("");
  };

  const toggleSupport = (value: string) => {
    setForm((prev) => {
      const exists =
        prev.coachSupport.includes(value);

      return {
        ...prev,
        coachSupport: exists
          ? prev.coachSupport.filter(
              (item) => item !== value,
            )
          : [...prev.coachSupport, value],
      };
    });

    setError("");
  };

  const validateStep = () => {
    setError("");

    if (step === 0) {
      if (!form.fullName.trim()) {
        setError("Please enter your full name.");
        return false;
      }

      if (!form.email.trim()) {
        setError(
          "Please enter your email address.",
        );
        return false;
      }

      if (!form.phoneNumber.trim()) {
        setError(
          "Please enter your phone number.",
        );
        return false;
      }

      if (!form.heardAbout) {
        setError(
          "Please select how you heard about me.",
        );
        return false;
      }

      if (
        form.heardAbout === "Other" &&
        !form.heardAboutOther.trim()
      ) {
        setError(
          "Please tell me how you heard about me.",
        );
        return false;
      }
    }

    if (step === 1) {
      if (!form.goals.trim()) {
        setError(
          "Please tell me about your goals.",
        );
        return false;
      }

      if (!form.trainingDays) {
        setError(
          "Please select how many days you can train.",
        );
        return false;
      }

      if (!form.sessionLength) {
        setError(
          "Please select your usual session length.",
        );
        return false;
      }

      if (
        form.sessionLength === "Other" &&
        !form.sessionLengthOther.trim()
      ) {
        setError(
          "Please enter your session length.",
        );
        return false;
      }

      if (!form.trainingConsistency) {
        setError(
          "Please select your training consistency.",
        );
        return false;
      }

      if (!form.trainingType) {
        setError(
          "Please select your type of training.",
        );
        return false;
      }

      if (
        form.trainingType === "Other" &&
        !form.trainingTypeOther.trim()
      ) {
        setError(
          "Please tell me what type of training you do.",
        );
        return false;
      }
    }

    if (step === 2) {
      if (!form.previousInjuries.trim()) {
        setError(
          "Please tell me about your previous injuries.",
        );
        return false;
      }

      if (!form.medicallyCleared) {
        setError(
          "Please select whether you are cleared to exercise by a medical professional if required.",
        );
        return false;
      }
    }

    if (step === 4) {
      if (!form.whyNow.trim()) {
        setError(
          "Please tell me why now and why coaching.",
        );
        return false;
      }

      if (!form.motivation) {
        setError(
          "Please rate your current motivation.",
        );
        return false;
      }

      if (!form.coachSupport.length) {
        setError(
          "Please select at least one type of coaching support.",
        );
        return false;
      }
    }

    if (step === 5) {
      if (!form.serviceInterested) {
        setError(
          "Please select the service you are interested in.",
        );
        return false;
      }

      if (!form.startDate) {
        setError(
          "Please select when you would like to start.",
        );
        return false;
      }
    }

    if (step === 6) {
      if (!form.additionalInfo.trim()) {
        setError(
          "Please complete the final information field.",
        );
        return false;
      }

      if (!form.confirmationEmail.trim()) {
        setError("Please re-enter your email.");
        return false;
      }

      if (
        form.email.trim() !==
        form.confirmationEmail.trim()
      ) {
        setError(
          "The confirmation email does not match your email address.",
        );
        return false;
      }
    }

    return true;
  };

  const goNext = () => {
    if (!validateStep()) return;

    setStep((prev) =>
      Math.min(prev + 1, TOTAL_STEPS - 1),
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goBack = () => {
    setError("");

    setStep((prev) => Math.max(prev - 1, 0));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!validateStep()) return;

    const collectedData = {
      fullName: form.fullName,
      email: form.email,
      phoneNumber: form.phoneNumber,
      heardAbout: form.heardAbout,
      heardAboutOther:
        form.heardAbout === "Other"
          ? form.heardAboutOther
          : "",

      goals: form.goals,
      trainingDays: form.trainingDays,
      sessionLength: form.sessionLength,
      sessionLengthOther:
        form.sessionLength === "Other"
          ? form.sessionLengthOther
          : "",
      trainingConsistency:
        form.trainingConsistency,
      trainingType: form.trainingType,
      trainingTypeOther:
        form.trainingType === "Other"
          ? form.trainingTypeOther
          : "",

      previousInjuries: form.previousInjuries,
      currentPain: form.currentPain,
      surgeriesConditions:
        form.surgeriesConditions,
      medicallyCleared: form.medicallyCleared,

      trainingLocation: form.trainingLocation,
      trainingLocationOther:
        form.trainingLocation === "Other"
          ? form.trainingLocationOther
          : "",
      equipmentAccess: form.equipmentAccess,
      typicalDay: form.typicalDay,

      whyNow: form.whyNow,
      motivation: form.motivation,
      coachSupport: form.coachSupport,

      serviceInterested: form.serviceInterested,
      coachingBudget: form.coachingBudget,
      startDate: form.startDate,

      additionalInfo: form.additionalInfo,
      confirmationEmail: form.confirmationEmail,
    };

    try {
      setError("");

      const response = await fetch(
        "/api/send-enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(collectedData),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Failed to send enquiry.",
        );
      }

      setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(
        "Email sending error:",
        error,
      );

      setError(
        "Your enquiry could not be sent. Please try again.",
      );
    }
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <>
          <SectionHeading
            eyebrow="01 / Personal Details"
            title="Let’s start with the basics."
            description="Tell me a little about yourself so I can understand who I’m speaking with."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <FieldLabel required>
                Full Name:
              </FieldLabel>
              <TextInput
                name="fullName"
                value={form.fullName}
                onChange={(e) =>
                  updateField(
                    "fullName",
                    e.target.value,
                  )
                }
                placeholder="Your answer"
                required
              />
            </div>

            <div>
              <FieldLabel required>
                Email Address:
              </FieldLabel>
              <TextInput
                name="email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  updateField(
                    "email",
                    e.target.value,
                  )
                }
                placeholder="Your answer"
                required
              />
            </div>

            <div>
              <FieldLabel required>
                Phone Number:
              </FieldLabel>
              <TextInput
                name="phoneNumber"
                type="tel"
                value={form.phoneNumber}
                onChange={(e) =>
                  updateField(
                    "phoneNumber",
                    e.target.value,
                  )
                }
                placeholder="Your answer"
                required
              />
            </div>

            <div className="md:col-span-2">
              <FieldLabel required>
                How did you hear about me?
                (Multiple choice)
              </FieldLabel>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Instagram",
                  "Referral",
                  "Google Search",
                  "Existing Client",
                  "Other",
                ].map((option) => (
                  <RadioCard
                    key={option}
                    name="heardAbout"
                    value={option}
                    checked={
                      form.heardAbout === option
                    }
                    onChange={(e) =>
                      updateField(
                        "heardAbout",
                        e.target.value,
                      )
                    }
                  >
                    {option}
                  </RadioCard>
                ))}
              </div>

              {form.heardAbout === "Other" && (
                <div className="mt-4">
                  <TextInput
                    name="heardAboutOther"
                    value={form.heardAboutOther}
                    onChange={(e) =>
                      updateField(
                        "heardAboutOther",
                        e.target.value,
                      )
                    }
                    placeholder="Please specify"
                  />
                </div>
              )}
            </div>
          </div>
        </>
      );
    }

    if (step === 1) {
      return (
        <>
          <SectionHeading
            eyebrow="02 / Training Background"
            title="Help me understand your training."
            description="There’s no right or wrong answer here. Just give me the clearest picture of where you are right now."
          />

          <div className="space-y-8">
            <div>
              <FieldLabel
                required
                hint="Fat loss, muscle building, rehab, post-injury return to sport, performance, mobility? etc"
              >
                What are your goals?
              </FieldLabel>

              <TextArea
                name="goals"
                value={form.goals}
                onChange={(e) =>
                  updateField(
                    "goals",
                    e.target.value,
                  )
                }
                placeholder="Your answer"
                required
              />
            </div>

            <div>
              <FieldLabel required>
                How many days per week can you
                train?
              </FieldLabel>

              <div className="grid gap-3 grid-cols-2 sm:grid-cols-5">
                {["2", "3", "4", "5", "6+"].map(
                  (option) => (
                    <RadioCard
                      key={option}
                      name="trainingDays"
                      value={option}
                      checked={
                        form.trainingDays ===
                        option
                      }
                      onChange={(e) =>
                        updateField(
                          "trainingDays",
                          e.target.value,
                        )
                      }
                    >
                      {option}
                    </RadioCard>
                  ),
                )}
              </div>
            </div>

            <div>
              <FieldLabel required>
                🏋️‍♂️ How long do your sessions
                usually last?
              </FieldLabel>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ">30mins",
                  "30mins - 1 hour",
                  "1 hour - 2 hours",
                  "2+ hours",
                  "Other",
                ].map((option) => (
                  <RadioCard
                    key={option}
                    name="sessionLength"
                    value={option}
                    checked={
                      form.sessionLength ===
                      option
                    }
                    onChange={(e) =>
                      updateField(
                        "sessionLength",
                        e.target.value,
                      )
                    }
                  >
                    {option}
                  </RadioCard>
                ))}
              </div>

              {form.sessionLength === "Other" && (
                <div className="mt-4">
                  <TextInput
                    name="sessionLengthOther"
                    value={
                      form.sessionLengthOther
                    }
                    onChange={(e) =>
                      updateField(
                        "sessionLengthOther",
                        e.target.value,
                      )
                    }
                    placeholder="Please specify"
                  />
                </div>
              )}
            </div>

            <div>
              <FieldLabel required>
                How long have you been training
                consistently?
              </FieldLabel>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "New / No experience",
                  "6–12 months",
                  "1–2 years",
                  "2+ years",
                ].map((option) => (
                  <RadioCard
                    key={option}
                    name="trainingConsistency"
                    value={option}
                    checked={
                      form.trainingConsistency ===
                      option
                    }
                    onChange={(e) =>
                      updateField(
                        "trainingConsistency",
                        e.target.value,
                      )
                    }
                  >
                    {option}
                  </RadioCard>
                ))}
              </div>
            </div>

            <div>
              <FieldLabel required>
                What type of training have you
                been doing?
              </FieldLabel>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Strength training",
                  "Sports performance",
                  "Physio rehab",
                  "Pilates / Yoga",
                  "Running / Endurance",
                  "Other",
                ].map((option) => (
                  <RadioCard
                    key={option}
                    name="trainingType"
                    value={option}
                    checked={
                      form.trainingType === option
                    }
                    onChange={(e) =>
                      updateField(
                        "trainingType",
                        e.target.value,
                      )
                    }
                  >
                    {option}
                  </RadioCard>
                ))}
              </div>

              {form.trainingType === "Other" && (
                <div className="mt-4">
                  <TextInput
                    name="trainingTypeOther"
                    value={form.trainingTypeOther}
                    onChange={(e) =>
                      updateField(
                        "trainingTypeOther",
                        e.target.value,
                      )
                    }
                    placeholder="Please specify"
                  />
                </div>
              )}
            </div>
          </div>
        </>
      );
    }

    if (step === 2) {
      return (
        <>
          <SectionHeading
            eyebrow="03 / Injury & Medical History"
            title="Your body comes first."
            description="Understanding your history helps me make sure your coaching plan is appropriate for you."
          />

          <div className="space-y-8">
            <div>
              <FieldLabel
                required
                hint="(ankle/knee/hip/back/shoulder etc.)"
              >
                Have you had previous injuries?
              </FieldLabel>

              <TextArea
                name="previousInjuries"
                value={form.previousInjuries}
                onChange={(e) =>
                  updateField(
                    "previousInjuries",
                    e.target.value,
                  )
                }
                placeholder="Your answer"
                required
              />
            </div>

            <div>
              <FieldLabel>
                Are you currently dealing with
                pain or movement limitations?
              </FieldLabel>

              <TextArea
                name="currentPain"
                value={form.currentPain}
                onChange={(e) =>
                  updateField(
                    "currentPain",
                    e.target.value,
                  )
                }
                placeholder="Your answer"
              />
            </div>

            <div>
              <FieldLabel>
                Any surgeries or medical
                conditions?
              </FieldLabel>

              <TextArea
                name="surgeriesConditions"
                value={form.surgeriesConditions}
                onChange={(e) =>
                  updateField(
                    "surgeriesConditions",
                    e.target.value,
                  )
                }
                placeholder="Your answer"
              />
            </div>

            <div>
              <FieldLabel required>
                Are you cleared to exercise by a
                medical professional if required?
              </FieldLabel>

              <div className="grid gap-3 sm:grid-cols-2">
                {["Yes", "No"].map((option) => (
                  <RadioCard
                    key={option}
                    name="medicallyCleared"
                    value={option}
                    checked={
                      form.medicallyCleared ===
                      option
                    }
                    onChange={(e) =>
                      updateField(
                        "medicallyCleared",
                        e.target.value,
                      )
                    }
                  >
                    {option}
                  </RadioCard>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }

    if (step === 3) {
      return (
        <>
          <SectionHeading
            eyebrow="04 / Lifestyle & Training Environment"
            title="Let’s make the plan fit your life."
            description="Your environment matters just as much as your training."
          />

          <div className="space-y-8">
            <div>
              <FieldLabel>
                Where will you be training?
              </FieldLabel>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Commercial gym",
                  "Home gym",
                  "Hybrid / travelling",
                  "Other",
                ].map((option) => (
                  <RadioCard
                    key={option}
                    name="trainingLocation"
                    value={option}
                    checked={
                      form.trainingLocation ===
                      option
                    }
                    onChange={(e) =>
                      updateField(
                        "trainingLocation",
                        e.target.value,
                      )
                    }
                  >
                    {option}
                  </RadioCard>
                ))}
              </div>

              {form.trainingLocation ===
                "Other" && (
                <div className="mt-4">
                  <TextInput
                    name="trainingLocationOther"
                    value={
                      form.trainingLocationOther
                    }
                    onChange={(e) =>
                      updateField(
                        "trainingLocationOther",
                        e.target.value,
                      )
                    }
                    placeholder="Please specify"
                  />
                </div>
              )}
            </div>

            <div>
              <FieldLabel hint="(e.g. barbells, dumbbells, cable machine, bands, nothing etc.)">
                What equipment do you have access
                to?
              </FieldLabel>

              <TextArea
                name="equipmentAccess"
                value={form.equipmentAccess}
                onChange={(e) =>
                  updateField(
                    "equipmentAccess",
                    e.target.value,
                  )
                }
                placeholder="Your answer"
              />
            </div>

            <div>
              <FieldLabel>
                Describe a typical day (work
                hours, stress, sleep, activity
                levels)
              </FieldLabel>

              <TextArea
                name="typicalDay"
                value={form.typicalDay}
                onChange={(e) =>
                  updateField(
                    "typicalDay",
                    e.target.value,
                  )
                }
                placeholder="Your answer"
              />
            </div>
          </div>
        </>
      );
    }

    if (step === 4) {
      return (
        <>
          <SectionHeading
            eyebrow="05 / Motivation & Commitment"
            title="What’s driving you to make a change?"
            description="The more honest you are here, the more useful your coaching plan can be."
          />

          <div className="space-y-8">
            <div>
              <FieldLabel required>
                Why now? Why coaching?
              </FieldLabel>

              <TextArea
                name="whyNow"
                value={form.whyNow}
                onChange={(e) =>
                  updateField(
                    "whyNow",
                    e.target.value,
                  )
                }
                placeholder="Your answer"
                required
              />
            </div>

            <div>
              <FieldLabel required>
                Rate your current motivation to
                improve
              </FieldLabel>

              <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
                {Array.from(
                  { length: 10 },
                  (_, i) => i + 1,
                ).map((number) => (
                  <label
                    key={number}
                    className={`
                        flex h-12 cursor-pointer items-center justify-center
                        rounded-xl border text-sm font-semibold
                        transition-all duration-300
                        ${
                          form.motivation ===
                          String(number)
                            ? "border-[#FF5E1A] bg-[#FF5E1A] text-white shadow-[0_10px_25px_rgba(255,94,26,0.18)]"
                            : "border-[#282828]/10 bg-[#faf9f6] text-[#282828] hover:bg-white hover:border-[#282828]/20"
                        }
                      `}
                  >
                    <input
                      type="radio"
                      name="motivation"
                      value={number}
                      checked={
                        form.motivation ===
                        String(number)
                      }
                      onChange={(e) =>
                        updateField(
                          "motivation",
                          e.target.value,
                        )
                      }
                      className="sr-only"
                    />

                    {number}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <FieldLabel required>
                What support do you feel you need
                from a coach?
              </FieldLabel>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Accountability",
                  "Expert programming & structuring",
                  "Injury rehab + guidance",
                  "Nutrition support",
                  "Education & technique help",
                  "Motivation / mindset",
                ].map((option) => (
                  <CheckboxCard
                    key={option}
                    value={option}
                    checked={form.coachSupport.includes(
                      option,
                    )}
                    onChange={() =>
                      toggleSupport(option)
                    }
                  >
                    {option}
                  </CheckboxCard>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }

    if (step === 5) {
      return (
        <>
          <SectionHeading
            eyebrow="06 / Budget & Start Date"
            title="Let’s talk about the next step."
            description="Choose the service that feels closest to what you need right now."
          />

          <div className="space-y-8">
            <div>
              <FieldLabel required>
                Which service are you interested
                in?
              </FieldLabel>

              <div className="grid gap-3">
                {[
                  "Online Coaching",
                  "Transformation",
                  "Performance Improvement",
                  "Rehabilitation Programming",
                  "Not sure, need help....",
                ].map((option) => (
                  <RadioCard
                    key={option}
                    name="serviceInterested"
                    value={option}
                    checked={
                      form.serviceInterested ===
                      option
                    }
                    onChange={(e) =>
                      updateField(
                        "serviceInterested",
                        e.target.value,
                      )
                    }
                  >
                    {option}
                  </RadioCard>
                ))}
              </div>
            </div>

            <div>
              <FieldLabel>
                What’s your coaching budget?
              </FieldLabel>

              <TextInput
                name="coachingBudget"
                value={form.coachingBudget}
                onChange={(e) =>
                  updateField(
                    "coachingBudget",
                    e.target.value,
                  )
                }
                placeholder="Your answer"
              />
            </div>

            <div>
              <FieldLabel required>
                When would you like to start?
              </FieldLabel>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "ASAP (this week)",
                  "Within 2 weeks",
                  "Within 4 weeks",
                  "Just gathering information",
                ].map((option) => (
                  <RadioCard
                    key={option}
                    name="startDate"
                    value={option}
                    checked={
                      form.startDate === option
                    }
                    onChange={(e) =>
                      updateField(
                        "startDate",
                        e.target.value,
                      )
                    }
                  >
                    {option}
                  </RadioCard>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <SectionHeading
          eyebrow="Final Section / Submission"
          title="Anything else you’d like me to know?"
          description="This is your space to add anything that hasn’t been covered above."
        />

        <div className="space-y-8">
          <div>
            <FieldLabel required>
              Is there anything else you'd like me
              to know?
            </FieldLabel>

            <TextArea
              name="additionalInfo"
              value={form.additionalInfo}
              onChange={(e) =>
                updateField(
                  "additionalInfo",
                  e.target.value,
                )
              }
              placeholder="Your answer"
              required
              rows={7}
            />
          </div>

          <div>
            <FieldLabel required>
              Re-enter your email for confirmation
            </FieldLabel>

            <TextInput
              name="confirmationEmail"
              type="email"
              value={form.confirmationEmail}
              onChange={(e) =>
                updateField(
                  "confirmationEmail",
                  e.target.value,
                )
              }
              placeholder="Your answer"
              required
            />
          </div>
        </div>
      </>
    );
  };

  if (submitted) {
    return (
      <main className=" bg-[#f7f6f2]">
        <section
          className="
    relative overflow-hidden
    border-b border-white/10
    bg-[#282828]
    text-white
  "
        >
          {/* Background Gradient — SAME AS ABOUT */}
          <div className="pointer-events-none absolute inset-0">
            {/* Main left-to-right gradient */}
            <div
              className="
        absolute inset-0
        bg-gradient-to-r
        from-[#282828]
        via-[#282828]/90
        to-[#282828]/35
      "
            />

            {/* Bottom dark fade */}
            <div
              className="
        absolute inset-0
        bg-gradient-to-t
        from-[#282828]
        via-transparent
        to-[#282828]/40
      "
            />

            {/* Soft orange glow */}
            <div
              className="
        absolute
        -right-40
        top-10
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#FF5E1A]/20
        blur-[150px]
      "
            />
          </div>

          {/* Huge background type */}
          <div
            aria-hidden="true"
            className="
      pointer-events-none
      absolute
      -right-[5%]
      top-[18%]
      select-none
      text-[18vw]
      font-semibold
      uppercase
      leading-none
      tracking-[-0.09em]
      text-white/[0.035]
      whitespace-nowrap
    "
          >
            ENQUIRE
          </div>

          {/* Right vertical line */}
          <div
            className="
      pointer-events-none
      absolute
      right-[8%]
      top-0
      hidden
      h-full
      w-px
      bg-white/[0.08]
      lg:block
    "
          />

          {/* Main content */}
          <div
            className="
      relative mx-auto flex
      min-h-[560px]
      max-w-[1600px]
      items-end
      px-5
      pb-10
      pt-28
      sm:px-8
      sm:pb-12
      lg:min-h-[600px]
      lg:px-12
      lg:pb-14
      lg:pt-20
    "
          >
            <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              {/* LEFT */}
              <div className="relative z-10">
                {/* Side decoration */}
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-[2px] w-12 bg-[#FF5E1A]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-xs">
                    Josh Thorpe
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="
            max-w-[930px]
            text-[clamp(4rem,8vw,8.5rem)]
            font-bold
            leading-[0.82]
            tracking-[-0.075em]
            text-white
          "
                >
                  Coaching
                  <br />
                  <span className="text-[#FF5E1A]">
                    Enquiry
                  </span>
                  <span className="text-[#FF5E1A]">
                    .
                  </span>
                </h1>

                {/* Description */}
                <p
                  className="
            mt-9
            max-w-[620px]
            text-base
            leading-7
            text-white/65
            sm:text-lg
            sm:leading-8
          "
                >
                  Take the first step towards
                  understanding your goals,
                  training needs, injury history
                  and lifestyle. Complete the
                  enquiry below and I’ll get back
                  to you.
                </p>

                {/* Small info row */}
                <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5E1A]" />
                    <span className="text-xs text-white/50 sm:text-sm">
                      Complete all sections
                    </span>
                  </div>

                  <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

                  <span className="text-xs text-white/50 sm:text-sm">
                    You’ll be contacted within
                    24–48 hours.
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative hidden lg:flex lg:h-full lg:items-center lg:justify-end">
                <div className="relative mr-10 flex h-[330px] w-[330px] items-center justify-center">
                  {/* Outer circle */}
                  <div
                    className="
              absolute inset-0
              rounded-full
              border border-white/[0.08]
            "
                  />

                  {/* Inner circle */}
                  <div
                    className="
              absolute inset-8
              rounded-full
              border border-white/[0.06]
            "
                  />

                  {/* Orange glow */}
                  <div
                    className="
              absolute inset-16
              rounded-full
              bg-[#FF5E1A]/10
              blur-3xl
            "
                  />

                  {/* Text */}
                  <div className="relative text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                      Your next step
                    </p>

                    <p
                      className="
                mt-3
                text-4xl
                font-semibold
                tracking-[-0.05em]
                text-white
              "
                    >
                      Let&apos;s talk.
                    </p>

                    <div className="mx-auto mt-5 h-[1px] w-14 bg-[#FF5E1A]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-[32px] border border-[#282828]/8 bg-white p-8 shadow-[0_24px_80px_rgba(40,40,40,0.08)] sm:p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF5E1A] text-white shadow-[0_16px_35px_rgba(255,94,26,0.2)]">
                <Check
                  size={30}
                  strokeWidth={2.5}
                />
              </div>

              <h2 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-[#282828]">
                You’re all set.
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-[#282828]/55">
                Thank you for getting in touch.
                Your enquiry has been successfully
                submitted. Josh will review your
                message and get back to you as
                soon as possible.
              </p>

              <button
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  setStep(0);
                  setSubmitted(false);
                }}
                className="
                  mt-8 inline-flex items-center gap-2 rounded-full
                  bg-[#282828] px-6 py-3.5 text-sm font-semibold text-white
                  transition-all duration-300 hover:-translate-y-0.5
                  hover:bg-[#FF5E1A]
                "
              >
                Submit another enquiry
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#282828]">
      {/* =========================
          PREMIUM BANNER
      ========================== */}
      <section className="relative isolate overflow-hidden bg-[#282828]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/services-hero.webp')",
          }}
        />

        <div
          className="absolute inset-0 bg-gradient-to-r
        from-[#282828]
        via-[#282828]/90
        to-[#282828]/35"
        />

        <div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gradient-to-t
        from-[#282828]
        via-transparent
        to-[#282828]/40 blur-3xl"
        />
        <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-[#FF5E1A]/20 blur-[150px]" />

        <div className="relative mx-auto min-h-[560px] max-w-7xl px-5 pb-16 pt-32 sm:px-8 lg:flex lg:items-end lg:px-12 lg:pb-20">
          <div className="max-w-4xl text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#FF5E1A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/80">
                JT Fitness & Injury
              </span>
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#FFB08C]">
              Coaching Enquiry
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Build a plan that
              <br />
              actually fits you.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              This form helps me understand your
              goals, injury history, and training
              needs so we can build a plan that
              actually fits you.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
              <span>Complete all sections</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#FF5E1A] sm:block" />
              <span>
                You’ll be contacted within 24–48
                hours.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FORM AREA
      ========================== */}
      <section className="relative px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            {/* =========================
                STEP NAVIGATION
            ========================== */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-[28px] border border-[#282828]/8 bg-white p-3 shadow-[0_20px_70px_rgba(40,40,40,0.06)]">
                <div className="px-4 pb-4 pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#282828]/35">
                    Your application
                  </p>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#282828]/7">
                    <div
                      className="h-full rounded-full bg-[#FF5E1A] transition-all duration-500"
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#282828]">
                      Step {step + 1} of{" "}
                      {TOTAL_STEPS}
                    </span>

                    <span className="text-[#282828]/40">
                      {Math.round(progress)}%
                    </span>
                  </div>
                </div>

                <div className="hidden space-y-1 lg:block">
                  {steps.map((item, index) => {
                    const Icon = item.icon;
                    const isActive =
                      index === step;
                    const isDone = index < step;

                    return (
                      <button
                        type="button"
                        key={item.number}
                        onClick={() => {
                          if (index < step) {
                            setStep(index);
                            setError("");
                          }
                        }}
                        className={`
                          group flex w-full items-center gap-3 rounded-2xl
                          p-3 text-left transition-all duration-300
                          ${
                            isActive
                              ? "bg-[#282828] text-white"
                              : isDone
                                ? "bg-[#FF5E1A]/6 text-[#282828]"
                                : "text-[#282828]/45"
                          }
                        `}
                      >
                        <span
                          className={`
                            flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                            ${
                              isActive
                                ? "bg-[#FF5E1A] text-white"
                                : isDone
                                  ? "bg-[#FF5E1A] text-white"
                                  : "bg-[#282828]/5 text-[#282828]/45"
                            }
                          `}
                        >
                          {isDone ? (
                            <Check
                              size={16}
                              strokeWidth={2.5}
                            />
                          ) : (
                            <Icon size={17} />
                          )}
                        </span>

                        <span className="min-w-0">
                          <span
                            className={`
                              block text-[10px] font-bold uppercase tracking-[0.16em]
                              ${
                                isActive
                                  ? "text-white/45"
                                  : "text-[#282828]/30"
                              }
                            `}
                          >
                            {item.number}
                          </span>

                          <span className="mt-0.5 block text-sm font-semibold">
                            {item.title}
                          </span>

                          <span
                            className={`
                              mt-0.5 block text-xs
                              ${
                                isActive
                                  ? "text-white/45"
                                  : "text-[#282828]/35"
                              }
                            `}
                          >
                            {item.short}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Mobile step label */}
                <div className="flex items-center gap-3 px-3 pb-3 pt-2 lg:hidden">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF5E1A] text-sm font-bold text-white">
                    {steps[step].number}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#282828]">
                      {steps[step].title}
                    </p>
                    <p className="text-xs text-[#282828]/45">
                      {steps[step].short}
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* =========================
                FORM CARD
            ========================== */}
            <div className="min-w-0">
              <form
                onSubmit={handleSubmit}
                className="
                  overflow-hidden rounded-[32px]
                  border border-[#282828]/8
                  bg-white
                  shadow-[0_24px_90px_rgba(40,40,40,0.07)]
                "
              >
                <div className="border-b border-[#282828]/7 px-6 py-6 sm:px-10 sm:py-8 lg:px-12">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF5E1A]">
                        JT Fitness
                      </p>

                      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#282828] sm:text-3xl">
                        {steps[step].title}
                      </h2>
                    </div>

                    <div className="hidden items-center gap-1.5 text-xs text-[#282828]/35 sm:flex">
                      <span>Required</span>
                      <span className="text-[#FF5E1A]">
                        *
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
                  {renderStep()}

                  {error && (
                    <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm leading-6 text-red-700">
                      {error}
                    </div>
                  )}
                </div>

                {/* =========================
                    FORM FOOTER
                ========================== */}
                <div className="flex flex-col-reverse gap-3 border-t border-[#282828]/7 bg-[#faf9f6] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
                  <div>
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={goBack}
                        className="
                          inline-flex items-center gap-2 rounded-full
                          px-5 py-3 text-sm font-semibold text-[#282828]/60
                          transition-all duration-300
                          hover:bg-white hover:text-[#282828]
                        "
                      >
                        <ArrowLeft size={16} />
                        Back
                      </button>
                    ) : (
                      <p className="px-2 text-xs text-[#282828]/35">
                        Take your time and answer
                        honestly.
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    {step < TOTAL_STEPS - 1 ? (
                      <button
                        type="button"
                        onClick={goNext}
                        className="
                          group inline-flex items-center justify-center gap-2
                          rounded-full bg-[#282828]
                          px-7 py-3.5
                          cursor-pointer
                          text-sm font-semibold text-white
                          shadow-[0_14px_30px_rgba(40,40,40,0.12)]
                          transition-all duration-300
                          hover:-translate-y-0.5 hover:bg-[#FF5E1A]
                          hover:shadow-[0_16px_35px_rgba(255,94,26,0.18)]
                        "
                      >
                        Continue
                        <ChevronRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="
                          group inline-flex items-center justify-center gap-2
                          rounded-full bg-[#FF5E1A]
                          px-7 py-3.5
                          cursor-pointer
                          text-sm font-semibold text-white
                          shadow-[0_14px_30px_rgba(255,94,26,0.2)]
                          transition-all duration-300
                          hover:-translate-y-0.5 hover:bg-[#282828]
                          hover:shadow-[0_16px_35px_rgba(40,40,40,0.14)]
                        "
                      >
                        Submit Enquiry
                        <Check
                          size={16}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
