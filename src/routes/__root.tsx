import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui";

function NotFoundComponent() {
  return (
    <section className="flex min-h-[60vh] items-center bg-white">
      <div className="container-x text-center">
        <p className="font-serif text-7xl font-bold text-plum-200">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-plum-900">
          This page took a different path
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          The page you're looking for doesn't exist or has moved. Let's get you
          back to the community.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/" variant="primary">
            Back to Home
          </Button>
          <Button to="/contact" variant="outline">
            Contact SAWE
          </Button>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-plum-900">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-ink/70">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-plum-700 px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-plum-800"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-plum-200 bg-white px-5 py-2.5 text-sm font-medium text-plum-800 transition-colors hover:bg-plum-50"
          >
            Go home
          </a>
        </div>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "SAWE — South Asian Women Entrepreneurs" },
        {
          name: "description",
          content:
            "SAWE is a high-intent community for South Asian women entrepreneurs in the Greater Seattle area — networking, coffee meets, trainings, collaborations, and business growth.",
        },
        { name: "theme-color", content: "#682549" },
        {
          property: "og:title",
          content: "SAWE — South Asian Women Entrepreneurs",
        },
        {
          property: "og:description",
          content:
            "The community for South Asian women entrepreneurs in the Greater Seattle area. Connect, collaborate, learn, and grow.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
      links: [
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&display=swap",
        },
        { rel: "stylesheet", href: appCss },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
