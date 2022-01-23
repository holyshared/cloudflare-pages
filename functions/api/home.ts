interface EnvironmentVariables {
}

export async function onRequestGet(context: EventContext<EnvironmentVariables, any, {}>) {
  const {
    request,
    env,
    params,
    waitUntil,
    next,
    data,
  } = context;
  const res = new Response(JSON.stringify({ text: "Hello, world!" }));
  res.headers.set("Content-type", "application/json");
  return res;
}