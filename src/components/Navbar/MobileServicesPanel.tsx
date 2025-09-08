import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function MobileServicesPanel({
  id,
  open,
  links,
  onNavigate,
}: {
  id: string;
  open: boolean;
  links: { text: string; to: string }[];
  onNavigate: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

  const measure = () => {
    if (!el) return;
    const extra = 20;
    setMaxH(el.scrollHeight + extra);
  };

  measure();
    if (open) {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
  }, [open, links.length]);

  return (
    <div
      id={id}
      className={`dropdown-panel ${open ? "open" : ""}`}
      style={{ maxHeight: open ? maxH : 0 }}
      aria-hidden={!open}
      ref={ref}
    >
      <ul className="dropdown-list">
        {links.map((serviceLink) => (
          <li key={serviceLink.to}>
            <Link
              to={serviceLink.to}
              className="dropdown-item-mobile"
              onClick={onNavigate}
            >
              {serviceLink.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
