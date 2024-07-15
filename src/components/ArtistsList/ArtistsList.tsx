import React from "react";
import { Artist } from "../../types";
import ArtistItem from "../ArtistItem/ArtistItem";
import "./ArtistsList.scss";

interface ArtistsListProps {
  artists: Artist[];
}

const ArtistsList: React.FC<ArtistsListProps> = ({ artists }) => {
  return (
    <div className="artists-list">
      {artists.map((artist) => (
        <ArtistItem key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default ArtistsList;

