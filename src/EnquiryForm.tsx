import { useState, type FormEvent } from "react";
import Icon from "./Icon";
import { cars } from "./data";

const EMAIL_TO = "kartik65361@gmail.com";
const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL_TO}`;

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 outline-none backdrop-blur transition focus:border-amber-400/60 focus:bg-white/10";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({
          _subject: `🚕 New Taxi Enquiry — ${data.get("name")} (${data.get("phone")})`,
          _template: "table",
          _captcha: "false",
          Name: data.get("name"),
          Phone: data.get("phone"),
          From: data.get("from") || "Not specified",
          To: data.get("to") || "Not specified",
          Vehicle: data.get("vehicle"),
          Message: data.get("message") || "—",
        }),
      });
      const json = await res.json();
      if (res.ok && (json.success === "true" || json.success === true)) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-green-400 ring-1 ring-green-400/40">
          <Icon name="check" className="h-8 w-8" />
        </div>
        <h4 className="mt-5 text-xl font-extrabold text-white">Enquiry Sent!</h4>
        <p className="mt-2 max-w-xs text-sm text-zinc-400">
          Thank you! We've received your details and will call you back shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <input required name="name" aria-label="Full Name" placeholder="Your Name" className={inputCls} />
      <input
        required
        name="phone"
        type="tel"
        pattern="[0-9+ -]{10,15}"
        aria-label="Phone Number"
        placeholder="Phone Number"
        className={inputCls}
      />
      <div className="grid grid-cols-2 gap-4">
        <input name="from" aria-label="Pickup Location (From)" placeholder="From" className={inputCls} />
        <input name="to" aria-label="Drop Location (To)" placeholder="To" className={inputCls} />
      </div>
      <select name="vehicle" aria-label="Select Vehicle Class" defaultValue="Any" className={inputCls}>
        <option className="bg-zinc-900" value="Any">
          Select Vehicle
        </option>
        {cars.map((c) => (
          <option key={c.name} className="bg-zinc-900" value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        rows={3}
        aria-label="Travel Date and Special Requirements"
        placeholder="Travel date / any details (optional)"
        className={`${inputCls} resize-none`}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-600 py-3.5 text-base font-extrabold text-zinc-900 shadow-lg shadow-amber-500/30 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "sending" ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-900/30 border-t-zinc-900" />
            Sending...
          </>
        ) : (
          <>
            <Icon name="arrow" className="h-5 w-5" /> Send Enquiry
          </>
        )}
      </button>
      {status === "error" && (
        <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-center text-sm font-semibold text-red-300">
          Couldn't send right now. Please call us directly at{" "}
          <a href="tel:8580621598" className="underline">
            8580621598
          </a>
          .
        </p>
      )}
      <p className="text-center text-xs text-zinc-500">
        Your enquiry is emailed to our booking desk instantly.
      </p>
    </form>
  );
}
