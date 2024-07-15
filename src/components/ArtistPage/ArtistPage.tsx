import React from "react";
import { useParams } from "react-router-dom";
import { ArtistsProps } from "../../types";
import AlbumList from "../AlbumList/AlbumList";
import "./ArtistPage.scss";

const ArtistPage: React.FC<ArtistsProps> = ({ artists }) => {
  const { id } = useParams<{ id: string }>();
  const artist = artists.find((artist) => artist.id === Number(id));

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="artist-page">
      <img className="cover-image" src={`/images/covers/${artist.cover}.jpg`} alt={artist.name} />
      <h2>{artist.name}</h2>
      <p>{artist.bio}</p>
      <div className="albums-container">
        {artist.albums.map((album) => (
          <AlbumList key={album.albumId} album={album} artistId={artist.id} /> 
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;

