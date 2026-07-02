// Cloudflare Worker for raw.unalive.net
// Serves .lua scripts with proper content-type for Roblox HttpGet

const SCRIPTS = {
  "script.lua": {
    body: `loadstring(game:HttpGet('https://raw.githubusercontent.com/UnAliveScripts/UnAlive-Scripts-hub/refs/heads/main/loader.lua'))()`,
    contentType: "text/plain; charset=utf-8"
  }
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let filename = url.pathname.replace(/^\//, "");

    if (!filename) {
      return new Response("UnAlive Script Server\n\nAvailable scripts:\n" +
        Object.keys(SCRIPTS).map(s => "  https://raw.unalive.net/" + s).join("\n"), {
        headers: { "content-type": "text/plain" }
      });
    }

    const script = SCRIPTS[filename] || SCRIPTS["script.lua"];

    return new Response(script.body, {
      headers: {
        "content-type": script.contentType,
        "access-control-allow-origin": "*",
        "cache-control": "no-cache"
      }
    });
  }
};
