
import React from "react";
import { Link } from "react-router-dom";
import { Artist } from "../../types";
import "./ArtistItem.scss";

interface ArtistItemProps {
  artist: Artist;
}

const ArtistItem: React.FC<ArtistItemProps> = ({ artist }) => {
  return (
    <Link to={`/artist/${artist.id}`}>
      <div className="artist-item">
        <img className="artist-img" src={`/images/covers/${artist.cover}.jpg`} alt={artist.name} />
        <span className="artist-name">{artist.name}</span>
      </div>
    </Link>
  );
};

export default ArtistItem;

