'use server';

import { sendCapiEvent } from '@/lib/facebook-capi';

interface PurchaseEventData {
    email: string;
    phone: string;
    userAgent: string;
    ip: string;
    url: string;
    fbp?: string | null;
    fbc?: string | null;
    amount: number;
    leadId: string;
    testEventCode?: string;
}

export async function sendPurchaseEvent(data: PurchaseEventData) {
    try {
        await sendCapiEvent({
            eventName: 'Purchase',
            email: data.email,
            phone: data.phone,
            userAgent: data.userAgent,
            ipAddress: data.ip,
            url: data.url,
            fbp: data.fbp,
            fbc: data.fbc,
            value: data.amount,
            currency: 'INR',
            eventId: `purchase_${data.leadId}`,
            testEventCode: data.testEventCode
        });
        return { success: true };
    } catch (error) {
        console.error('Error sending CAPI event:', error);
        return { success: false, error: 'Failed to send CAPI event' };
    }
}
