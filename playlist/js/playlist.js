/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    playlists = [...playlists, { name: playlistName, songs: [] }];
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
  */
  const getAllPlaylists = () => {
    return playlists;
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
  const removePlaylist = (playlistName) => {
    playlists = playlists.filter((playlist) => playlist.name !== playlistName);
  };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */

  const addSongToPlaylist = (playlistName, song) => {
    if (song.favorite === undefined) {
      song.favorite = false;
    }

    let playlistFound = false;
    playlists = playlists.map(playlist => {
      if (playlist.name === playlistName) {
        playlistFound = true;
        return {
          ...playlist,
          songs: [...playlist.songs, song]
        };
      }
      return playlist;
    });

    if (!playlistFound) {
      throw new Error(`La playlist ${playlistName} no se encuentra en listados.`);
    }
  };


  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */

  const removeSongFromPlaylist = (playlistName, title) => {
    let playlistFound = false;

    playlists = playlists.map(playlist => {
      if (playlist.name === playlistName) {
        playlistFound = true;
        const updatedSongs = playlist.songs.filter(song => song.title !== title);
        if (updatedSongs.length === playlist.songs.length) {
          throw new Error(`La canción ${title} no se encuentra en la playlist ${playlistName}`);
        }
        return { ...playlist, songs: updatedSongs };
      }
      return playlist;
    });

    if (!playlistFound) {
      throw new Error(`La playlist ${playlistName} no se encuentra en listados.`);
    }
  };

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {
    playlists = playlists.map(playlist => {
      if (playlist.name === playlistName) {
        playlist.songs = playlist.songs.map(song => {
          if (song.title === title) {
            song.favorite = true;
          }
          return song;
        });
      }
      return playlist;
    });
  };

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */

  const sortSongs = (playlistName, criterion) => {
    // Validar criterios permitidos
    const validCriterion = ['title', 'artist', 'duration'];
    if (!validCriterion.includes(criterion)) {
      throw new Error(`Criterio invalido: ${criterion}. Los criterios validos son: ${validCriterion.join(', ')}.`);
    }

    let playlistFound = false;

    playlists = playlists.map((playlist) => {
      if (playlist.name === playlistName) {
        playlistFound = true;
        const sortedSongs = [...playlist.songs].sort((a, b) => {
          if (a[criterion] < b[criterion]) return -1;
          if (a[criterion] > b[criterion]) return 1;
          return 0;
        });
        return {
          ...playlist,
          songs: sortedSongs,
        };
      }
      return playlist;
    });
    if (!playlistFound) {
      throw new Error(`La playlist ${playlistName} no se encuentra en listados.`);
    }
  };


  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};


export default musicCatalog;