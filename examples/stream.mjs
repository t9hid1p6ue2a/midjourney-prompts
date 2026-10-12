// Chat-style streaming sanity check through the same key (midjourney-prompts)
const r = await fetch("https://api.apimart.ai/v1/chat/completions", {
  method: "POST",
  headers: { "Authorization": `Bearer ${process.env.APIMART_KEY}`,
              "Content-Type": "application/json" },
  body: JSON.stringify({ model: "deepseek-v3.2", stream: true,
                          messages: [{ role: "user", content: "reply with the single word: ok" }] }),
});
for await (const chunk of r.body) process.stdout.write(Buffer.from(chunk).toString());
