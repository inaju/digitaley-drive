import Image from "next/image";
import RoundedButton from "../custom/RoundedButton/RoundedButton";
import Link from "next/link";
export function FollowingPointerDemo({ course, width, index }: any) {
  return (
    <div key={index} className={`w-[100%] lg:w-[100%] mb-6 mx-auto ${width ? width : 'w-[100%]'}`}>
      <div className={`relative w-[100%]  lato overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100`}>
        <div className="w-full h-80 aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
          <img
            src={course.thumbnail}
            alt="thumbnail"
            className={`group-hover:scale-95 w-[100%] group-hover:rounded-2xl transform object-cover transition duration-200 `}
          />
        </div>
        <div className=" p-4 py-6 pt-0">
          <h2 className="font-bold my-4 text-3xl text-greenPrimary">
            {course.title}
          </h2>
          <div className="flex justify- gap-6 items-center">
            <span>
              {course.topics && course.topics} topics
            </span>
            <div className="w-2 h-2 rounded-full bg-greenPrimary"></div>
            <span>
              12 weeks
            </span>
            <div className="w-2 h-2 rounded-full bg-greenPrimary"></div>
            <span>
              5 modules
            </span>
          </div>
          {/* <h2 className="font-normal my-4 text-sm text-zinc-500">
            {course.description}
          </h2> */}
          {/* <div className="flex flex-wrap gap-2 mb-0 h-[70px]">
            {

              course.tools && course.tools.map((tool: any) => <span className={`inline-flex items-center h-7 gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${tool.color} dark:bg-white/10 dark:text-white`}>

                {
                  tool.tool
                }
              </span>)
            }

          </div> */}
          {/* <div className="flex gap-3 h-8 justify-end items-center text-[#14452f] ">
            <FaClock />
            <h1 className="text-[15px]">3 months</h1>
          </div> */}
          <div className="group-hover:flex hidden flex-row justify-between items-center mt-2">
           <Link href={`/courses/${course.reference}`} className="">
            <RoundedButton  className='px-10 py-2 cursor-pointer rounded-full mt-6 w-fit '>
              
              View Details
              
            </RoundedButton></Link>
          </div>
        </div>
      </div>
    </div>
  );
}



const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 z-10 relative items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p className="text-greenPrimary">{title}</p>
  </div>
);