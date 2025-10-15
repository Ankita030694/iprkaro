import React from 'react';
import TrademarkRegistrationClient from './TrademarkRegistrationClient';

// Convert slug to proper state name
function getStateName(slug: string): string {
  const stateSlug = slug.replace('trademark-registration-in-', '');
  return stateSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function TrademarkRegistrationSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stateName = getStateName(slug);

  return <TrademarkRegistrationClient stateName={stateName} />;
}
