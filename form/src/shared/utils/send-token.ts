export const sendTokenToUserPhone = async (phoneNumber: string, confirmCode: string) => {
  await fetch("/api/send-confirm-code", {
    method: "POST",
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: `Your auth confirm code is ${confirmCode} for phone number ${phoneNumber}`,
    }),
  });
};
