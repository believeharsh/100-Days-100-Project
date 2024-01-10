function MainWork() {
  function GetRest() {
    const Counters = document.querySelectorAll(".increCounter");

    Counters.forEach((counter) => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const h = +counter.innerText;
        const increment = target / 1000;
        // console.log(increment)

        if (h < target) {
          counter.innerText = `${Math.ceil(h + increment)}`;
          setTimeout(updateCounter, 0.5);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }

  // const value = GetRest();
  document.addEventListener("DOMContentLoaded", GetRest());

  function ReloadButton() {
    GetRest();
  }

  return (
    <>
      <div
        className="h-[100vh] text-white font-mono flex justify-center items-center flex-col m-0
          bg-blue-800"
      >
        <div
          className="increCounter text-[60px] mt-[30px] text-white"
          data-target="12000"
        ></div>
        <span className="text-[20px]">Twitter Followers</span>

        <div
          className="increCounter text-[60px] mt-[30px] text-white "
          data-target="3000"
        ></div>
        <span className="text-[20px]">YouTube Subscribers</span>
        <button
          onClick={ReloadButton}
          className="bg-black rounded-xl text-white py-3 px-6 hover:bg-gray-800 hover:boder-white hover:border-[1px]  mt-5 text-[15px] "
        >
          Reload Increment Counter ....
        </button>
      </div>
    </>
  );
}

export default MainWork;
