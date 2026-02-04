// import { toast } from "sonner";
// import { authClient } from "./auth";
// import type { AuthSchemaType } from "./schema";

// export async function register({
//   registerData,
// }: {
//   registerData: AuthSchemaType;
// }) {
//   return authClient.signUp.email(registerData, {
//     onRequest: () => {
//       toast.loading("Creating your account...");
//     },
//     onSuccess: (ctx) => {
//       toast.success(
//         `Great to have you onboard, ${ctx.response.formData.name}! `,
//       );
//     },
//     onError: (ctx) => {
//       toast.error(ctx.error.message);
//     },
//   });
// }
