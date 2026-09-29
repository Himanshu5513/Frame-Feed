import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../context/Api";

const CreatePost = () => {
  const { server } = useContext(api);
  const nav = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    console.log("Submitted");

    const formData = await new FormData(e.target);
    const api = await fetch("http://localhost:3000/post", {
      method: "POST",
      body: formData,
    });
    await server();
    await e.target.reset();
    nav("/feed");
  };
  return (
    <main className="mx-auto grid min-h-[100dvh] w-full max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
      <section className="max-w-xl motion-safe:animate-[feed-arrive_650ms_cubic-bezier(0.22,1,0.36,1)_both]">
        <p className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c3d1be]">
          <span className="h-px w-9 bg-[#d9f078]" /> Create / 01
        </p>
        <h1 className="max-w-[12ch] font-serif text-5xl leading-[1.02] text-[#edf1e8] sm:text-6xl">
          A moment,
          <span className="mt-1 block italic text-[#d9f078]">framed.</span>
        </h1>
        <div className="mt-9 flex items-center gap-4 text-xs uppercase tracking-[0.12em] text-[#8c9b8e]">
          <span className="h-10 w-px bg-gradient-to-b from-[#d9f078]/70 to-transparent" />
          <span>
            New entry <span className="px-2 text-[#65756a]">/</span> Your feed
          </span>
        </div>
      </section>

      <section className="motion-safe:animate-[feed-arrive_650ms_cubic-bezier(0.22,1,0.36,1)_both] lg:[animation-delay:120ms]">
        <form
          onSubmit={handle}
          className="rounded-md border border-white/10 bg-[#17211d]/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-colors duration-500 hover:border-white/15 sm:p-8"
        >
          <div className="mb-8 flex items-start justify-between border-b border-white/10 pb-5">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a6b2a3]">
                Compose
              </p>
              <h2 className="font-serif text-3xl text-[#edf1e8]">New post</h2>
            </div>
            <span className="grid size-10 place-items-center rounded-full border border-[#d9f078]/25 text-xs font-medium text-[#d9f078]">
              01
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="post-image"
                className="mb-2.5 block text-xs font-medium text-[#d4ddd1]"
              >
                Photo
              </label>
              <input
                id="post-image"
                className="block w-full cursor-pointer rounded border border-white/10 bg-[#0f1714]/70 text-sm text-[#aab6a7] outline-none transition focus:border-[#d9f078]/60 file:mr-4 file:cursor-pointer file:border-0 file:border-r file:border-white/10 file:bg-white/[0.04] file:px-4 file:py-3 file:text-xs file:font-semibold file:text-[#d9f078] hover:file:bg-white/[0.08]"
                type="file"
                name="url"
                accept="image/*"
              />
            </div>

            <div>
              <label
                htmlFor="post-caption"
                className="mb-2.5 block text-xs font-medium text-[#d4ddd1]"
              >
                Caption
              </label>
              <input
                id="post-caption"
                name="caption"
                className="w-full rounded border border-white/10 bg-[#0f1714]/70 px-4 py-3.5 text-sm text-[#edf1e8] outline-none transition placeholder:text-[#718075] focus:border-[#d9f078]/60 focus:ring-2 focus:ring-[#d9f078]/10"
                type="text"
                placeholder="Add a few words..."
              />
            </div>
          </div>

          <button className="group mt-8 flex w-full items-center justify-between rounded bg-[#d9f078] px-5 py-4 text-sm font-semibold text-[#17211d] transition duration-300 hover:bg-[#e5f69e] hover:shadow-[0_0_28px_rgba(217,240,120,0.2)] active:scale-[0.99] motion-reduce:transform-none">
            <span>Submit</span>
            <span className="grid size-7 place-items-center rounded-full bg-[#17211d]/10 text-lg leading-none transition-transform duration-300 group-hover:translate-x-0.5">
              +
            </span>
          </button>
        </form>
      </section>
      <div className="fixed bottom-5 left-5 z-20 sm:bottom-7 sm:left-7"></div>
    </main>
  );
};

export default CreatePost;
