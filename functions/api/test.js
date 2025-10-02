export async function onRequest({ request, env }) {
  return await env["cdn-demo-worker"].fetch(request);
}
