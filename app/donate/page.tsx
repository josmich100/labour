"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Check, Heart, Smartphone, CreditCard, Building2 } from "lucide-react";

const PRESETS = [500, 1000, 2500, 5000];
const IMPACTS = [
  { amount: 500, desc: "Prints 20 voter-education leaflets" },
  { amount: 1000, desc: "Funds a county branch meeting" },
  { amount: 2500, desc: "Sponsors a youth coding session" },
  { amount: 5000, desc: "Supports a town hall event" },
];
type Method = "mpesa" | "bank" | "card";

export default function DonatePage() {
  const [amount, setAmount] = useState<number | "">(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [method, setMethod] = useState<Method>("mpesa");
  const [phone, setPhone] = useState("");
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  const finalAmount = customAmount ? Number(customAmount) : typeof amount === "number" ? amount : 0;
  const impact = IMPACTS.find((i) => i.amount <= finalAmount);

  const handleDonate = async () => {
    if (!finalAmount || finalAmount < 100) {
      toast.error("Minimum donation is KES 100");
      return;
    }
    if (method === "mpesa" && phone.length < 9) {
      toast.error("Enter a valid M-Pesa number");
      return;
    }
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 1800));
    setProcessing(false);
    setDone(true);
    if (method === "mpesa") {
      toast.success("M-Pesa STK push sent! Check your phone.");
    } else {
      toast.success("Thank you for your donation!");
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-60 flex items-center overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1920" alt="Donate" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2">Support the Cause</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Donate
          </h1>
          <p className="text-gray-300 mt-2">Every shilling funds a better Kenya.</p>
        </div>
      </section>

      <div className="max-w-xl mx-auto px-4 sm:px-6 py-12">
        {done ? (
          <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-red-600 fill-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              Asante Sana!
            </h2>
            <p className="text-gray-500 mb-4">
              Your donation of <strong>KES {finalAmount.toLocaleString()}</strong> is powering change.
            </p>
            <button onClick={() => { setDone(false); setCustomAmount(""); setAmount(1000); }} className="text-red-600 underline text-sm">
              Make another donation
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-7">
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>
              Choose Your Donation
            </h2>

            {/* Amount presets */}
            <div>
              <p className="form-label mb-2">Select amount (KES)</p>
              <div className="grid grid-cols-4 gap-3 mb-3">
                {PRESETS.map((p) => (
                  <button
                    key={p}
                    onClick={() => { setAmount(p); setCustomAmount(""); }}
                    className={`py-3 rounded-xl font-bold text-sm transition-all ${
                      amount === p && !customAmount
                        ? "bg-red-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {p.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Or enter custom amount..."
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setAmount(""); }}
                className="form-input"
                min={100}
              />
              {impact && finalAmount > 0 && (
                <p className="text-green-700 text-xs mt-2 font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> {impact.desc}
                </p>
              )}
            </div>

            {/* Payment method */}
            <div>
              <p className="form-label mb-2">Payment Method</p>
              <div className="grid grid-cols-3 gap-3">
                {([
                  { id: "mpesa", label: "M-Pesa", icon: Smartphone },
                  { id: "card", label: "Card", icon: CreditCard },
                  { id: "bank", label: "Bank Transfer", icon: Building2 },
                ] as { id: Method; label: string; icon: React.ElementType }[]).map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setMethod(id)}
                    className={`py-3 rounded-xl border-2 flex flex-col items-center gap-1 text-sm font-semibold transition-all ${
                      method === id
                        ? "border-red-600 bg-red-50 text-red-700"
                        : "border-gray-200 text-gray-600 hover:border-red-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" /> {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Method details */}
            {method === "mpesa" && (
              <div>
                <label className="form-label">M-Pesa Phone Number</label>
                <input
                  type="tel"
                  placeholder="07XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input mt-1"
                />
                <p className="text-xs text-gray-400 mt-1">
                  You&apos;ll receive an STK push on your phone to confirm the payment.
                </p>
              </div>
            )}
            {method === "bank" && (
              <div className="bg-gray-50 rounded-xl p-5 text-sm space-y-2">
                <p className="font-bold text-gray-800">Bank Transfer Details</p>
                <div className="space-y-1 text-gray-600">
                  <p><strong>Bank:</strong> Equity Bank Kenya</p>
                  <p><strong>Account Name:</strong> Labour Party of Kenya</p>
                  <p><strong>Account Number:</strong> 0123456789012</p>
                  <p><strong>Branch:</strong> Nairobi HQ — Kenyatta Ave</p>
                </div>
              </div>
            )}
            {method === "card" && (
              <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-500">
                Secure card payment powered by Stripe. You&apos;ll be redirected to the payment page.
              </div>
            )}

            <button
              onClick={handleDonate}
              disabled={processing}
              className="w-full btn-primary py-4 text-base flex items-center justify-center gap-2"
            >
              {processing ? (
                <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Processing...</>
              ) : (
                <><Heart className="w-5 h-5 fill-white" /> Donate KES {finalAmount ? finalAmount.toLocaleString() : "—"}</>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
