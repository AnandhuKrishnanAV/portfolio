type HoverLinksProps = {
  text: string;
};

/** Slide-up duplicate label on hover. */
export function HoverLinks({ text }: HoverLinksProps) {
  return (
    <span className="hover-link">
      <span className="hover-in">
        {text} <span className="hover-in-duplicate">{text}</span>
      </span>
    </span>
  );
}
