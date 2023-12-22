import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const HomeContent = () => {
  return (
    <>
      <section>
        <div
          className="d-flex flex-column justify-content-center align-items-center title-header"
          style={{
            height: "100vh",
            color: "white",
            backgroundImage: "url(assets/img/banner.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>IDEAS</h1>
          <p style={{ fontSize: "20px" }}>Where all our great things begin</p>
        </div>
      </section>

      <main className="container">
        <div className="d-flex justify-content-between">
          <p>Showing 1 - 10 of 100</p>
          <div className="d-flex gap-5">
            <div className="d-flex gap-3">
              <p>Show per page:</p>
              <select id="page">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>

            <div className="d-flex gap-3">
              <p>Short by:</p>
              <select id="page">
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="assets/img/logo.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-body-secondary">
              5 September 2023
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
          </div>
        </div>

        {/* <div>
        <Stack spacing={2}>
          <Pagination count={10} showFirstButton showLastButton />
        </Stack>
      </div> */}
      </main>
    </>
  );
};

export default HomeContent;
