const MY_FORM = document.querySelector("#myForm");
const ANIMAL_VOICE = document.querySelector("#animalVoice");

MY_FORM.addEventListener("submit", (evt) => {
  const type = evt.target.animal.value;
  switch (type) {
    case "cat":
      ANIMAL_VOICE.textContent = catSayHi();
      break;
    case "dog":
      ANIMAL_VOICE.textContent = dogSayHi();
      break;
    default:
      ANIMAL_VOICE.textContent = "pick an animal";
      break;
  }
  evt.preventDefault();
});
