
export class Noticia{

    id?: number;
    url?: string;
    titulo?: string;
    subtitulo?: string;
    autor?: string;
    dataPublicacao?: string;
    conteudo?: string;
}

export class NoticiaResponse{
    
    noticias: Array<Noticia>;


}