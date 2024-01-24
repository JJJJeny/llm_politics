// AuthRedirect.js
// use client

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AuthRedirect = ({ redirectTo }) => {
    const { isSignedIn } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (isSignedIn) {
            router.push(redirectTo);
        }
    }, [isSignedIn, router, redirectTo]);

    return null;
};

export default AuthRedirect;
