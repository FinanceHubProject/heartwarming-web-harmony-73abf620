import { Link } from "@tanstack/react-router";
import type { CSSProperties, ReactNode } from "react";

interface AppLinkProps {
  to: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  activeProps?: { className?: string };
  activeOptions?: { exact?: boolean };
  "aria-label"?: string;
  onClick?: () => void;
}

/**
 * Thin wrapper around TanStack Router's <Link> that accepts a plain string
 * `to`. Route paths are validated by the router at runtime, so link lists
 * in data files don't need literal-typed paths.
 */
export function AppLink({ to, ...rest }: AppLinkProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const RouterLink = Link as any;
  return <RouterLink to={to} {...rest} />;
}
