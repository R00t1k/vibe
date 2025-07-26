import {  createTRPCRouter } from '../init';
import { messagesRouter } from '@/modules/messages/server/procedures';
import { projectRouter } from '@/modules/project/server/procedures';
import { usageRouter } from '@/modules/usage/server/procedures';
export const appRouter = createTRPCRouter({
  messages : messagesRouter,
  project : projectRouter,
  usage : usageRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;