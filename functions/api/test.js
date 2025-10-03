export default {
  async fetch(request, env, ctx) {
   
    const country = request.headers.get("cf-ipcountry") || "UNKNOWN";
    const colo = request.cf?.colo || "N/A"; // datacenter PoP
    const ip = request.headers.get("cf-connecting-ip") || "0.0.0.0";

    let message;
    if (country === "VN") {
      message = "Xin chào từ Việt Nam 🇻🇳 (Edge tại " + colo + ")";
    } else if (country === "US") {
      message = "Hello from the US 🇺🇸 (Edge at " + colo + ")";
    } else if (country === "SG") {
      message = "Hello from Singapore 🇸🇬 (Edge at " + colo + ")";
    } else {
      message = "Hello from " + country + " 🌍 (Edge at " + colo + ")";
    }

    return new Response(
      `
      <html><body>
        <h1>CDN Edge Demo</h1>
        <p>Your Country: ${country}</p>
        <p>Datacenter (PoP): ${colo}</p>
        <p>Your IP: ${ip}</p>
        <p>Message: ${message}</p>
      </body></html>
      `,
      { headers: { "content-type": "text/html" } }
    );
  },
};
