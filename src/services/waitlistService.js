// const CONTACT_EMAIL = "matchmelosupport@gmail.com";

// ---- EmailJS config ----
// Pulled from .env (see .env.example). Vite only exposes vars prefixed with VITE_.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ---- Waitlist counter (no backend) ----
// countapi.xyz (the original service) is dead as of 2026 — using the
// community-run replacement at countapi.mileshilliard.com instead.
// No signup/keys needed. Pick a key unlikely to collide with anyone else's project.
const COUNTAPI_KEY = "matchmelo-com-waitlist-signups";
const COUNTAPI_BASE = "https://countapi.mileshilliard.com/api/v1";

export async function sendWaitlistEmail({ firstName, lastName, email }) {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error(
      "EmailJS env vars are missing. Check your .env file has VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY, and restart the dev server.",
    );
  }

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        first_name: firstName,
        last_name: lastName,
        email: email,
      },
    }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || "Failed to submit waitlist request");
  }
}

export async function incrementWaitlistCount() {
  const res = await fetch(`${COUNTAPI_BASE}/hit/${COUNTAPI_KEY}`);
  if (!res.ok) throw new Error("Failed to increment waitlist count");
  const data = await res.json();
  return Number(data.value) || 0;
}

export async function getWaitlistCount() {
  const res = await fetch(`${COUNTAPI_BASE}/get/${COUNTAPI_KEY}`);
  if (res.status === 404) return 0; // key doesn't exist yet — nobody's joined
  if (!res.ok) throw new Error("Failed to fetch waitlist count");
  const data = await res.json();
  return Number(data.value) || 0;
}

export async function sendBetaUpdatesEmail({ email }) {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error(
      "EmailJS env vars are missing. Check your .env file has VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY, and restart the dev server.",
    );
  }

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        first_name: "",
        last_name: "",
        email: email,
      },
    }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || "Failed to submit signup");
  }
}
