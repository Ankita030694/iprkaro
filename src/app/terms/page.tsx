import { redirect } from 'next/navigation';

export default function TermsRedirect() {
  redirect('/terms-and-conditions');
}

