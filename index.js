// musk status preview
// https://www.ndtv.com/world-news/elon-musks-net-worth-down-by-768-million-after-cybertruck-launch-event-2137598

// lio messi status preview
// https://khelnow.com/football/2022-12-world-football-fifa-world-cup-2022-argentina-world-champions

const chat_btn = document.querySelector(".chat-btn")
const status_btn = document.querySelector(".status-btn")
const calls_btn = document.querySelector(".call-btn")

const content_box = document.querySelector(".content")

var chats_mini_desc = [
    {dp: {isAvail: 0, url:`<i class="fa-solid fa-circle-user"></i>`}, name: "UNSC", time: "Yesterday", recent: "+91 98%%%%%%: Russia Ukrane War...", pin: `<i class="fa-solid fa-thumbtack"></i>`},
    {dp: {isAvail: 0, url:`<i class="fa-solid fa-circle-user"></i>`}, name: "dummy", time: "08:56", recent: `Myself: <i class='fa-solid fa-image chat-photo-icon'></i> Photo`, pin: `<i class="fa-solid fa-thumbtack"></i>`},
    {dp: {isAvail: 1, url:"./assets/musk.png"}, name: "Elon Musk", time: "online", recent: "I am gonna ruin twitter", pin: `<i class="fa-solid fa-thumbtack"></i>`},
    {dp: {isAvail: 1, url:"./assets/modi.png"}, name: "Narendra Modi", time: "Yesterday", recent: "Mere pyare deshvasio, ye jo rahul...", pin: ``},
    {dp: {isAvail: 1, url:"./assets/messi.png"}, name: "Lionel Messi", time: "online", recent: "Ad hg sgggteyy porte gola gs...", pin: ``},
    {dp: {isAvail: 1, url:"./assets/mbappe.png"}, name: "Kylian Mbappe", time: "14:45", recent: "I am the most gole scorer in FIFA 2022...", pin: ``},
    {dp: {isAvail: 1, url:"./assets/rahul.png"}, name: "Rahul Gandhi", time: "online", recent: "Maza aaya, aur ye jo mja...", pin: ``},
    {dp: {isAvail: 1, url:"./assets/nikola.png"}, name: "Nikola Tesla", time: "Yesterday", recent: "You: Hi how are you?", pin: ``},
    {dp: {isAvail: 1, url:"./assets/ronaldo.png"}, name: "Cristiano Ronaldo", time: "12:00", recent: "Tus sas jjs saxsa hgsa...", pin: ``},
]


var status_mini_desc = [
    {mini_preview: {url: "assets/elon_status_preview.png"}, name: "Elon Musk", time: "20 minutes ago", status: {seen: 0}},
    {mini_preview: {url: "assets/lio_status_preview.png"}, name: "Lionel Messi", time: "Today, 07:58", status: {seen: 1}}
]

var status_owner_template = `<div class="owner_status_details pad flex-center">
                                <div class="user-dp owner-dp flex-center">
                                    <i class="fa-solid fa-circle-user"></i>
                                    <div class="add-status-icon">
                                        <i class="fa-solid fa-circle-plus"></i>
                                    </div>
                                </div>
                                <div class="status_desc">
                                    <div class="owner_name">
                                        My Status
                                    </div>
                                    <div class="instruction">
                                        Tap to add status update
                                    </div>
                                </div>
                            </div>`

var recent_updates_template = ` <div class="recent-updates pad">
                                    <h6 class="recent-updates-heading">Recent Updates</h6>`

var chat_template_html = ``
var status_template_html = ``

chats_mini_desc.forEach(desc=>{
    var dp
    if(desc.dp.isAvail){
        dp = `<img src=${desc.dp.url} alt="" width="100%">`
    }else{
        dp = desc.dp.url
    }
    chat_template_html += `<div class="a-chat-panel pad flex-center">
                                <div class="user-dp flex-center">
                                    ${dp}
                                </div>
                                <div class="minor-chat-details flex-col-center">
                                    <div class="name-time flex-center">
                                        <div class="name">
                                            ${desc.name}
                                        </div>
                                        <div class="time">
                                            ${desc.time}
                                        </div>
                                    </div>
                                    <div class="msg-pinornot flex-center">
                                        <div class="msg">
                                            ${desc.recent}
                                        </div>
                                        <div class="pin">
                                            ${desc.pin}
                                        </div>
                                    </div>
                                </div>
                            </div>`
})

// set default chat rendering
content_box.innerHTML = chat_template_html

status_mini_desc.forEach(desc=>{
    var preview = `<img src=${desc.mini_preview.url} alt="" width="100%">`
    var seen_class = ""
    if(!desc.status.seen){
        seen_class = "seen"
    }
    
    status_template_html += `<!-- individual status panel -->
                            <div class="a-status-panel flex-center">
                                <div class="status-mini-preview ${seen_class} flex-center">
                                    ${preview}
                                </div>
                                <div class="minor-chat-details flex-col-center">
                                    <div class="status-owner-name flex-center">
                                        <div class="name">
                                            ${desc.name}
                                        </div>
                                    </div>
                                    <div class="status-time flex-center">
                                        <div class="msg">
                                            ${desc.time}    
                                        </div>
                                    </div>
                                </div>
                            </div>`
})
recent_updates_template += status_template_html
recent_updates_template += `</div>`
var disclaimer_template = `<!-- disclaimer -->
                            <div class="disclaimer flex-center">
                                <i class="fa-solid fa-lock disclaimer-lock-icon"></i> Your status updates are <span>end-to-end encrypted</span>
                            </div>`
var status_actions_template = `<div class="add-status-actions flex-col-center">
                                    <div class="text-status">
                                        <i class="fa-solid fa-pen"></i>
                                    </div>
                                    <div class="media-status">
                                        <i class="fa-solid fa-camera"></i>
                                    </div>
                                </div>`

// content_box.innerHTML = chat_template_html

chat_btn.addEventListener("click", (e)=>{
    chat_btn.classList.add("active-btn")
    status_btn.classList.remove("active-btn")
    calls_btn.classList.remove("active-btn")
    content_box.innerHTML = chat_template_html
})

status_btn.addEventListener("click", (e)=>{
    chat_btn.classList.remove("active-btn")
    status_btn.classList.add("active-btn")
    calls_btn.classList.remove("active-btn")
    content_box.innerHTML = status_owner_template + recent_updates_template + disclaimer_template + status_actions_template
})

calls_btn.addEventListener("click", (e)=>{
    chat_btn.classList.remove("active-btn")
    status_btn.classList.remove("active-btn")
    calls_btn.classList.add("active-btn")
    console.log("calls btn is pressed")
})