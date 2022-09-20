import { signIn, signOut } from 'next-auth/react';
import { IHeaderIcons } from './HeaderIcons';

const base: IHeaderIcons = {
  length: 0,
  session: {
    user: {
      name: 'Doğucan Şaşıoğlu',
      email: 'sasiogludogucan@gmail.com',
      image:
        'https://lh3.googleusercontent.com/a/AItbvmk_K6r6brCf5h1y4Bp5NwUV7Jm03suM_1aEqQim=s96-c',
    },
    expires: '2023-10-18T22:55:34.544Z',
  },
  signIn,
  signOut,
};

export const mockHeaderIconsProps = {
  base,
};
