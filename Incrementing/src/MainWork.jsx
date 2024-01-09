function MainWork() {
  function GetRest( ){
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
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });

  }
  const value = GetRest();
  

 

  return (
   
    <>
      <div
        className="h-[100vh] text-white font-mono flex justify-center items-center flex-col m-0
  bg-blue-800"
      >
        <div
          className="increCounter text-[60px] mt-[30px] text-white"
          data-target="12000"
        >{value}</div>
        <span className="text-[20px]">Twitter Followers</span>

        <div
          className="increCounter text-[60px] mt-[30px] text-white "
          data-target="3000"
        ></div>
        <span className="text-[20px]">YouTube Subscribers</span>
      </div>
    </>
  );
}

export default MainWork;
