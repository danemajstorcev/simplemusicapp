export interface Artist {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: Album[];
}

export interface Album {
  albumId: string;
  title: string;
  year: number;
  cover: string;
  price: number;


}

export interface ArtistProps {
  artist: Artist;
}
export interface ArtistsProps {
  artists: Artist[];
}

export interface AlbumsProps {
  albums?: Album[];
  id?: string;
}
