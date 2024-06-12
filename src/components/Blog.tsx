import Image from "next/image";
import axios from "axios";
import { parseStringPromise } from "xml2js";
import { feedType } from "../types/feedType";

export default async function Blog() {
  const fetchRSSFeed = async (url: string): Promise<feedType | null> => {
    try {
      const response = await axios.get(url);
      const parsedData = await parseStringPromise(response.data, {
        explicitArray: false,
      });
      return parsedData.rss.channel;
    } catch (error) {
      console.error("Error fetching RSS feed:", error);
      return null;
    }
  };
  const feed = await fetchRSSFeed("https://dev.to/feed/ryanmabrouk");
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
    <section className="flex h-full w-full flex-col items-center justify-center bg-color3 py-[4rem] pb-[7rem] text-left">
      <div className="mx-auto w-fit">
        <span className="mb-4 text-[1.5rem] font-bold uppercase text-color4">
          Latest Blog Articles
        </span>
        <div className="w-full">
          {feed && feed.item.length > 0 ? (
            <div className="mx-auto flex w-[68rem] flex-col">
              <h2 className="text-[1.5rem] font-semibold text-color1">
                {feed.description}
              </h2>
              <div className="flex flex-col items-center gap-8 px-10 pt-16 perspective">
                {feed.item
                  .filter((e, i) => i < 5)
                  .sort((a, b) => +new Date(b.pubDate) - +new Date(a.pubDate))
                  .map((e, i) => (
                    <div
                      key={i}
                      className={`flex h-full min-h-[18rem] max-w-[40rem] cursor-pointer flex-row justify-center gap-4 rounded-lg border border-gray-100 bg-white pb-8 pl-4 pr-6 pt-4 shadow-lg transition-all duration-200 ease-linear preserve-3d backface-hidden hover:z-50 hover:rotate-0 hover:scale-110 hover:shadow-xl ${i % 2 === 0 ? "rotate-y-20 self-start" : "-rotate-y-20 self-end"}`}
                    >
                      <Image
                        src={feed.image.url}
                        alt=""
                        width={64}
                        height={64}
                        className="size-16 justify-self-start rounded-full"
                      />
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-2xl font-semibold">
                            {e.title}
                          </span>
                          <span className="text-color5">
                            {new Date(e.pubDate).toLocaleString()}
                          </span>
                          <span className="flex flex-row gap-2 text-sm">
                            {e.category.map((cat, catI) => {
                              return (
                                <span
                                  className={randomColors[((i * 4) % 2) + catI]}
                                  key={"cat" + catI}
                                >
                                  {"#" + cat}
                                </span>
                              );
                            })}
                          </span>
                        </div>
                        <div className="text-[0.9rem]">
                          <span>
                            {e.description
                              .replace(/<[^>]*>?/gm, "")
                              .slice(0, 250)}
                            ...
                          </span>
                          <a
                            href={e.link}
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
