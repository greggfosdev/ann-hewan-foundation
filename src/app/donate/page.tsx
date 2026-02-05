"use client";

import { useState } from "react";
import { Metadata } from "next";

const impactAmounts = [
  {
    amount: 25,
    impact: "1 week of meals",
    description: "Feed a child breakfast for an entire week",
  },
  {
    amount: 50,
    impact: "2 weeks of meals",
    description: "Provide nutritious breakfasts for two weeks",
  },
  {
    amount: 100,
    impact: "1 month of meals",
    description: "A full month of morning nutrition",
  },
  {
    amount: 250,
    impact: "School supplies",
    description: "Outfit a student for the school year",
  },
];

const programs = [
  { id: "general", name: "Where Most Needed", description: "Support all programs" },
  { id: "breakfast", name: "The Breakfast Project", description: "Daily meals for children" },
  { id: "school", name: "Back 2 School", description: "Supplies and uniforms" },
  { id: "fields", name: "Playing Fields", description: "Community recreation" },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [selectedProgram, setSelectedProgram] = useState("general");

  const activeAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <div className="bg-cream min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-trust-green/10 px-4 py-1.5 text-sm font-medium text-trust-green mb-6">
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clipRule="evenodd"
              />
            </svg>
            100% of your donation goes directly to programs
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Make a Difference Today
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every dollar helps us feed children, support education, and strengthen
            the Goodwill community. Your gift is tax-deductible.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Donation Form */}
          <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5">
            {/* Donation Type Toggle */}
            <div className="flex rounded-full bg-gray-100 p-1">
              <button
                type="button"
                onClick={() => setDonationType("one-time")}
                className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                  donationType === "one-time"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                One-time
              </button>
              <button
                type="button"
                onClick={() => setDonationType("monthly")}
                className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                  donationType === "monthly"
                    ? "bg-gold text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
            </div>

            {donationType === "monthly" && (
              <div className="mt-4 rounded-lg bg-gold/10 p-4 text-center">
                <p className="text-sm font-medium text-gold-dark">
                  Monthly giving multiplies your impact by 12x!
                </p>
              </div>
            )}

            {/* Impact-based Amounts */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900">
                Select an Amount
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {impactAmounts.map((item) => (
                  <button
                    key={item.amount}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(item.amount);
                      setCustomAmount("");
                    }}
                    className={`rounded-xl border-2 p-4 text-left transition-all ${
                      selectedAmount === item.amount && !customAmount
                        ? "border-gold bg-gold/5 ring-2 ring-gold/20"
                        : "border-gray-200 hover:border-gold/50"
                    }`}
                  >
                    <p className="text-2xl font-bold text-gray-900">
                      ${item.amount}
                    </p>
                    <p className="mt-1 text-sm font-medium text-gold-dark">
                      {item.impact}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {item.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mt-6">
              <label
                htmlFor="customAmount"
                className="block text-sm font-medium text-gray-900"
              >
                Or enter a custom amount
              </label>
              <div className="relative mt-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 font-medium">
                  $
                </span>
                <input
                  type="number"
                  id="customAmount"
                  name="customAmount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="0.00"
                  className="block w-full rounded-xl border-0 py-3 pl-8 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gold"
                />
              </div>
            </div>

            {/* Program Selection */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">
                Choose a program to support
              </h3>
              <div className="mt-4 space-y-3">
                {programs.map((program) => (
                  <label
                    key={program.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all ${
                      selectedProgram === program.id
                        ? "border-ocean bg-ocean/5"
                        : "border-gray-200 hover:border-ocean/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="program"
                      value={program.id}
                      checked={selectedProgram === program.id}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="h-4 w-4 border-gray-300 text-ocean focus:ring-ocean"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{program.name}</p>
                      <p className="text-sm text-gray-500">{program.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="mt-8 w-full rounded-full bg-gold px-8 py-4 text-base font-semibold text-white shadow-lg shadow-gold/30 hover:bg-gold-dark hover:shadow-gold/40 transition-all"
            >
              {donationType === "monthly" ? "Start Monthly Donation" : "Donate"}{" "}
              {activeAmount ? `$${activeAmount}` : ""}
            </button>

            {/* Trust Indicators */}
            <div className="mt-6 flex flex-col items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-trust-green"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Secure payment via Stripe
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-trust-green"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Tax-deductible receipt
                </span>
              </div>
              <p className="text-xs text-gray-400 text-center">
                The Ann Hewan Foundation is a 501(c)(3) nonprofit organization.
                <br />
                Your donation is tax-deductible to the extent allowed by law.
              </p>
            </div>
          </div>

          {/* Impact Preview */}
          <div className="space-y-6">
            {/* Your Impact Card */}
            <div className="rounded-2xl bg-gradient-to-br from-ocean to-ocean-dark p-8 text-white">
              <h3 className="text-lg font-semibold text-ocean-light">
                Your Impact
              </h3>
              {activeAmount ? (
                <>
                  <p className="mt-4 text-4xl font-bold">
                    ${activeAmount}
                    {donationType === "monthly" && (
                      <span className="text-xl font-normal text-ocean-light">
                        /month
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-ocean-light">
                    {donationType === "monthly"
                      ? `$${activeAmount * 12} annually`
                      : "One-time gift"}
                  </p>

                  <div className="mt-6 space-y-4">
                    {activeAmount >= 25 && (
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 rounded-full bg-white/20 p-1.5">
                          <svg
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-sm">
                          {Math.floor(activeAmount / 25)} week{activeAmount >= 50 ? "s" : ""} of
                          breakfast for a child
                        </p>
                      </div>
                    )}
                    {activeAmount >= 100 && (
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 rounded-full bg-white/20 p-1.5">
                          <svg
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-sm">
                          {Math.floor(activeAmount / 100)} student{activeAmount >= 200 ? "s" : ""}{" "}
                          with school supplies
                        </p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <p className="mt-4 text-ocean-light">
                  Select an amount to see your impact
                </p>
              )}
            </div>

            {/* Transparency Card */}
            <div className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5">
              <h3 className="text-lg font-semibold text-gray-900">
                Where Your Money Goes
              </h3>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-900">Programs</span>
                    <span className="font-bold text-trust-green">100%</span>
                  </div>
                  <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full rounded-full bg-trust-green" style={{ width: "100%" }} />
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  All administrative costs are covered by our founders and board members,
                  ensuring every dollar you donate goes directly to helping children
                  and families in Goodwill.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-900/5">
                <p className="text-3xl font-bold text-gold">500+</p>
                <p className="mt-1 text-sm text-gray-600">Children fed daily</p>
              </div>
              <div className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-900/5">
                <p className="text-3xl font-bold text-ocean">15</p>
                <p className="mt-1 text-sm text-gray-600">Years of service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Ways to Give */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Other Ways to Give
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-900/5">
              <div className="mx-auto h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Check or Wire</h3>
              <p className="mt-2 text-sm text-gray-600">
                Mail a check to our Orlando address or contact us for wire transfer details.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-900/5">
              <div className="mx-auto h-12 w-12 rounded-full bg-ocean/10 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-ocean"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Corporate Partnership</h3>
              <p className="mt-2 text-sm text-gray-600">
                Partner with us for matching gifts, sponsorships, or employee giving programs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-900/5">
              <div className="mx-auto h-12 w-12 rounded-full bg-coral/10 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-coral"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Planned Giving</h3>
              <p className="mt-2 text-sm text-gray-600">
                Include the foundation in your estate planning to leave a lasting legacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
