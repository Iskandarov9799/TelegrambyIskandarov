  
 let selected = 0;  

let localStorageData = localStorage.getItem('data')

 let data = (localStorageData)? JSON.parse(localStorageData): {
     config: {
         background: 'black',
         name: 'Qudrat',
         myProfilePhoto: 'https://picsum.photos/100/100?11'
     },
     chats: [{
         chatId: 1,
         chatName: 'Instagram',
         username: "instagram",
         profileImg: 'https://picsum.photos/100/100?10',
         chatNumber: '+998 99 123-45-67',
         chatMessages: [{
             sender:'Qudrat',
             message: 'Salom',
             messageSendedTime: '7:00'
         }, {
             sender: 'Instagram',
             message: 'Salom!',
             messageSendedTime: "8:00"
         }]
     }, {
         chatId: 2,
         chatName: 'Telegram',
         username: "telegram",
         profileImg: "https://picsum.photos/100/100?8",
         chatNumber: '+998 99 321-54-76',
         chatMessages: [{
            sender:'Qudrat',
             message: 'Salom',
             messageSendedTime: '10:20'
         }, {
             sender: 'Telegram',
             message: 'Salom',
             messageSendedTime: "11:00"
         }]
     }, {
         chatId: 3,
         chatName: 'Facebook',
         username: "facebook",
         profileImg: "https://picsum.photos/100/100?7",
         chatNumber: '+998 99 111-22-33',
         chatMessages: [{
            sender:'Qudrat',
             message: 'Salom'             ,
             messageSendedTime: '12:00'
         }, {
             sender: 'facebook',
             message: 'Salom ',
             messageSendedTime: "13:00"
         }]
     }, {
         chatId: 4,
         chatName: 'Twitter',
         username: "twitter",
         profileImg: "https://picsum.photos/100/100?6",
         chatNumber: '+998 99 222-33-44',
         chatMessages: [{
            sender:'Qudrat',
             message: 'Salom',
             messageSendedTime: '13:00'
         }, {
             sender: 'Twitter',
             message: 'twitter',
             messageSendedTime: "14:00"
         }]
     }, {
         chatId: 5,
         chatName: 'Tiktok',
         username: "tiktok",
         profileImg: "https://picsum.photos/100/100?3",
         chatNumber: '+998 99 444-55-66',
         chatMessages: [{
            sender:'Qudrat',
             message: 'Salom   ',
             messageSendedTime: '22:00'
         }, {
             sender: 'Tiktok',
             message: 'Salom',
             messageSendedTime: "23:00"
         }]
     }, {
         chatId: 6,
         chatName: 'Amazon',
         username: "amazon",
         profileImg: "https://picsum.photos/100/100?2",
         chatNumber: '+998 99 111-11-11',
         chatMessages: [{
            sender:'Qudrat',
             message: 'Salom',
             messageSendedTime: '12:00'
         }, {
             sender: 'Amazon',
             message: 'Salom',
             messageSendedTime: "15:00"
         }] }, {
            chatId: 7,
            chatName: 'Apple',
            username: "apple",
            profileImg: "https://picsum.photos/100/100?5",
            chatNumber: '+998 99 567-23-45',
            chatMessages: [{
                sender:'Qudrat',
                message: 'Salom',
                messageSendedTime: '04:00'
            }, {
                sender: 'Apple',
                message: 'Salom',
                messageSendedTime: "10:00"
            }]
        }, {
            chatId: 8,
            chatName: 'Windows',
            username: "windows",
            profileImg: "https://picsum.photos/100/100?2",
            chatNumber: '+998 99 999-99-99',
            chatMessages: [{
                sender:'Qudrat',
                message: 'Qudrat',
                messageSendedTime: '17:30'
            }, {
                sender: 'Windows',
                message: 'Salom ',
                messageSendedTime: "18:30"
            }]
        }, {
            chatId: 9,
            chatName: 'Cake&Lab',
            username: "cake&lab",
            profileImg: "https://picsum.photos/100/100?4",
            chatNumber: '+998 99 435-67-12',
            chatMessages: [{
                sender:'Qudrat', 
                message: 'Salom',
                messageSendedTime: '19:50'
            }, {
                sender: 'Cake&lab',
                message: 'Salom',
                messageSendedTime: "23:00"
            }]
        }
     ]
 } 
 

 localStorage.setItem('data', JSON.stringify(data))

 const asideUsers = document.querySelector(".aside__users") 

 userChatRender() 


function userRender(chatName, profileImg, messageSendedTime) {
    const newUserBox = document.createElement("div")
    const userPhotoBox = document.createElement("div")
    const userMainInfo = document.createElement("div")
    const userInfo = document.createElement("div")
    const newUsername = document.createElement("p")
    const newTime = document.createElement("time") 
    const newImg = document.createElement("img")

    newUserBox.classList.add("user-box")
    userPhotoBox.classList.add("user-photo-box")
    userMainInfo.classList.add("user-main-info")
    userInfo.classList.add("user-info")
    newUsername.classList.add("user-name")
    newTime.classList.add("time") 
    newImg.classList.add("user-photo")

    newUsername.textContent = chatName
    newTime.textContent = messageSendedTime
    newImg.src = profileImg

    userPhotoBox.appendChild(newImg)
    userMainInfo.appendChild(newUsername)
    userMainInfo.appendChild(newTime)
    userInfo.appendChild(userMainInfo)
    newUserBox.appendChild(userPhotoBox)
    newUserBox.appendChild(userInfo) 

    return newUserBox


}

function userChatRender() {
    for(let item of data.chats){ 
        asideUsers.appendChild(userRender(item.chatName, item.profileImg, item.chatMessages[0].messageSendedTime))
    }

}


 const usersList = document.querySelector(".aside__users")
 const chatMainSection = document.querySelector(".chat-section") 
 const userBoxes = document.querySelectorAll(".user-box")



 
 const chatUserAvatar = document.querySelector(".chat-user-avatar")
 const chatUsername =  document.querySelector(".chat-username")

 const userAvatarPhoto = document.querySelector(".user-avatar-photo")
 const userProfileName = document.querySelector(".text")
 const UsernameElement = document.querySelector(".user-name")
 const chatSection = document.querySelector(".chat-section")
 const UserPhoneNumber = document.querySelector(".user-number")
 const NameUser = document.querySelector(".nameUser")


 userBoxes.forEach((element, index) => { 
     element.addEventListener("click", event => {
        chatSection.style.display = "flex"
       
         userBoxes.forEach(elm => {
             elm.classList.remove("actived-user-box")
         })

         element.classList.add("actived-user-box")
         selected = index 
         chatUserAvatar.src = data.chats[selected].profileImg;
         chatUsername.textContent = data.chats[selected].chatName
        
         userAvatarPhoto.src = data.chats[selected].profileImg;
         userProfileName.textContent = data.chats[selected].chatName
         UserPhoneNumber.textContent = data.chats[selected].chatNumber
         NameUser.textContent = data.chats[selected].chatName
         console.log(NameUser.textContent);
         renderSelectedChatMessages()

     })
 })


 let messages = document.querySelector(".messages")




 function renderMessage(msgText, msgTime, sender) {  
    if(sender  == data.config.name){
        const newSentElement = document.createElement("li") 
        const timeElement = document.createElement("time")
        newSentElement.classList.add("sent-message")
        newSentElement.textContent = msgText
        timeElement.textContent = msgTime
        return newSentElement
    } else {
        const newReceivedElement = document.createElement("li")
        const timeElement = document.createElement("time")
        newReceivedElement.classList.add("received-message")
        newReceivedElement.textContent = msgText
        timeElement.textContent = msgTime
        return newReceivedElement
    }

 } 

 function renderSelectedChatMessages() {
     messages.innerHTML = ""
     for (let message of data.chats[selected].chatMessages) {  
         messages.appendChild(renderMessage(message.message, message.messageSendedTime, message.sender))
     }
 }

const sendMessageForm = document.querySelector(".message-send-form")
const sendMessageInput = document.querySelector(".message-send-input")
const messagesParent = document.querySelector(".messages")


sendMessageForm.addEventListener("submit", event => {
  event.preventDefault()

  var date = new Date;
  var hour = date.getHours();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();


  data.chats[selected].chatMessages.push({
    sender: "Qudrat",
    message: sendMessageInput.value,
    time: hour + ":" + minutes
  })

  localStorage.setItem('data', JSON.stringify(data))

  const newPElement = document.createElement("p")
  newPElement.classList.add("sent-message")

  const newTimeElement = document.createElement("time")
  newTimeElement.classList.add("message-time")

  newTimeElement.textContent = hour + ":" + minutes
  newPElement.textContent = sendMessageInput.value
 
  newPElement.appendChild(newTimeElement) 
  messagesParent.appendChild(newPElement)

  sendMessageInput.value = null

})


