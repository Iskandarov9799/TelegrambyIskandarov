 const firstSettingsButton = document.querySelector(".main-settings-btn")
 const settingsModalElement = document.querySelector(".settings-modal")

 firstSettingsButton.addEventListener("click", e => {
   settingsModalElement.style.display = "block"
 })

 firstSettingsButton.addEventListener("dblclick", e => {
   settingsModalElement.style.display = "none"
 })


 document.addEventListener("keydown", function (close) {
   if (close.key === "Escape") {
     settingsModalElement.style.display = 'none'
   }
 })


 const profileElement = document.querySelector(".user-profile-section ")
 const userInfoElement = document.querySelector(".chat-user-info")
 const profileCloseButton = document.querySelector(".profile-close-btn")

 userInfoElement.addEventListener("click", event =>{
   profileElement.style.display = 'flex'
   profileElement.style.flex = 'auto'
 })

 profileCloseButton.addEventListener('click', event => {
   profileElement.style.display = "none"
 })

 const chatSearchBtnElement = document.querySelector(".chat-search-btn")
 const searchSection = document.querySelector(".search-section")
 const prevButtonElement = document.querySelector(".prev-button")



 chatSearchBtnElement.addEventListener("click", event => {
   searchSection.style.display = "flex"
 })

 prevButtonElement.addEventListener("click", e => {
   searchSection.style.display = "none"
 })

let datalist = [];

const editProfileBox = document.querySelector(".edit-profile-box ")
const changeProfileButton = document.querySelector("#profile")
const editCloseBtn = document.querySelector(".edit-close-btn")


 changeProfileButton.addEventListener("click", e => {
   editProfileBox.style.display = "flex"
 })

 editCloseBtn.addEventListener("click", e => {
   editProfileBox.style.display = "none"
 })


 const imgElement = document.querySelector(".img")
 const ImgChangeBtn = document.querySelector(".img-change")

 ImgChangeBtn.addEventListener("click", e => {
   imgElement.src = "https://picsum.photos/100/100?13"
 })

 const changeNameButton = document.querySelector("#changeName")
 const nameChangeForm = document.querySelector(".name-set")
 const nameInputElement = document.querySelector(".name-input")
 const nameElement = document.querySelector("#name")

 changeNameButton.addEventListener("click", e => {
   nameChangeForm.style.display = "flex"
 })

 nameChangeForm.addEventListener("submit", event => {
   event.preventDefault()
   nameElement.textContent = nameInputElement.value
   nameChangeForm.style.display = "none"
 })
