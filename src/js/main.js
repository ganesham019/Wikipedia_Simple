import fetchData from "./fetchData";
import AOS from "aos";

document.addEventListener("DOMContentLoaded", () => {
  const fetchQuotesUrl = "https://dummyjson.com/quotes";

  // get books container
  const authorListContainer = document.getElementById("author_list");

  let authorMarkup = "";
  const fetchBook = async () => {
    const fetchedData = await fetchData(fetchQuotesUrl);
    // clear the previous html
    authorListContainer.innerHTML = "";

    fetchedData.quotes.forEach((book) => {
      authorMarkup += `
        <li class="box_list_card mb-2">
        <h4 class="author mb-2">${book.author}</h4>
        <p class="quotes ">${book.quote}</p>
      </li>`;
    });
    authorListContainer.innerHTML += authorMarkup;
  };

  //   initial call
  fetchBook();

  //   get book input field
  const bookInput = document.getElementById("author_input");

  bookInput.addEventListener("input", async () => {
    const bookData = await fetchData(fetchQuotesUrl);

    // get book input value
    const bookInputValue = document.getElementById("author_input").value;
    const arrayData = bookData.quotes;
    authorMarkup = "";

    if (bookInputValue !== null || bookInputValue !== undefined) {
      // clear the previous html
      authorListContainer.innerHTML = "";
      const filterData = arrayData.filter((item) =>
        item.author.toLowerCase().includes(bookInputValue.toLowerCase())
      );
      {
        filterData.length
          ? filterData.forEach((item) => {
              authorMarkup += `
          <li class="box_list_card mb-2">
          <h4 class="author mb-2">${item.author}</h4>
          <p class="quotes ">${item.quote}</p>
        </li>`;
            })
          : (authorMarkup += `
      <li class="box_list_card mb-2">
      <h4 class="author mb-2">No data Found</h4>
    </li>`);
      }
    } else {
      authorListContainer.innerHTML = "";
      bookData.quotes.forEach((book) => {
        authorMarkup += `
              <li class="box_list_card mb-2">
              <h4 class="author mb-2">${book.author}</h4>
              <p class="quotes ">${book.quote}</p>
            </li>`;
      });
    }
    authorListContainer.innerHTML += authorMarkup;
  });
});

AOS.init({
  duration: 800, // Animation duration in milliseconds
  easing: "ease-in-out", // Easing function for animations
  once: true, // Only animate elements once
});
