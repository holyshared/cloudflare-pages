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

  return new Response("Hello, world!");
}