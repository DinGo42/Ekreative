export const sendTokenToUserPhone = async (
  phoneNumber: string,
  confirmCode: string
) => {
  const token = '6685469839:AAHDDmJQZ6xE7MNYzW-2qJaNa-qXchBsTlg';
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: -1001716010075,
      text: `Your auth confirm code is ${confirmCode} for phone number ${phoneNumber}`,
      parse_mode: 'html',
    }),
  });
};
