import React from 'react';
import { Image } from 'next/dist/client/image-component';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Profile() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    if (user) {
        // console.log(user);
        return (
            user && (
                <div className="profile-container">
                    <div>
                        <p>User Profile</p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src={user.picture ?? '/empty.png'}
                            alt={user.name ?? 'User Profile'}
                            width={100}
                            height={100}
                            className="profile-image"
                        />
                    </div>
                    <h2 className=' font-bold'>Welcome {user.nickname}!</h2>
                    <p>{user.email}</p>
                    <a href="api/auth/logout">Logout</a>
                </div>
            )
        );
    }

    return <a href="api/auth/login">Login</a>;
}
