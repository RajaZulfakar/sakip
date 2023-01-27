export default function Login() {
  return (
    <div className="w-[170px] mx-auto border-black selection:bg-slate-900 selection:text-white bg-white shadow-xl shadow-slate-500/20 border flex flex-col space-y-2 p-4">
      <h4 className="text-5xl w-96 font-semibold mr-4">Login Page</h4>
      <p className="w-72 text-xl font-semibold">
        Login here with your username and password
      </p>
      <div className="p-4 gap-3 grid space-y-3">
        <input
          className="p-2 border border-black bg-slate-50 focus:outline-none"
          type="text"
          placeholder="username"
        />
        <input
          className="p-2 border border-black bg-slate-900 text-white focus:outline-none"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="w-[260px] flex items-center justify-between space-x-3">
        <button className="bg-slate-900 text-white px-8 py-1 rounded-full">
          Login
        </button>
        <a href="#" className="text-sm underline">
          Tak ada Password?
        </a>
      </div>
    </div>
  );
}
