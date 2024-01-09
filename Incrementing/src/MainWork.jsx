function MainWork() {
  const Counters = document.querySelectorAll(".increCounter");
  function RunCounter(){
     
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
  const value = RunCounter();
  


  return (
    <div>
      <div className="increCounter" data-target="3000">
        Linkedin Followers :{value}
      </div>
      <div className="increCounter" data-target="12000">
      Instagram Followers : {value}
      </div>
    </div>
  );
}

export default MainWork;
