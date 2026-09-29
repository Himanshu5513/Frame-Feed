import React from "react";
import { useContext } from "react";
import { api } from "../context/Api";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const nav = useNavigate();
  const { data } = useContext(api);
  const posts = data.filter((elem) => elem?.url);

  return (
    <main className="mx-auto min-h-[100dvh] w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
      <div className="mb-6 flex justify-end">
        <button
          className="group inline-flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] py-2 pl-2 pr-4 text-sm font-medium text-[#d7e2d4] shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#d9f078]/35 hover:bg-[#d9f078]/[0.08] hover:text-[#d9f078] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9f078] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101714] active:translate-y-0 motion-reduce:transform-none"
          onClick={() => {
            nav("/");
          }}
        >
          <span
            className="grid size-8 place-items-center rounded-full bg-white/[0.06] text-base transition-colors duration-300 group-hover:bg-[#d9f078]/15"
            aria-hidden="true"
          >
            ←
          </span>
          <span>Back</span>
        </button>
      </div>
      {posts.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {posts.map((elem, index) => {
            return (
              <article
                key={elem._id ?? elem.url ?? index}
                style={{ animationDelay: `${Math.min(index * 70, 420)}ms` }}
                className="group relative isolate aspect-[4/3] min-h-[220px] overflow-hidden rounded-[5px] bg-[#dce2d8] shadow-[0_12px_32px_rgba(24,40,34,0.10)] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(24,40,34,0.18)] motion-reduce:transform-none motion-reduce:transition-none motion-safe:animate-[feed-arrive_650ms_cubic-bezier(0.22,1,0.36,1)_both]"
              >
                <img
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
                  src={elem.url}
                  alt={elem.caption || "Feed post"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/10 to-transparent" />
                <span className="absolute left-4 top-4 z-10 grid size-8 place-items-center rounded-full border border-white/50 bg-black/20 text-[10px] font-bold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="absolute inset-x-4 bottom-4 z-10 max-w-[32ch] font-serif text-xl leading-tight text-white drop-shadow-lg sm:bottom-5 sm:left-5 sm:text-xl">
                  {elem.caption}
                </h4>
              </article>
            );
          })}
        </div>
      ) : (
        <section className="mx-auto grid min-h-[60vh] max-w-xl content-center justify-items-center px-4 text-center">
          <span className="mb-6 grid size-16 place-items-center rounded-full border border-[#d6e4d0]/15 bg-[#d6e4d0]/[0.04] font-serif text-3xl text-[#c8d6c2]">
            +
          </span>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#aab6a7]">
            Your feed
          </p>
          <h1 className="font-serif text-4xl leading-tight text-[#edf1e8] sm:text-5xl">
            Nothing here yet
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#9ca99f]">
            New posts will show up here.
          </p>
        </section>
      )}
    </main>
  );
};

export default Feed;
