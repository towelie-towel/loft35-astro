import { get } from '@vercel/edge-config';

export const config = {
  matcher: '/test',
};

export default async function middleware(request) {
  const url = new URL(request.url);

  try {
    const test = await get('test');
    console.log('edge-config test succed', test);
  } catch (error) {
    throw new Error(error.message);
  }

  // You can retrieve IP location or cookies here.
  if (url.pathname === '/test') {
    url.pathname = '/';
  }
  return Response.redirect(url);
}
