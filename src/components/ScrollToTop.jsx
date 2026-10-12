import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * React Router keeps the window's scroll position across navigations, so
 * clicking a case study from halfway down /work/ opened the new page already
 * scrolled to the bottom.
 *
 * Three cases have to stay correct:
 *   - a normal click should land at the top of the new page
 *   - back/forward should restore where the reader actually was
 *   - a link carrying a #hash should land on that section, not the top
 *
 * `behavior: "instant"` matters because `html { scroll-behavior: smooth }`
 * would otherwise animate the full height of the page on every navigation.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // POP is back/forward — the browser's own restoration is what the reader wants.
    if (navigationType === "POP") return;

    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navigationType]);

  return null;
}
