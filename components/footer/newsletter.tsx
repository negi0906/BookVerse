
export default function Newsletter() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-serif text-base text-[#392b25]">
        A good read, delivered.
      </h3>

      <form className="flex w-full max-w-[250px] items-center overflow-hidden rounded-sm border border-[#e7ded3] bg-white">
        <input
          type="email"
          placeholder="Your email address"
          className="min-w-0 flex-1 px-3 py-2 text-[10px] text-[#392b25] outline-none placeholder:text-[#a99b8e]"
        />

        <button
          type="submit"
          className="m-0.5 rounded-sm bg-[#ad5035] px-2 py-1.5 text-[9px] text-white transition hover:bg-[#893d28]"
        >
          Join the list
        </button>
      </form>
    </div>
  );
}
