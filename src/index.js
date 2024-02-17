import css from "./output.css?raw";

const link = "https://donate.unrwa.org/";
const bannerHTML = `
<aside id="dtp-banner" tabindex="-1" class="flex flex-col md:flex-row justify-between items-start fixed bottom-0 left-0 z-50 gap-4 md:gap-8 py-2 md:py-4 px-3 md:px-6 w-full bg-gray-50 border border-b border-gray-200">
    <div>
        <p class="text-sm md:text-base text-gray-600 font-bold">
            <span class="text-red-500">Humanitarian crisis in gaza is under catastrophic levels.</span>
            And its only worsening every day...
        </p>
        <p class="text-xs text-gray-400 mt-1">You can bring comfort to those enduring unimaginable suffering</p>
    </div>
    <a class="flex mx-auto md:mx-0 items-center bg-green-500 border text-white rounded px-2 md:px-4 py-1 md:py-2 
    hover:border-green-500 hover:bg-transparent hover:text-green-500 dark:hover:text-white uppercase font-bold text-sm
    transition duration-150 ease-in-out" href="${link}" target="_blank">
        I want to donate
    </a>
</aside>
`;

const initDTPBanner = () => {
  document.body.classList.add("pb-20");

  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);

  const parser = new DOMParser();
  const doc = parser.parseFromString(bannerHTML, "text/html");
  const node = doc.body.firstChild;
  document.body.appendChild(node);
};

export { initDTPBanner };
