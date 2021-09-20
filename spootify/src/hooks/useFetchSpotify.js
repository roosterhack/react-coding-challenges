import axios from "axios";
import qs from "querystring";
import { useEffect, useState } from "react";

export const useFetchSpotify = (requestRoute, resourceType) => {
  const [error, setError] = useState(null);
  const [data, SetData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const {
        data: { access_token: token },
      } = await axios.post(
        "https://accounts.spotify.com/api/token",
        qs.stringify({ grant_type: "client_credentials" }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(
              `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
            )}`,
          },
        }
      );

      const res = await axios.get(
        `${process.env.REACT_APP_SPOTIFY_BASE_URL}browse/${requestRoute}?locale=en_US`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!data) setError(true);
      setLoading(false);
      console.log(res);

      // if (requestRoute.includes("new-releases")) {
      //   SetData(res?.data?.albums?.items);
      // }
      // if (requestRoute.includes("featured-playlists")) {
      //   SetData(res?.data?.playlists?.items);
      // }
      // if (requestRoute.includes("categories")) {
      //   SetData(res?.data?.categories?.items);
      // }
      SetData(res?.data[resourceType]?.items);
    } catch (e) {
      console.error(e);
      setError(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};
