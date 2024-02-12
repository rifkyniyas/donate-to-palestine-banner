import "./input.css";

const link = "#";
const bannerHTML = `
<aside
id="banner"
tabindex="-1"
class="flex flex-col md:flex-row fixed bottom-0 z-50 gap-8 justify-between items-start py-4 px-6 w-full 
bg-gray-50 border border-b border-gray-200 sm:items-center lg:py-4"
>
    <div>
        <p class="text text-gray-600 font-bold">
            <span class="text-red-500">Humanitarian crisis in gaza is under catastrophic levels.</span>
            And its only worsening every day...
        </p>
        <p class="text-xs text-gray-400 mt-1">You can bring comfort to those enduring unimaginable suffering</p>
    </div>

    <a
        class="flex mx-auto md:mx-0 items-center bg-green-500 border text-white rounded  px-4 py-2 
        hover:border-green-500 hover:bg-transparent hover:text-green-500 dark:hover:text-white uppercase font-bold text-sm
        transition duration-150 ease-in-out"
        href="${link}"
        target="_blank"
    >
        I want to donate
    </a>
</aside>
`;

const initDTPBanner = () => {
  document.body.classList.add("pb-20");
  const parser = new DOMParser();
  const doc = parser.parseFromString(bannerHTML, "text/html");
  const node = doc.body.firstChild;
  document.body.appendChild(node);
};

export { initDTPBanner };
