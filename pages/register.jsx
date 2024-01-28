import React from 'react'

import RegisterForm from '@/app/components/RegisterForm/RegisterForm'
import SharedLayout from '@/app/components/SharedLayout'

const register = () => {
    return (
        <SharedLayout>
            <RegisterForm />
        </SharedLayout>
    )
}

export default register