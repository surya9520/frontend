// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('token'); // Adjust based on how you store the token

//   // Protect the home page and any other protected routes
//   if (!token && request.nextUrl.pathname.startsWith('/home')) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // Allow request to proceed
//   return NextResponse.next();
// }

// // Define which paths this middleware should be applied to
// export const config = {
//   matcher: ['/home', '/profile'], // Add paths to protect
// };