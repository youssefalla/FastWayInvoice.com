'use client';

import { useEffect } from 'react';

interface EzoicAdProps {
  placementId: number;
}

interface WindowWithEzoic extends Window {
  ezstandalone?: {
    cmd: Array<(callback: () => void) => void>;
    showAds: (placementId: number) => void;
  };
}

export default function EzoicAd({ placementId }: EzoicAdProps) {
  useEffect(() => {
    const windowWithEzoic = typeof window !== 'undefined' ? (window as WindowWithEzoic) : null;
    if (windowWithEzoic?.ezstandalone) {
      windowWithEzoic.ezstandalone.cmd.push(function () {
        windowWithEzoic.ezstandalone?.showAds(placementId);
      });
    }
  }, [placementId]);

  return <div id={`ezoic-pub-ad-placeholder-${placementId}`}></div>;
}
