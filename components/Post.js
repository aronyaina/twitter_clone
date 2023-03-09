import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/outline";

export default function Post({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* user image */}
      <img
        src={post.userImage}
        alt="user-image"
        className="h-11 w-11 rounded-full mr-4"
      />
      {/* rigth side */}
      <div className="">
        {/* header */}
        <div className="flex items-center justify-between">
          {/* user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline ">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.username}</span>
            <span className="text-sm sm:text-[15px] hover:underline">
              - {post.timestamp}
            </span>
          </div>
          {/* icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>

        {/* post text*/}
        <p className="text-gray-800 text-[15px sm:text-[16px] ] mb-2">
          {post.text}
        </p>
        {/* post image */}
        <img
          className="rounded-2xl mr-2 h-[512px] w-[512px]"
          src={post.image}
          alt="post"
        />

        <div className="flex items-center justify-between mt-2 text-gray-500">
          {/* icons */}
          <ChatIcon className="h-[34px]  w-9 hoverEffect p-1 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-[34px]  hoverEffect p-1 hover:text-red-500 hover:bg-sky-100" />
          <HeartIcon className="h-[34px]  hoverEffect p-1 hover:text-red-500 hover:bg-sky-100" />
          <ShareIcon className="h-[34px] hoverEffect p-1 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-[34px] hoverEffect p-1 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
