"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

export default function Client() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.hello.queryOptions({ text: "Hello!" })
  );


  return (
    <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )

}
