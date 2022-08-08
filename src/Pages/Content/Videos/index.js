import React from "react";
import { pagesStrings } from "../../../static.db";

const {
  content: {
    videos_tab: { videos_list },
  },
} = pagesStrings;

export default function Videos() {
  return (
    <div className="flex">
      <div className="flex justify-center items-center">
        {videos_list.map((video, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="flex justify-center items-center">
                <iframe
                  width="400"
                  height="230"
                  src={video.url}
                  title={video.title}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <div className="flex justify-center items-center">
                <span className="w-80">{video.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
