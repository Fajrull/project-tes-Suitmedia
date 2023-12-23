import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

const BASE_URL_API = "https://suitmedia-backend.suitdev.com/api/ideas";

const getApi = async () => {
  try {
    const response = await axios.get(BASE_URL_API, {
      headers: {
        Accept: "application/json",
      },
    });

    console.log(response.data.data);
    return response.data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
const HomeContent = () => {
  const [api, setApi] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    // Retrieve itemsPerPage from localStorage, or use a default value
    return parseInt(localStorage.getItem("itemsPerPage")) || 10;
  });

  const [sortBy, setSortBy] = useState(() => {
    // Retrieve sortBy from localStorage, or use a default value
    return localStorage.getItem("sortBy") || "Newest";
  });

  useEffect(() => {
    const fetchApi = async () => {
      const resApi = await getApi();
      setApi(resApi);
    };

    fetchApi();
  }, []);

  useEffect(() => {
    // Save itemsPerPage and sortBy to localStorage
    localStorage.setItem("itemsPerPage", itemsPerPage.toString());
    localStorage.setItem("sortBy", sortBy);
  }, [itemsPerPage, sortBy]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedApi = [...api];

  if (sortBy === "Newest") {
    sortedApi.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } else if (sortBy === "Oldest") {
    sortedApi.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedApi.slice(indexOfFirstItem, indexOfLastItem);

  const extractImageAndText = (htmlContent) => {
    const doc = new DOMParser().parseFromString(htmlContent, "text/html");
    const imgElement = doc.querySelector("img");
    const paragraphElement = doc.querySelector("p");

    let imageSrc = null;
    let textSnippet = null;

    if (imgElement) {
      imageSrc = imgElement.src;
    }

    if (paragraphElement) {
      const words = paragraphElement.textContent.split(" ");
      textSnippet = words.slice(0, 6).join(" ");
    }

    return { imageSrc, textSnippet };
  };

  return (
    <>
      <main className="container">
        <div>
          <div className="d-flex justify-content-between flex-wrap ">
            <p>{`Showing ${indexOfFirstItem + 1} - ${indexOfLastItem} of ${
              api.length
            }`}</p>
            <div className="d-flex flex-wrap gap-5 title">
              <div className="d-flex gap-3">
                <p>Show per page:</p>
                <select
                  id="perPage"
                  onChange={handleItemsPerPageChange}
                  value={itemsPerPage}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>

              <div className="d-flex gap-3">
                <p>Sort by:</p>
                <select id="sortBy" onChange={handleSortChange} value={sortBy}>
                  <option value="Newest">Newest</option>
                  <option value="Oldest">Oldest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between gap-3 ">
            {currentItems.map((item) => {
              const { imageSrc, textSnippet } = extractImageAndText(
                item.content
              );

              return (
                <div
                  key={item.id}
                  className="card mt-5 mb-5 "
                  style={{ width: "300px" }}
                >
                  {imageSrc && (
                    <img src={imageSrc} className="card-img-top" alt="..." />
                  )}

                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      {item.created_at}
                    </h6>
                    {textSnippet && (
                      <h3 className="card-text">{textSnippet}</h3>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <footer className="mb-5 container">
        <Stack
          spacing={2}
          className="d-flex justify-content-center align-items-center"
        >
          <Pagination
            count={Math.ceil(api.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
          />
        </Stack>
      </footer>
    </>
  );
};

export default HomeContent;
