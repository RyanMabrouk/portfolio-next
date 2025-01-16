import Image from "next/image";
import axios from "axios";
import { parseStringPromise } from "xml2js";
import { FeedType } from "../types/feedType";

export default async function Blog() {
  const fetchRSSFeed = async (url: string): Promise<FeedType[] | null> => {
    try {
      const response = await axios.get(url);
      // const parsedData = await parseStringPromise(response.data, {
      //   explicitArray: false,
      // });
      console.log("🚀 ~ fetchRSSFeed ~ parsedData:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching RSS feed:", error);
      return null;
    }
  };
  const feed = await fetchRSSFeed(
    "https://dev.to/api/articles?username=rayenmabrouk",
  );
  const randomColors = [
    "text-orange-700",
    "text-blue-700",
    "text-red-700",
    "text-green-700",
    "text-yellow-700",
    "text-purple-700",
    "text-indigo-700",
    "text-pink-700",
  ];
  return (
    <section
      className="flex h-full w-full flex-col items-center justify-center bg-color3 py-[4rem] pb-[7rem] text-left"
      id="blog"
    >
      <div className="mx-auto w-fit">
        <span className="mb-4 text-[1.5rem] font-bold uppercase text-color4">
          Latest Blog Articles
        </span>
        <div className="w-full">
          {feed && feed.length > 0 ? (
            <div className="mx-auto flex w-[68rem] flex-col">
              <h2 className="text-[1.5rem] font-semibold text-color1">
                {
                  "The latest articles on DEV Community by Rayen Mabrouk (@rayenmabrouk)."
                }
              </h2>
              <div className="flex flex-col items-center gap-8 px-10 pt-16 perspective">
                {feed
                  // ?.filter((_e, i) => i < 5)
                  .sort(
                    (a, b) =>
                      b.public_reactions_count - a.public_reactions_count,
                  )
                  .map((e, i) => (
                    <div
                      key={i}
                      className={`flex h-full min-h-[15rem] max-w-[40rem] cursor-pointer flex-col justify-center gap-4 overflow-hidden rounded-lg border border-gray-100 bg-white p-2 pb-8 shadow-lg transition-all duration-200 ease-linear preserve-3d backface-hidden hover:z-50 hover:rotate-0 hover:scale-110 hover:shadow-xl ${i % 2 === 0 ? "self-start" : "self-end"}`}
                    >
                      <Image
                        src={e.social_image}
                        alt=""
                        width={500}
                        height={500}
                        className="h-[9rem] w-full justify-self-center rounded-t-md object-cover"
                      />
                      <div className="flex flex-col gap-3 px-6">
                        <div className="flex flex-col gap-0.5">
                          <div className="mb-2 flex flex-row items-start gap-2">
                            <Image
                              src={e.user.profile_image}
                              alt=""
                              width={120}
                              height={120}
                              className="mt-1 size-16 justify-self-start rounded-full"
                            />
                            <span className="text-2xl font-semibold">
                              {e.title}
                            </span>
                          </div>
                          <span className="text-color5">
                            {new Date(e.published_at).toLocaleString()}
                          </span>
                          <span className="flex flex-row gap-2 text-sm">
                            {e.tag_list.map((cat, catI) => {
                              return (
                                <span
                                  className={
                                    randomColors[(i % 2) * 4 + catI] +
                                    " capitalize"
                                  }
                                  key={"cat" + catI}
                                >
                                  {"#" + cat}
                                </span>
                              );
                            })}
                          </span>
                        </div>
                        <div className="flex flex-row gap-4 text-[1.3rem]">
                          <div className="flex flex-row gap-1">
                            <span>💖</span>
                            {e.public_reactions_count}
                          </div>
                          <div className="flex flex-row gap-1">
                            <span>💬</span>
                            {e.comments_count}
                          </div>
                        </div>

                        <div className="text-[0.9rem]">
                          <span>{e.description}</span>
                          <a
                            href={e.url}
                            target="_blank"
                            rel="noreferrer"
                            className="ml-1 text-color4 hover:underline"
                          >
                            read more
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <span className="text-semibold mx-6 text-center text-2xl">
              New blog posts coming soon.. 📝
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
