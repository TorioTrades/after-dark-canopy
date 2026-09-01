/**
 * A subtle, premium curved section divider — a single shallow arc
 * positioned at the bottom edge of a section. Fill it with the NEXT
 * section's background color so the curve reads as a shaped transition.
 */
export function CurveDivider({
  fill,
  direction = "up",
  className = "",
}: {
  /** Background color of the section BELOW (hex), e.g. "#ffffff" */
  fill: string;
  /**
   * "up"   — convex arc bulging up into the section above (default)
   * "down" — concave arc dipping down into the section below
   * Alternate direction between consecutive transitions for an S-curve rhythm.
   */
  direction?: "up" | "down";
  className?: string;
}) {
  const path =
    direction === "up"
      ? "M0,90 C480,8 960,8 1440,90 L1440,90 L0,90 Z"
      : "M0,8 C480,90 960,90 1440,8 L1440,90 L0,90 Z";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 leading-none ${className}`}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-[44px] w-full sm:h-[60px] md:h-[80px]"
      >
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}
