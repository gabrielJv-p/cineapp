import{Injectable} from '@angular/core'; // funciona da seguinte forma , o serviço ele pode ser injetado em qualquer pagina do app , root significa que existe uma unica instancia dele neste projeto.
import{HttpClient , HttpParams} from '@angular/common/http'; // é  a ferramenta do angular que faz requisições para APIS
import{Observable} from 'rxjs'; // No angular o observable funciona como uma promessa de que os dados vao chegar , ou seja quem chamou o metodo recebe a resposta.
import{Movie,MovieListResponse} from '../models/movie.model'; // Servem para tipar os dados que chegam da API o angular sabe exatamente quais campos esperar
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MovieService{
    private baseUrl = environment.tmdbBaseUrl;
    private apiKey = environment.tmdbApiKey;


    constructor(private http: HttpClient){} // O angular ele injeta automaticamente o httpclient onde a classe ja recebe e dependencia pronta ou seja nao precisamos instanciar na mao.

    getPopularMovies(): Observable<MovieListResponse>{ // metodo get que retorna uma lista de filme populares ja o MovieListResponse tem o  campo results que é um arrays de filmes
        const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('language', 'pt-BR');


        return this.http.get<MovieListResponse> (
            `${this.baseUrl}/movie/popular` , {params}

        );
    }

    getPegarFilmePeloID(id: number): Observable<Movie>{ // faz um get pelo id que o usuario quer ou seja um filme especifico retorna os detalhes de um unico filme
        const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('language', 'pt-BR');

        return this.http.get<Movie>(
            `${this.baseUrl}/movie/${id}` , {params}
        );
    }
}