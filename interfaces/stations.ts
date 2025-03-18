//https://www.radiorecord.ru/api/stations

export interface Stations {
  genre: Genre[];
  stations: Station[];
}

interface Genre {
  id: number;
  name: string;
  detail_picture: null | string;
  picture: null | string;
  svg: null | string;
  pdf: null | string;
}

export interface Station {
    id:                number;
    prefix:            string;
    title:             string;
    tooltip:           string;
    sort:              number;
    bg_color:          null;
    bg_image:          string;
    bg_image_mobile:   string;
    svg_outline:       string;
    svg_fill:          string;
    pdf_outline:       null | string;
    pdf_fill:          null | string;
    short_title:       string;
    icon_gray:         string;
    icon_fill_colored: string;
    icon_fill_white:   string;
    new:               boolean;
    new_date?:         null;
    stream_64:         string;
    stream_128:        string;
    stream_320:        string;
    stream_hls:        string;
    genre:             Genre[];
    detail_page_url:   string;
    shareUrl:          string;
    mark:              null | string;
    updated:           string;
}