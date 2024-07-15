
import React from "react";
import "./AlbumPage.scss"
import { useParams } from "react-router-dom";
import { ArtistsProps, Album } from "../../types";
import AlbumList from "../AlbumList/AlbumList";

const AlbumPage: React.FC<ArtistsProps> = ({ artists }) => {
  const { id, albumId } = useParams<{ id: string; albumId: string }>();

  const artist = artists.find((artist) => artist.id === Number(id));
  const album = artist?.albums.find((album) => album.albumId === albumId);

  if (!artist || !album) {
    return <div>Artist or Album not found</div>;
  }

  return (
    <div className="album-page">
      <AlbumList album={album} artistId={artist.id} /> 
      <div className="title"><span>Title:</span> {album.title}</div>
      <div className="year"><span>Year:</span> {album.year}</div>
      <div className="price"><span>Price:</span> {album.price} $</div>
    </div>
  );
};

export default AlbumPage;

