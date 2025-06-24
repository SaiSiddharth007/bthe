'use client';

import { ReactNode, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import config from '@/lib/amplify-config';

export default function AmplifyProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    Amplify.configure(config);
  }, []);

  return <>{children}</>;
}
