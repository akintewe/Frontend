const LoginForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email or username
        </label>
        <input
          id="email"
          type="email"
          placeholder="bartoon_bell@gmail.com"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="********"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center text-black text-sm">
          <input type="checkbox" className="mr-2 rounded" />
          Remember me
        </label>
        <a
          href="/auth/forgotPassword"
          className="text-sm text-orange-500 hover:underline"
        >
          Forgot your password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
