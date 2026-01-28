import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-proxy1`
  const requestHeaders = new Headers(request.headers);
  console.log("Proxying request to:", request.url);
  requestHeaders.set("x-hello-from-proxy1", "hello");

  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-proxy2`
  response.headers.set("x-hello-from-proxy2", "hello");
  return response;
}
