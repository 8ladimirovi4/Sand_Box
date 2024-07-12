const buildURL = (() => {
  const LINK_FORM = document.querySelector(".container_link-form");
  const REAL_TIME_LINK = document.getElementById("real-time");
  const MESSAGE = document.querySelector(".container_confirm_text");
  let id = null;

  LINK_FORM.addEventListener("submit", (evt) => {
    evt.preventDefault();
    //query
    id = GUID.newID();
    const camNo = evt.target["cam-no"].value;
    MESSAGE.innerText = `Camera ${camNo} added succesfully`;
    MESSAGE.style.color = "green";
    //query
    REAL_TIME_LINK.href = `/real_time/?camNo=${camNo}&id=${id}`;
    //params
    //REAL_TIME_LINK.href = `/real_time/${evt.target['cam-no'].value}/${id}`

    evt.target["cam-no"].value = "";
  });

  REAL_TIME_LINK.addEventListener("click", (evt) => {
    if(!id){
      alert("введите номер камеры");
      return
    } 

    REAL_TIME_LINK.target = "blank_" + id;
    MESSAGE.innerText = `Put camera No and press the link`;
    MESSAGE.style.color = "black";

    setTimeout(() => {
      REAL_TIME_LINK.target = ""
      REAL_TIME_LINK.href = '#'
      id = null
    },1000)
  });
})();
