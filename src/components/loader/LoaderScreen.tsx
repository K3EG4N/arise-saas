"use client";

import { useEffect, useRef, useState } from "react";
import "../../styles/Loader.css";

const LOGO_PATHS = [
  "M9814 12790 c-73 -10 -203 -59 -262 -99 -106 -70 -184 -165 -350 -422 -181 -282 -271 -437 -1023 -1764 -177 -313 -608 -1069 -958 -1680 -1260 -2204 -1264 -2211 -1256 -2224 18 -31 315 -56 470 -40 440 45 747 237 1012 634 87 131 872 1500 1713 2985 166 294 330 585 365 645 34 61 206 364 382 675 634 1120 592 1040 573 1075 -26 49 -235 164 -354 195 -87 22 -230 31 -312 20z",
  "M8020 12339 c-164 -44 -313 -158 -427 -327 -64 -93 -215 -348 -440 -742 -164 -287 -415 -725 -891 -1555 -1071 -1868 -1425 -2492 -1429 -2525 -4 -28 0 -40 19 -56 25 -24 511 -304 675 -390 57 -30 111 -54 120 -54 40 1 -1 -66 536 870 405 705 1807 3159 2149 3760 380 669 438 774 438 793 0 45 -262 199 -395 232 -87 22 -261 19 -355 -6z",
  "M6304 11910 c-87 -22 -149 -53 -231 -113 -82 -61 -153 -149 -245 -304 -148 -249 -1044 -1799 -1283 -2218 -81 -143 -290 -505 -463 -805 -335 -580 -367 -639 -357 -669 7 -24 30 -39 335 -216 355 -207 461 -265 488 -265 16 0 31 14 56 53 36 57 351 604 871 1512 185 325 417 730 515 900 98 171 224 393 282 495 57 102 256 449 441 773 186 323 340 600 343 616 5 24 0 33 -38 63 -92 74 -250 153 -364 183 -83 21 -259 19 -350 -5z",
  "M2360 10313 c-184 -28 -237 -39 -305 -60 -192 -60 -321 -154 -408 -295 -27 -44 -50 -71 -66 -75 -13 -3 -51 3 -85 13 -88 26 -412 32 -508 10 -374 -87 -615 -357 -675 -754 -16 -106 -14 -142 6 -142 6 0 42 29 81 64 92 82 164 120 270 142 228 46 567 -31 878 -198 170 -91 614 -340 1107 -620 617 -350 776 -438 797 -438 26 0 70 70 388 625 92 160 281 490 422 735 374 652 381 666 369 688 -14 27 -77 44 -415 117 -456 97 -901 166 -1203 185 -149 9 -599 12 -653 3z",
];

const EXIT_DURATION_MS = 850;

type Phase = "entering" | "visible" | "exiting";

export function LoaderScreen({ loading }: { loading: boolean }) {
  const [mounted, setMounted] = useState(loading);
  const [phase, setPhase] = useState<Phase>(loading ? "visible" : "entering");
  const [status, setStatus] = useState("Preparando tu espacio");
  const [statusSwap, setStatusSwap] = useState(false);
  const [popping, setPopping] = useState(false);

  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const loadingRef = useRef(loading);
  const skipHoldRef = useRef<(() => void) | null>(null);
  const runningRef = useRef(false);

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  useEffect(() => {
    if (loading && !mounted) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMounted(true);
      setPhase("entering");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setPhase("visible")),
      );
    }
    if (loading && phase === "exiting") {
      setPopping(false);
      setPhase("visible");
    }
  }, [loading, mounted, phase]);

  useEffect(() => {
    if (!mounted || runningRef.current) return;
    runningRef.current = true;
    let cancelled = false;

    const paths = pathRefs.current.filter(Boolean) as SVGPathElement[];
    const lens = paths.map((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = String(len);
      p.style.strokeDashoffset = String(len);
      return len;
    });

    const setStatusText = (text: string) => {
      setStatusSwap(true);
      setTimeout(() => {
        if (!cancelled) {
          setStatus(text);
          setStatusSwap(false);
        }
      }, 160);
    };

    const delay = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = setTimeout(resolve, ms);
        skipHoldRef.current = () => {
          clearTimeout(t);
          resolve();
        };
      });

    const drawIn = () => {
      setStatusText("Preparando tu espacio");
      const anims = paths.map((p, i) =>
        p.animate([{ strokeDashoffset: lens[i] }, { strokeDashoffset: 0 }], {
          duration: 1000,
          delay: i * 100,
          easing: "cubic-bezier(.65,0,.35,1)",
          fill: "forwards",
        }),
      );
      return Promise.all(anims.map((a) => a.finished));
    };

    const fillIn = () => {
      const anims = paths.map((p) =>
        p.animate([{ fillOpacity: 0 }, { fillOpacity: 1 }], {
          duration: 500,
          easing: "ease",
          fill: "forwards",
        }),
      );
      return Promise.all(anims.map((a) => a.finished));
    };

    const fillOut = () => {
      setStatusText("Un momento más");
      const anims = paths.map((p) =>
        p.animate([{ fillOpacity: 1 }, { fillOpacity: 0 }], {
          duration: 350,
          easing: "ease",
          fill: "forwards",
        }),
      );
      return Promise.all(anims.map((a) => a.finished));
    };

    const drawOut = () => {
      const anims = paths.map((p, i) =>
        p.animate([{ strokeDashoffset: 0 }, { strokeDashoffset: lens[i] }], {
          duration: 700,
          delay: i * 60,
          easing: "cubic-bezier(.65,0,.35,1)",
          fill: "forwards",
        }),
      );
      return Promise.all(anims.map((a) => a.finished));
    };

    (async () => {
      while (!cancelled) {
        await drawIn();
        await fillIn();
        setStatusText("Listo");
        await delay(1100);

        if (!loadingRef.current) {
          setPopping(true);
          await delay(500);
          setPopping(false);
          setPhase("exiting");
          break;
        } else {
          await fillOut();
          await drawOut();
        }
      }
      runningRef.current = false;
    })();

    return () => {
      cancelled = true;
    };
  }, [mounted]);

  useEffect(() => {
    if (phase !== "exiting") return;
    const t = setTimeout(() => {
      setMounted(false);
      setPhase("entering");
      setStatus("Preparando tu espacio");
    }, EXIT_DURATION_MS);
    return () => clearTimeout(t);
  }, [phase]);

  if (!mounted) return null;

  return (
    <div className={`loader-screen loader-screen--${phase}`}>
      <div className="loader-glow" aria-hidden="true" />

      <div className="loader-center">
        <div
          className={
            popping ? "loader-lockup loader-lockup--pop" : "loader-lockup"
          }
        >
          <div className="loader-mark-wrap">
            <svg className="loader-mark-ghost" viewBox="10 615 1060 670">
              <g transform="translate(0,1920) scale(0.1,-0.1)">
                {LOGO_PATHS.map((d, i) => (
                  <path key={i} d={d} />
                ))}
              </g>
            </svg>

            <svg className="loader-mark-active" viewBox="10 615 1060 670">
              <defs>
                <linearGradient
                  id="loaderBrandGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="var(--loader-logo-light)" />
                  <stop offset="55%" stopColor="var(--loader-logo-mid)" />
                  <stop offset="100%" stopColor="var(--loader-logo-deep)" />
                </linearGradient>
              </defs>
              <g transform="translate(0,1920) scale(0.1,-0.1)">
                {LOGO_PATHS.map((d, i) => (
                  <path
                    key={i}
                    ref={(el) => {
                      pathRefs.current[i] = el;
                    }}
                    className="loader-mark-path"
                    d={d}
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>

        <div
          className={
            statusSwap ? "loader-status loader-status--swap" : "loader-status"
          }
        >
          {status}
        </div>
      </div>
    </div>
  );
}
