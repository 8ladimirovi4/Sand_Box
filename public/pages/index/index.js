const buildURL = (() => {
  const REAL_TIME_LINK = document.getElementById("real-time");
  const REAL_TIME_LINK_FORM = document.querySelector(".container_realtime-wrapper_link-form");
  const MESSAGE_REALTIME = document.querySelector(".container_realtime-wrapper_confirm_real-time-message");
  const PLAYBACK_LINK = document.getElementById('playback')
  const PLAYBACK_LINK_FORM = document.querySelector('.container_playback-wrapper_link-form')
  const MESSAGE_PLAYBACK = document.querySelector('.container_playback-wrapper_confirm_playback-message')
  let id = null;

  REAL_TIME_LINK_FORM.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const camNo = evt.target["cam-no"].value;
 
    if(!camNo){
      MESSAGE_REALTIME.innerText = `field cam No is empty`;
      MESSAGE_REALTIME.style.color = "red";
      return
    }
    id = GUID.newID();
    //query
    MESSAGE_REALTIME.innerText = `Camera ${camNo} added succesfully`;
    MESSAGE_REALTIME.style.color = "green";
    //query
    REAL_TIME_LINK.href = `/real_time/?camNo=${camNo}&id=${id}`;
    //params
    //REAL_TIME_LINK.href = `/real_time/${evt.target['cam-no'].value}/${id}`

    evt.target["cam-no"].value = "";
  });

  REAL_TIME_LINK.addEventListener("click", (evt) => {
    if(!id){
      alert("add cam No");
      return
    } 

    REAL_TIME_LINK.target = "blank_" + id;
    MESSAGE_REALTIME.innerText = `Put camera No and press the link`;
    MESSAGE_REALTIME.style.color = "black";

    setTimeout(() => {
      REAL_TIME_LINK.target = ""
      REAL_TIME_LINK.href = '#'
      id = null
    },1000)
  });

  PLAYBACK_LINK_FORM.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const camNo = evt.target["cam-no"].value;
    const startTime = evt.target["start_time"].value;
    const endTime = evt.target["end_time"].value;

    if(!camNo || !startTime || !endTime){
      MESSAGE_PLAYBACK.innerText = `field cam No, start time end time is empty`;
      MESSAGE_PLAYBACK.style.color = "red";
      return
    }
    //query
    id = GUID.newID();
    

    MESSAGE_PLAYBACK.innerText = `Camera ${camNo} added succesfully, range ${startTime} - ${endTime}`;
    MESSAGE_PLAYBACK.style.color = "green";
    //query
    PLAYBACK_LINK.href = `/playback/?camNo=${camNo}&id=${id}&startTime=${startTime}&endTime=${endTime}`;
    //params
    //REAL_TIME_LINK.href = `/real_time/${evt.target['cam-no'].value}/${id}`

    evt.target["cam-no"].value = ''
    evt.target["start_time"].value = ''
    evt.target["end_time"].value = ''
  });

  PLAYBACK_LINK.addEventListener("click", (evt) => {
    if(!id){
      alert("add cam No, start time and end time");
      return
    } 

    PLAYBACK_LINK.target = "blank_" + id;
    MESSAGE_PLAYBACK.innerText = `Put camera No, start time, end time and press the link`;
    MESSAGE_PLAYBACK.style.color = "black";

    setTimeout(() => {
      REAL_TIME_LINK.target = ""
      REAL_TIME_LINK.href = '#'
      id = null
    },1000)
  });

})();
