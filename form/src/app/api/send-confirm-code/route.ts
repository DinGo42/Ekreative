type ResponseData = {
  text: string;
};

const telegramApiUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

export async function POST(req: Response) {
  try {
    const { text }: ResponseData = await req.json();
    const res = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: -1001716010075,
        text,
        parse_mode: 'html',
      }),
    });

    if (!res.ok) {
      throw new Error(`Failed to send message. Status: ${res.status}`);
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error('Error:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
