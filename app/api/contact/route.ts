import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  need?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const need = body.need?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios: nombre, email y mensaje." },
        { status: 400 },
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Configura TELEGRAM_BOT_TOKEN y TELEGRAM_CHAT_ID en el entorno." },
        { status: 500 },
      );
    }

    const text = [
      "Nuevo contacto web",
      "",
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Necesidad: ${need || "No especificada"}`,
      "",
      "Mensaje:",
      message,
    ].join("\n");

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });

    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.text();
      return NextResponse.json(
        { error: `Telegram devolvio error: ${telegramError}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "No se pudo procesar la solicitud." }, { status: 500 });
  }
}
