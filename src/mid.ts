/*
import { NextResponse } from "next/server";
export default function middleware(req) {
   //console.log("this is middleware from next" + req.nextUrl.pathname)
   if(req.nextUrl.pathname =="/api/auth/session"){
       //console.log("Thanks for accessing this endpoint  " + req.method, { status: 200})
   return NextResponse.next();
   }
}


*/

/*import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  console.log("this is request", {JSON.stringify(req)} )
  const protectedPaths = ["/", "/admin"];
  const isPathProtected = protectedPaths?.some((path) => pathname == path);
  const res = NextResponse.next();
  if (isPathProtected) {
    const token = await getToken({ req });
    if (!token) {
      const url = new URL(`/login`, req.url);
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    }
  }
  return res;
}*/
