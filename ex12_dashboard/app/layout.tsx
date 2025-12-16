// app/layout.tsx
// This is the required root layout for Next.js App Router projects.
// It wraps all routes, including /dashboard, and is required for the app to work.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
