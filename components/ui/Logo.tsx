import Image from "next/image";
import Link from "next/link";

/**
 * The official CloserX.ai wordmark. The source asset is a white logo on
 * transparent, cropped tight to its ink (1002x325) so the nav can size it by
 * height alone.
 */
export default function Logo({
  className = "",
  size = "nav",
}: {
  className?: string;
  /** `nav` for the header, `footer` for the slightly smaller footer mark. */
  size?: "nav" | "footer";
}) {
  const heights =
    size === "nav" ? "h-7 min-[430px]:h-8 sm:h-9 lg:h-10" : "h-9 sm:h-10";

  return (
    <Link
      href="/"
      aria-label="CloserX.ai home"
      className={`inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80 ${className}`}
    >
      <Image
        src="/logo.png"
        alt="CloserX.ai"
        width={1002}
        height={325}
        priority={size === "nav"}
        className={`w-auto ${heights}`}
      />
    </Link>
  );
}
