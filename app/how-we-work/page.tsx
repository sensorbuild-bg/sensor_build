'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import AnimatedDiv from '@/components/AnimatedDiv';

export default function HowWeWork() {
  const { lang } = useLanguage();
  const t = translations[lang].howWeWork;

  const steps = [
    { number: '1', ...t.step1 },
    { number: '2', ...t.step2 },
    { number: '3', ...t.step3 },
    { number: '4', ...t.step4 },
  ];

  return (
    <div className={`py-16 md:py-24 ${lang === 'bg' ? 'bg-[#13182c]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${lang === 'bg' ? 'text-white' : 'text-gray-900'}`}>
            {t.title}
          </h1>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <AnimatedDiv key={index} className="flex flex-col md:flex-row items-start gap-8">
              {/* Step Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#388644] rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">{step.number}</span>
                </div>
                {/* Connecting Line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-1 h-24 bg-[#388644] mx-auto mt-4"></div>
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h2 className={`text-2xl md:text-3xl font-semibold mb-4 ${lang === 'bg' ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h2>
                <p className={`text-lg leading-relaxed ${lang === 'bg' ? 'text-white' : 'text-gray-600'}`}>
                  {step.description}
                </p>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </div>
  );
}
