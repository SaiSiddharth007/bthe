import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'eu-north-1',
    userPoolId: 'eu-north-1_qIWxZa4L3',
    userPoolWebClientId: '1uquj5lu21in530vpb7bnfi9o6', // 🔴 YOU STILL NEED THIS
  },
});

