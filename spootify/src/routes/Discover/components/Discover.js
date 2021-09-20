import React from "react";
import { DiscoverBlockWrapper } from "./DiscoverBlockWrapper";
import "../styles/_discover.scss";

const newReleasesRequest = "new-releases";
const featurePlaylistRequest = "featured-playlists";
const categoriesRequest = "categories";

export const Discover = () => {
  return (
    <div className="discover">
      {
        <>
          <DiscoverBlockWrapper
            text="RELEASED THIS WEEK"
            id="released"
            requestRoute={newReleasesRequest}
            resourceType="albums"
          />
          <DiscoverBlockWrapper
            text="FEATURED PLAYLISTS"
            id="featured"
            requestRoute={featurePlaylistRequest}
            resourceType="playlists"
          />
          <DiscoverBlockWrapper
            text="BROWSE"
            id="browse"
            requestRoute={categoriesRequest}
            imagesKey="icons"
            resourceType="categories"
          />
        </>
      }
    </div>
  );
};
