export default function NotFound() {
  return (
    <div className="p-8 flex flex-col gap-4 justify-center ] text-center min-h-screen">
      <h1 className="text-2xl font-bold text-red-500">
        Movie Details Not Found
      </h1>
      <p className="text-gray-600 mt-2">
        Sorry, we could not find details of that movie.
      </p>
    </div>
  );
}
