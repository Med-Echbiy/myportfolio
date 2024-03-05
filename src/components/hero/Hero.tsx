import { useEffect, useState } from "react";
import { getSocialLinks, linksTypes } from "../../../sanity";

import { FaArrowAltCircleDown } from "react-icons/fa";
import { Button, buttonVariants } from "../ui/button";

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
    <div className='relative h-screen flex items-center justify-center flex-col gap-6'>
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
                  className={buttonVariants({ variant: "ghost" })}
                >
                  {key}
                </a>
              )
          )}
      </div>
      <div className=' absolute bottom-12 flex justify-center w-full h-12 items-center'>
        <a href='#projects'>
          <Button className='flex items-center gap-2' variant='outline'>
            Projects <FaArrowAltCircleDown className='mt-1' />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
