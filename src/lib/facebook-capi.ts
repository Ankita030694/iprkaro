import crypto from 'crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const ACCESS_TOKEN = process.env.FACEBOOK_CAPI_ACCESS_TOKEN;

// Helper to hash PII (SHA-256)
const hash = (value: string) => {
    if (!value) return undefined;
    return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
};

interface CapiEvent {
    eventName: string;
    email: string;
    phone?: string;
    userAgent: string;
    ipAddress: string;
    eventId?: string; // Unique ID for deduplication
    value?: number;
    currency?: string;
    url: string;
    fbp?: string | null;
    fbc?: string | null;
    testEventCode?: string;
}

export async function sendCapiEvent(event: CapiEvent) {
    if (!PIXEL_ID || !ACCESS_TOKEN) {
        console.warn('Facebook Pixel ID or Access Token is missing. CAPI event not sent.');
        return;
    }

    const currentTimestamp = Math.floor(Date.now() / 1000);

    const payload = {
        data: [
            {
                event_name: event.eventName,
                event_time: currentTimestamp,
                action_source: "website",
                event_source_url: event.url,
                event_id: event.eventId,
                user_data: {
                    em: [hash(event.email)],
                    ph: event.phone ? [hash(event.phone)] : undefined,
                    client_ip_address: event.ipAddress,
                    client_user_agent: event.userAgent,
                    fbc: event.fbc,
                    fbp: event.fbp,
                },
                custom_data: {
                    currency: event.currency || 'INR',
                    value: event.value,
                },
            },
        ],
        test_event_code: event.testEventCode,
    };

    try {
        const response = await fetch(
            `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            }
        );

        const data = await response.json();
        if (!response.ok) {
            console.error('CAPI Error:', data);
        } else {
            console.log('CAPI Success:', data);
        }
    } catch (error) {
        console.error('Network Error sending CAPI event:', error);
    }
}
