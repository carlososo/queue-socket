import React from 'react'
import { UiProvider } from './context/UiContext'
import {RouterPage} from './pages/RouterPage'

export const TicketApp = () => {
    return (
        <div>
            <UiProvider>
             <RouterPage/>
            </UiProvider>
        </div>
    )
}
