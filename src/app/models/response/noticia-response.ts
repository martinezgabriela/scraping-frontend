
export class Noticia{

    id?: number;
    url?: string;
    titulo?: string;
    subtitulo?: string;
    autor?: string;
    data?: string;
    conteudo?: string;
}

export class NoticiaResponse{
    
    noticias: Array<Noticia>;


}