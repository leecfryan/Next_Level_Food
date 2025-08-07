export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go back home
      </a>
    </div>
  );
}

export const metadata = {
  title: "Page Not Found",
};
