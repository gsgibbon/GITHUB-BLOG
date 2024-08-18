import { HomeContainer } from "./styles";

export function Home() {
  return(
    <HomeContainer>
      <div>
        <img src="" alt="" />
        <div>
          <h1>Guilherme Gibbon</h1>
          <p>
            Tristique volutpat pulvinar vel massa, 
            pellentesque egestas. Eu viverra massa quam dignissim
            aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>
          <nav>
            <a href="#">Gsgibbon</a>
            <a href="#">home</a>
            <a href="#">0 seguidores</a>
          </nav>
        </div>
      </div>

      <div>
        <h3>Publicações</h3>  
        <input type="text" placeholder="Buscar conteúdo"/>
      </div>

      <div>
        <div>1</div>  
        <div>2</div>  
        <div>3</div>  
        <div>4</div>  
        <div>5</div>  
        <div>6</div>  
      </div>   
    </HomeContainer>
  )
}