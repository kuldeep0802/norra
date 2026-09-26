export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatCad(amount: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export type LinkifyToken =
  | string
  | { type: "a"; href: string; label: string; key: string };

/**
 * Turn markdown links `[label](https://...)` and bare https URLs into tokens
 * for rendering as anchors. Does not invent destinations.
 */
export function tokenizeLinks(text: string): LinkifyToken[] {
  const nodes: LinkifyToken[] = [];
  // Markdown [label](url) where url is https or a site-relative path; plus bare https URLs
  const pattern =
    /\[([^\]]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)|(https?:\/\/[^\s<>"')\]]+)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    if (match[1] && match[2]) {
      nodes.push({ type: "a", href: match[2], label: match[1], key: `l${i++}` });
    } else if (match[3]) {
      const raw = match[3];
      const href = raw.replace(/[.,;:]+$/, "");
      const trailing = raw.slice(href.length);
      nodes.push({
        type: "a",
        href,
        label: href.replace(/^https?:\/\//, ""),
        key: `l${i++}`,
      });
      if (trailing) nodes.push(trailing);
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}
