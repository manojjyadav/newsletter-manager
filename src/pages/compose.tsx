import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { api } from "../utils/api";

const ComposePage: NextPage = () => {
  const composeEmail = api.subscription.compose.useMutation();

  const [, setError] = useState("");
  const [form, setForm] = useState({
    subject: "",
    body: "",
  });

  function handleSendEmails(e: React.FormEvent) {
    e.preventDefault();
    composeEmail.mutateAsync(form).catch((err: Error) => setError(err.message));
  }

  return (
    <>
      <Head>
        <title>Compose Emails</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container m-auto flex min-h-screen flex-col items-center justify-center gap-4 p-4">
        <h1 className="text-4xl">Compose an Email</h1>

        <section className="grid w-full grid-cols-2 gap-8">
          <form
            className="flex flex-col items-center gap-4"
            onSubmit={handleSendEmails}
          >
            <fieldset className="w-full text-left">
              <label className="text-lg" htmlFor="subject">
                Subject
              </label>
              <Input
                id="subject"
                className="w-full p-4"
                onChange={(e) =>
                  setForm({
                    ...form,
                    subject: e.currentTarget.value,
                  })
                }
                value={form.subject}
              />
            </fieldset>

            <fieldset className="w-full text-left">
              <label className="text-lg" htmlFor="body">
                Body
              </label>
              <textarea
                id="body"
                className="h-[400px] w-full p-4 text-wdc-dark"
                value={form.body}
                onChange={(e) =>
                  setForm({
                    ...form,
                    body: e.target.value,
                  })
                }
              />
            </fieldset>

            <Button className="w-full">Send Emails</Button>
          </form>

          <aside
            className="h-full w-full scroll-auto bg-gray-700"
            dangerouslySetInnerHTML={{ __html: form.body }}
          ></aside>
        </section>
      </main>
    </>
  );
};

export default ComposePage;
