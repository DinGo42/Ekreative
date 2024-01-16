type ResponseData = {
  text: string;
};
export async function POST(req: Response) {
  const { text }: ResponseData = await req.json();
  const res = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: -1001716010075,
        text,
        parse_mode: 'html',
      }),
    }
  );
  const data = await res.json();

  return Response.json(data);
}
