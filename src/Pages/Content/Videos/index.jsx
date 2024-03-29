import { pagesStrings } from "../../../static.db";

const {
  content: {
    videos_tab: { videos_list },
  },
} = pagesStrings;

export default function Videos() {
  return (
    <div className="flex">
      <div className="flex flex-col items-center w-full md:flex-row lg:flex-row xl:flex-row">
        {videos_list.map((video, index) => {
          return (
            <div key={index} className="flex flex-col items-center p-2">
              <div className="flex items-center justify-center">
                <iframe
                  width="350"
                  height="230"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-center">
                <span className="text-center w-80">
                  {video.title.slice(0, 60)}
                  {video.title.length > 60 && "..."}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
