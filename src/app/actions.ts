"use server";

import { tasks } from "@trigger.dev/sdk/v3";
import type { helloWorldTask } from "@/trigger/example";

export async function triggerTaskAction() {
  const handle = await tasks.trigger<typeof helloWorldTask>("hello-world", {});

  // You can do any server-side operations here
  // For example, fetch data from a database, process information, etc.

  // Return some data if needed
  return {
    handle,
    timestamp: new Date().toISOString(),
  };
}
