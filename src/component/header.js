import { navigation } from "../utils/constant";
export default function NavBar() {
  return (
    <nav class="bg-white w-full">
      <div class="w-full mt-2">
        <div class="relative flex items-center justify-between w-full">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start w-full">
            <div class="hidden sm:ml-6 sm:block w-full">
              <div class="flex w-full items-center justify-center space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-[#49494B] hover:bg-gray-100 hover:text-[#49494B]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-menu" class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm font-medium text-[#49494B] hover:bg-gray-100 hover:text-[#49494B]"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
