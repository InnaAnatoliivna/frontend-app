import { LoginForm } from '@/app/components/LoginForm/LoginForm'
import SharedLayout from '@/app/components/SharedLayout'
import React from 'react'

const login = () => {
    return (
        <SharedLayout>
            <LoginForm />
        </SharedLayout>
    )
}

export default login