import { useEffect, useState } from "react";
import { ProjectsData, getProjectsData } from "../../../sanity";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { urlFor } from "@/lib/imgSanity";
import { Button } from "../ui/button";

function Projects() {
  const [projectsData, setProjectsData] = useState<ProjectsData[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getProjectsData();
      console.log(data);
      setProjectsData(data);
    })();
  }, []);
  return (
    <section id='projects' className=' my-12 '>
      <h3 className='text-4xl lg:text-5xl righteous text-center  text-gray-600 mb-8'>
        My Projects
      </h3>
      <div className='w-full mt-12'>
        <Carousel
          opts={{
            align: "start",
          }}
          className='w-full max-w-4xl mx-auto'
        >
          <CarouselContent>
            {projectsData.length &&
              projectsData.map((item) => (
                <CarouselItem className='' key={item._id}>
                  <div className='p-2'>
                    <img
                      src={`${urlFor(item.screenShot)}`}
                      title={item.name}
                      alt={item.name}
                      className='rounded-lg border-2 border-gray-300 border-solid'
                    />
                    <div className='flex items-center justify-between p-2'>
                      <h4 className='righteous text-2xl mt-4'>{item.name}</h4>
                      <div className='flex items-center gap-2'>
                        <Button>
                          <a href={item.websiteUrl} target='_blank'>
                            Website Url
                          </a>
                        </Button>

                        {item.githubUrl && (
                          <Button variant='secondary'>
                            <a href={item.githubUrl} target='_blank'>
                              Github
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className='hidden md:flex' />
          <CarouselNext className='hidden md:flex' />
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
