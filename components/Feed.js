import { SparklesIcon } from "@heroicons/react/solid";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Aro",
      username: "Ny Aina",
      userImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      image:
        "https://images.unsplash.com/photo-1678305346922-de3539a25bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      text: "Nice view !",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Mialy",
      username: "Soa",
      userImage: "https://cdn-icons-png.flaticon.com/512/3220/3220315.png",
      image:
        "https://images.unsplash.com/photo-1677021048526-4fcbb33abf4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      text: "Night city !",
      timestamp: "1 hours ago",
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[620px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer"> Home </h2>{" "}
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9  ">
          <SparklesIcon className="h-5" />
        </div>{" "}
      </div>{" "}
      <Input />{" "}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}{" "}
    </div>
  );
}
