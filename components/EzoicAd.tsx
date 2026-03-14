'use client';

import { useEffect } from 'react';

interface EzoicAdProps {
  placementId: number;
}

export default function EzoicAd({ placementId }: EzoicAdProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ezstandalone) {
      window.ezstandalone.cmd.push(function () {
        window.ezstandalone.showAds(placementId);
      });
    }
  }, [placementId]);

  return <div id={`ezoic-pub-ad-placeholder-${placementId}`}></div>;
}
