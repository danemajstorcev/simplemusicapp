
import React from "react";
import { Link } from "react-router-dom";
import { Album } from "../../types";
import "./AlbumList.scss";

interface AlbumListProps {
  album: Album;
  artistId: number; 
}

const AlbumList: React.FC<AlbumListProps> = ({ album, artistId }) => {
  return (
    <Link to={`/artist/${artistId}/${album.albumId}`} className="album-item-link">
      <div className="album-item">
        <img className="album-cover" src={`/images/albums/${album.cover}.jpg`} alt={album.title} />
      </div>
    </Link>
  );
};

export default AlbumList;


