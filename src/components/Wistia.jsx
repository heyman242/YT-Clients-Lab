import { useId } from "react";

/**
 * Wistia responsive iframe (no external scripts needed)
 * Pass your video hash via `wistiaId` prop
 * Example: <Wistia wistiaId="abc123defg" />
 */
export default function Wistia({ wistiaId = "uj3ezczwdq" }) {
  const titleId = useId();
  return (
    <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
      <div className="aspect-[16/9] bg-black/40">
        <iframe
          title={`Wistia video ${titleId}`}
          src={`https://fast.wistia.net/embed/iframe/${wistiaId}?videoFoam=true&autoplay=false&muted=false`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
