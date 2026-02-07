'use client';

import { usePathname } from 'next/navigation';
import BackButton from '@/components/BackButton';

export default function GlobalBackButton() {
  const pathname = usePathname();

  // ❌ не показваме бутона на началната страница
  if (pathname === '/') return null;

  return (
    <div className="mx-auto max-w-7xl px-4 pt-6">
      <BackButton />
    </div>
  );
}
