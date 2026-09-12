'use client';

import { useEffect, useState } from 'react';

export default function TrustedTypesScript({ nonce }: { nonce: string }) {
  if (typeof window !== 'undefined') {
    return null;
  }

  return (
    <script
      nonce={nonce}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined' && window.trustedTypes && window.trustedTypes.createPolicy) {
            if (!window.trustedTypes.defaultPolicy) {
              window.trustedTypes.createPolicy('default', {
                createHTML: function(string) { return string; },
                createScript: function(string) { return string; },
                createScriptURL: function(string) { return string; }
              });
            }
          }
        `
      }}
    />
  );
}
