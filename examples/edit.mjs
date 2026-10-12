// Image-to-image / region edit with the same gpt-image-2.5-ext route
import fs from "node:fs";
const r = await fetch("https://api.apimart.ai/v1/images/generations", {
  method: "POST",
  headers: { "Authorization": `Bearer ${process.env.APIMART_KEY}`,
              "Content-Type": "application/json" },
  body: JSON.stringify({ model: "gpt-image-2.5-ext", prompt: "replace the sky with aurora",
                          size: "1:1", resolution: "1K", n: 1,
                          image: [{ url: "https://example.com/ref.png" }] }),
});
console.log(await r.json());
