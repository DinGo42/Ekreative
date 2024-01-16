export enum CopyPhrases {
  COOL = 'COOL!',
  ROCK = 'IT`LL ROCK!',
  PASTE_ME = 'PASTE ME!',
  GOT_IT = 'GOT IT!',
  WILL_DO = 'WILL DO!',
  RIGHT_ONE = 'RIGHT ONE!',
}

export const generateRandomPhrase = (phrasesArr?: string[]) => {
  const phrases = phrasesArr || Object.values(CopyPhrases);
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
};
