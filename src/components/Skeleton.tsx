export default function Skeleton() {
  return (
    <div className="flex-1/2 min-h-[600px] w-full flex justify-center items-center flex-col space-y-4">
      <div className="h-8 w-2/3 bg-gray-200 rounded-lg" />
      <div className="h-4 w-3/4 bg-gray-100 rounded-lg" />
      <div className="h-4 w-1/2 bg-gray-100 rounded-lg" />
      <div className="h-10 w-[80%] bg-gray-100 rounded-xl" />
      <div className="h-10 w-[80%] bg-gray-100 rounded-xl" />
      <div className="h-10 w-32 bg-gray-200 rounded-lg self-center mt-8" />
    </div>
  );
}
