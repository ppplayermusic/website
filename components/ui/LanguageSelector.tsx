'use client'

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/routing';
import { ChangeEvent } from 'react';

export function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    router.replace(pathname, {locale: nextLocale});
  }

  return (
    <div className="relative inline-block">
      <select
        className="appearance-none bg-transparent text-slate-400 hover:text-white text-sm font-medium pr-6 py-1 cursor-pointer outline-none transition-colors"
        defaultValue={locale}
        onChange={onSelectChange}
        aria-label="Select language"
      >
        <option value="en" className="text-black bg-white">English</option>
        <option value="pt-BR" className="text-black bg-white">Português (Brasil)</option>
        <option value="es" className="text-black bg-white">Español</option>
        <option value="ru" className="text-black bg-white">Русский</option>
        <option value="tr" className="text-black bg-white">Türkçe</option>
        <option value="fr" className="text-black bg-white">Français</option>
        <option value="de" className="text-black bg-white">Deutsch</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-slate-400">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
