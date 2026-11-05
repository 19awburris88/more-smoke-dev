import { useSyncExternalStore } from "react";
import { Link, useLocation } from "react-router-dom";
import { CAMPAIGN, daysLeftStore, phaseStore } from "../data/campaign";

/**
 * Slim promo bar above the nav.
 *
 * Renders nothing until the phase is known on the client. The site is
 * prerendered, so a build-time date would be frozen into the HTML and a
 * finished offer would keep advertising itself until the next deploy. Costing
 * one frame of layout shift is the right trade against promising a price that
 * has expired.
 */
export default function CampaignBanner() {
  const phase = useSyncExternalStore(
    phaseStore.subscribe, phaseStore.getSnapshot, phaseStore.getServerSnapshot);
  const remaining = useSyncExternalStore(
    daysLeftStore.subscribe, daysLeftStore.getSnapshot, daysLeftStore.getServerSnapshot);
  const { pathname } = useLocation();

  // Nothing to advertise, or they are already on the page it points to.
  if (phase === null || phase === "closed") return null;
  if (pathname.replace(/\/+$/, "") === CAMPAIGN.path.replace(/\/+$/, "")) return null;

  return (
    <Link to={CAMPAIGN.path} className="promo-bar">
      <span className="promo-bar-price">${CAMPAIGN.price}</span>
      <span className="promo-bar-text">
        one-page websites
        {phase === "upcoming"
          ? ` — opens ${CAMPAIGN.startLabel}`
          : remaining > 0
            ? ` — ${remaining} ${remaining === 1 ? "day" : "days"} left`
            : ""}
      </span>
      <span className="promo-bar-cta">See the offer →</span>
    </Link>
  );
}
