import React from 'react';
import "./home.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const Home = () => {
  return (

    <main class="container gx-5">
      <div class="container">
      <div class="row justify-content-between align-items-center border-bottom border-2">
        <div class="col-4 py-5 ps-0">
              <h1>Página Inicial</h1>
        </div>
            <Breadcrumb class="col-4">
        <Breadcrumb.Item href="#">Início</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Links Úteis
        </Breadcrumb.Item>
            </Breadcrumb>
        </div>
      </div>
      <h2 class="mt-5">Links Úteis</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Exportar notas para...</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Acesse</a>
                 </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="Pichau_ (60).png" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Listagem de alunos</h5>
                  <p class="card-text">This is a short card.</p>
                  <a href="#" class="btn btn-primary">Acesse</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title"> <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-box-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
  <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg> Gerar turmas</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Acesse</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-backpack-fill" viewBox="0 0 16 16">
  <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3H5Z"/>
  <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6.002 6.002 0 0 0-4-5.659V2a2 2 0 1 0-4 0Zm2-1a1 1 0 0 1 1 1v.083a6.04 6.04 0 0 0-2 0V2a1 1 0 0 1 1-1Zm0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4ZM4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Z"/>
</svg>
                <div class="card-body">
                  <h5 class="card-title">Tutores a distância</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Acesse</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Tutores presenciais</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Acesse</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Estimativas</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Acesse</a>
                </div>
              </div>
            </div>
          </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </main>
    
  )
}

export default Home