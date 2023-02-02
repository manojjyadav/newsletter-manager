import { useMutation } from "react-query";
import { env } from "../config/constants";

export function useUnsubscribe() {
  const { mutateAsync } = useMutation((unsubscribeId: string) =>
    fetch(`${env.API_URL}/subscriptions/${unsubscribeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

  return { unsubscribe: mutateAsync };
}
