// learn more: https://developers.cloudflare.com/workers/
export default {
  fetch(request: Request, _env: unknown, _ctx: unknown) {
    const url = new URL(request.url);

    if (url.pathname !== "/") {
      return new Response(usage(url), { status: 404 });
    }

    const word = url.searchParams.get("word");

    if (word == null) {
      return new Response(usage(url), { status: 400 });
    }

    return new Response(numeronym(word), { status: 200 });
  },
};

const usage = (url: URL) => {
  return `Usage: GET ${url.origin}?word=\${word}`;
};

const numeronym = (word: string) => {
  if (word.length < 3) {
    return word;
  }

  const chars = [...word];
  const head = chars.at(0);
  const n = chars.length - 2;
  const tail = chars.at(-1);

  return `${head}${n}${tail}`;
};
