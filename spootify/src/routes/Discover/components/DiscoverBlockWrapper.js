import React from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import { useFetchSpotify } from "../../../hooks/useFetchSpotify";

export const DiscoverBlockWrapper = ({
  text,
  id,
  imagesKey = "images",
  requestRoute,
  resourceType,
}) => {
  const { data, loading, error } = useFetchSpotify(requestRoute, resourceType);
  console.log(imagesKey, "imagesKey");
  return (
    <DiscoverBlock
      text={text}
      id={id}
      data={data}
      error={error}
      loading={loading}
      imagesKey={imagesKey}
    />
  );
};
