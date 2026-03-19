import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/site";

/**
 * POST /api/booking
 * Sends booking request to the business email.
 * Set RESEND_API_KEY in .env.local. Add & verify your domain in Resend dashboard
 * for production. Free tier: onboarding@resend.dev works for testing.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      service,
      date,
      message,
    } = body as {
      name?: string;
      email?: string;
      phone?: string;
      service?: string;
      date?: string;
      message?: string;
    };
    const preferredDate = date;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name und E-Mail sind erforderlich." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "E-Mail-Versand nicht konfiguriert. Bitte RESEND_API_KEY setzen." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const to = siteConfig.contact.email;
    const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

    const html = `
      <h2>Neue Buchungsanfrage</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>Gewünschte Behandlung:</strong> ${escapeHtml(service || "—")}</p>
      <p><strong>Gewünschtes Datum/Zeit:</strong> ${escapeHtml(preferredDate || "—")}</p>
      <p><strong>Nachricht:</strong></p>
      <p>${escapeHtml(message || "—")}</p>
      <hr>
      <p><small>Gesendet über beauty-center-luzern.ch</small></p>
    `;

    const { error } = await resend.emails.send({
      from,
      to,
      subject: `Buchungsanfrage: ${escapeHtml(service || "Behandlung")} – ${escapeHtml(name)}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
