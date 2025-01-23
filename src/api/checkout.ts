import { NextResponse, NextRequest } from 'next/server';

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-06-20',
});

const prices = {
    sponsorChild: "price_1QkRbcEiGv4EG4FUTRNQpG5F",
    sadaqah: "price_1PJd2wEiGv4EG4FUsANVQXbw",
    zakat: "price_1PJcheEiGv4EG4FUtnQRURkW",
}

type PriceKey = keyof typeof prices;

export async function POST(request: NextRequest) {
    const { price: priceKey }: { price: PriceKey } = await request.json();

    if (!prices[priceKey]) {
        return NextResponse.json({ error: 'Invalid price' }, { status: 400 });
    }

    const price = prices[priceKey];

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price,
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${request.headers.get('origin')}/success`,
        cancel_url: `${request.headers.get('origin')}/fail`,
    });

    return NextResponse.redirect(session.url, 303);
}