export async function onRequest() {
  return new Response("Hello from Pages Functions ", {
    headers: { "content-type": "text/plain" },
  });
}
