import React from 'react'
import "./relatorios.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const Relatorios = () => {
  return (
    <main class="container gx-5">
      <div class="container">
      <div class="row justify-content-between align-items-center border-bottom border-2">
        <div class="col-4 py-5 ps-0">
              <h1>Relatórios e Estatísticas</h1>
        </div>
            <Breadcrumb class="col-4">
        <Breadcrumb.Item href="#">Início</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Relatórios e Estatísticas
        </Breadcrumb.Item>
            </Breadcrumb>
        </div>
      </div>
      <h2 class="mt-5 my-2">Filtrar Estatísticas</h2>
          <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">Curso: </label>
              <select class="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">Função: </label>
              <select class="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
          <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">Mês de análise: </label>
              <select class="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
              </select>
          </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </main>
  )
}

export default Relatorios