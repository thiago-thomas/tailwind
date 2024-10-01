export default function Notifications() {
  return (
    <div className="p-6 min-w-96 w-2/3 bg-blue-950 hover:bg-blue-800 hover:cursor-pointer ease-in duration-200 rounded-xl shadow-lg flex items-start space-x-4">
      <div className="shrink-0">
        <img src="https://picsum.photos/id/237/100/100" alt="img-test" className="size-16 rounded-2xl" />
      </div>
      <div>
        <div className="text-2xl font-bold">Discord</div>
        <p className="text-gray-400">You have a new message!</p>
      </div>
    </div>
  );
}