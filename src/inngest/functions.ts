import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // imagine this is a download step
    await step.sleep("wait-a-moment", "30s");
    // imagine this is a transform step
    await step.sleep("wait-a-moment", "10s");
    // imagine this is a summary step
    await step.sleep("wait-a-moment", "10s");
    return { message: `Hello ${event.data.email}!` };
  },
);