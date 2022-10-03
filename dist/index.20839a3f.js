const productWrapper=document.querySelector(".product-wrapper");class Product{#t="https://fakestoreapi.com/products";constructor(){this._getProductData()}async _getProductData(){try{const t=await fetch(this.#t);if(!t.ok)throw new Error("Something went wrong, please try again later!");const n=await t.json();this._renderProduct(n)}catch(t){this._renderError(t.message)}}_renderProduct(t){t.forEach((t=>{const n=`\n        <div\n          class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden">\n          <a href="#" class="grid place-items-center  bg-white">\n            <img\n              class="p-8 rounded-t-lg h-80 "\n              src="${t.image}"\n              alt="${t.title}"\n            />\n          </a>\n          <div class="px-5 pb-5">\n            <a href="#">\n              <h5\n                class="mt-2.5 text-lg font-semibold tracking-tight text-gray-900 dark:text-white truncate"\n              >\n              ${t.title}\n              </h5>\n            </a>\n            <div class="flex items-center mt-2.5 mb-5">\n              <svg\n                aria-hidden="true"\n                class="w-5 h-5 text-yellow-300"\n                fill="currentColor"\n                viewBox="0 0 20 20"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <title>First star</title>\n                <path\n                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"\n                ></path>\n              </svg>\n              <svg\n                aria-hidden="true"\n                class="w-5 h-5 text-yellow-300"\n                fill="currentColor"\n                viewBox="0 0 20 20"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <title>Second star</title>\n                <path\n                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"\n                ></path>\n              </svg>\n              <svg\n                aria-hidden="true"\n                class="w-5 h-5 text-yellow-300"\n                fill="currentColor"\n                viewBox="0 0 20 20"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <title>Third star</title>\n                <path\n                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"\n                ></path>\n              </svg>\n              <svg\n                aria-hidden="true"\n                class="w-5 h-5 text-yellow-300"\n                fill="currentColor"\n                viewBox="0 0 20 20"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <title>Fourth star</title>\n                <path\n                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"\n                ></path>\n              </svg>\n              <svg\n                aria-hidden="true"\n                class="w-5 h-5 text-yellow-300"\n                fill="currentColor"\n                viewBox="0 0 20 20"\n                xmlns="http://www.w3.org/2000/svg"\n              >\n                <title>Fifth star</title>\n                <path\n                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"\n                ></path>\n              </svg>\n              <span\n                class="bg-sky-200 text-sky-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-800 ml-3"\n                >${t.rating.rate}</span\n              >\n            </div>\n            <div class="flex justify-between items-center">\n              <span class="text-3xl font-bold text-gray-900 dark:text-white"\n                >${this._getCurrency(t.price)}</span\n              >\n              <a\n                href="#"\n                class="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"\n                >Add to cart</a\n              >\n            </div>\n          </div>\n        </div>\n      `;productWrapper.insertAdjacentHTML("beforeend",n)}))}_getCurrency(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}_renderError(t){const n=`<p class="font-light dark:text-gray-400">${t}</p>`;productWrapper.insertAdjacentHTML("beforeend",n)}}const myProduct=new Product;
//# sourceMappingURL=index.20839a3f.js.map
