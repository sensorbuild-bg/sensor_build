'use client';

import { useRouter } from 'next/navigation';

type Props = {
  label?: string;
};

export default function BackButton({ label = '← Назад' }: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        inline-flex items-center gap-2
        rounded-xl border border-[#388644]
        px-4 py-2
        text-sm font-medium
        text-[#62b946]
        hover:bg-[#62b946]/10
        transition
      "
    >
      {label}
    </button>
  );
}
