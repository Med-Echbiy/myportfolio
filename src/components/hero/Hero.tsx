import { useEffect, useState } from "react";
import { getSocialLinks, linksTypes } from "../../../sanity";
import { buttonVariants } from "../ui/button";

function Hero() {
  const [linksData, setLinksData] = useState<linksTypes | null>(null);
  const [linkKeys, setLinkKeys] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getSocialLinks();
      setLinksData(data);
      setLinkKeys(Object.keys(data));
    })();
  }, []);
  return (
    <div className='relative h-screen flex items-center justify-center flex-col gap-6 border-b border-solid border-gray-200'>
      <h2 className='righteous uppercase flex flex-col gap-2 sm:block text-6xl  lg:text-7xl'>
        <span>Mohamed</span>{" "}
        <span className='text-base pl-1 sm:pl-0 sm:text-6xl lg:text-7xl'>
          Echbiy
        </span>
      </h2>
      <div className=' flex items-center gap-2 uppercase text-sm'>
        {linkKeys.length > 1 &&
          linkKeys.map(
            (key) =>
              linksData !== null && (
                <a
                  key={key + "index"}
                  href={linksData[key] ?? "#"}
                  title={key}
                  target='_blank'
                  className={buttonVariants({ variant: "link" })}
                >
                  {key}
                </a>
              )
          )}
      </div>
    </div>
  );
}

export default Hero;
