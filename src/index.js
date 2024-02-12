import "./style.css";

const bannerHTML = `
<aside
id="banner"
tabindex="-1"
class="flex flex-col md:flex-row fixed bottom-0 z-50 gap-8 justify-between items-start py-4 px-6 w-full 
bg-gray-50 border border-b border-gray-200 sm:items-center lg:py-4
transition-all duration-1000 ease-in-out"
>
    <div>
        <p class="text text-gray-600 font-bold">
            <span class="text-red-500">Humanitarian crisis in gaza is under catastrophic levels.</span>
            And its only worsening every day...
        </p>
        <p class="text-xs text-gray-400 mt-1">You can bring comfort to those enduring unimaginable suffering</p>
    </div>

    <a
        class="flex mx-auto md:mx-0 items-center bg-blue-500 border text-white rounded  px-4 py-2 
        hover:border-blue-500 hover:bg-transparent hover:text-blue-500 dark:hover:text-white uppercase font-bold text-sm"
        href="#"
    >
        I want to donate
    </a>
</aside>
`;
