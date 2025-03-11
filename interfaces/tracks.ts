//https://www.radiorecord.ru/api/stations/now

export interface Tracks {
    id:    number;
    track: Track;
}

export interface Track {
    id:        number;
    artist:    string;
    song:      string;
    image100:  string;
    image200:  string;
    image600:  string;
    listenUrl: null | string;
    itunesUrl: null | string;
    itunesId:  null | string;
    noFav:     boolean;
    noShow:    boolean;
    composer:  string;
    shareUrl:  string;
}
