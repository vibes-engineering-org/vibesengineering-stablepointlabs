import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    accountAssociation: {
      header: "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload: "eyJkb21haW4iOiJ2aWJlc2VuZ2luZWVyaW5nLXN0YWJsZXBvaW50bGFicy52ZXJjZWwuYXBwIn0",
      signature: "MHg5ODRlMDcyZjRmMWE3ZDcwZmMxZjQ1NGU2YmUwNDgxYTg0ZjY0NzlhMDM0MDI3YWNkYjAyZTJiMTg3YTVhZGQzMGFmNzBjOGE2MDYyNjY3MjA5NGU1NGE3MmJmYTM2ZWM2MjgxODZmNGRjNDBjOTc0YTlmYTkyZjBmZGZkOGIxYjFj"
    },
    miniapp: {
      version: "1",
      name: "Vibes Vite Template",
      iconUrl: "https://vibes-engineering-vite-template.vercel.app/logo.png",
      homeUrl: "https://vibes-engineering-vite-template.vercel.app",
      imageUrl: "https://vibes-engineering-vite-template.vercel.app/splash.png",
      buttonTitle: "Open Vibes Template",
      splashImageUrl: "https://vibes-engineering-vite-template.vercel.app/splash.png",
      splashBackgroundColor: "#eeccff"
    }
  })
}