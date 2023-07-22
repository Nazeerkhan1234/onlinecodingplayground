
export default function Home() {
  return (
  <div className="container-fluid">
  <h1 className="text-center">Online coding playground</h1>
  <div className="d-flex p-3 pt-0 pb-2">
    <select className="form-select" style={{width: 200}} aria-label="Default select example">
      <option selected>select language</option>
      <option value={1}>c</option>
      <option value={2}>Java</option>
      <option value={3}>Python</option>
    </select>
    <select className="form-select" style={{width: 200}} aria aria-label="Default select example">
      <option selected>select version</option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
    </select>
    <button className="btn btn-success outline" style={{width: 100}} aria>
      Run <i className="fa-solid fa-chevron-right" />
    </button>
  </div>
  <div className="row" style={{width: '100%'}}>
    <div className="col h ms-1 me-1 bg-white shadow outline" contentEditable="true" />
    <div className="col h ms-1 me-1 bg-dark text-white shadow">
      2
      <div className="d-flex justify-content-center ">
        <div className="spinner-border x " role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
