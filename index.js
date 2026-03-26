/* =========================
   CONFIG & GLOBALS
========================= */
const API_BASE = 'https://ogachat.staging.ogaranya.com/v1';
let token = 'demo-token';
let phone = 'demo';
let userId = '5a38d2fc-b457-4c4f-8b21-b37628d00998';

const chats = [
  {
    id: 0,
    name: "OgaChat AI",
    avatar: "./ogaranya-logo1.png",
    messages: []
  }
];

let currentChat = 0;

/* =========================
   FALLBACK RESPONSES (no API)
========================= */
const fallbackResponses = {
  'pay': 'OgaChat payment processed! Check your wallet.',
  'hello': 'Hello! How can I help with OgaChat today?',
  'help': 'Send any message for AI response. Supports payments, merchants, products!',
  'default': "I'm OgaChat AI. Ask about markets, payments, or anything!"
};

/* =========================
   API CHAT FUNCTION
========================= */
async function fetchOgaResponse(text) {
  try {
    console.log('Sending to OgaChat:', { text, user_id: userId });
    const res = await fetch(`${API_BASE}/chat/ogachat/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ text, user_id: userId })
    });
    console.log('Chat response status:', res.status);
    const data = await res.json();
    console.log('Chat data:', data);
    if (res.ok) {
      return data.response || data.text || data.message || data.content || 'Great question! OgaChat handles payments, merchants & more.';
    } else {
      console.error('API Error:', data);
      return `OgaChat API: ${data.message || 'Try again'}. Fallback: ${getFallbackResponse(text)}`;
    }
  } catch (err) {
    console.error('Chat fetch error:', err);
    return `Connection issue. Using fallback: ${getFallbackResponse(text)}`;
  }
}

function getFallbackResponse(text) {
  const clean = text.toLowerCase().replace(/[^\w\s]/g, '').trim();
  const key = Object.keys(fallbackResponses).find(k => clean.includes(k)) || 'default';
  return fallbackResponses[key];
}

/* =========================
   THEME LOAD
========================= */
(function loadTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
})();

/* =========================
   INIT APP
========================= */
function initApp() {
  loadChats();
  renderChatList();
  openChat(0);
  document.getElementById('messageInput').disabled = false;
  document.getElementById('sendBtn').disabled = false;
  document.getElementById('welcomeMessage').style.display = 'block';
}

/* =========================
   LOAD/SAVE CHATS
========================= */
function loadChats() {
  const saved = localStorage.getItem('ogachat_chats');
  if (saved) {
    chats.length = 0;
    Object.assign(chats, JSON.parse(saved));
  }
}

function saveChats() {
  localStorage.setItem('ogachat_chats', JSON.stringify(chats));
}

/* =========================
   SIDEBAR CHAT LIST
========================= */
function renderChatList() {
  const chatList = document.getElementById("chatList");
  const search = document.getElementById('searchInput').value.toLowerCase();
  chatList.innerHTML = "";

  chats.filter((chat, index) => 
    index.toString() === currentChat.toString() || 
    !search || chat.name.toLowerCase().includes(search)
  ).forEach((chat, index) => {
    const lastMsg = chat.messages.at(-1);

    const item = document.createElement("div");
    item.className = `chat-item ${index === currentChat ? "active" : ""}`;
    item.onclick = () => openChat(index);

    item.innerHTML = `
      <img src="${chat.avatar}" />
      <div class="chat-meta">
        <strong>${chat.name}</strong>
        <div class="chat-preview">
          ${lastMsg ? (lastMsg.type === "sent" ? "✓✓ " : "") + lastMsg.text.substring(0, 30) + '...' : "No messages yet"}
        </div>
      </div>
    `;

    chatList.appendChild(item);
  });
}

/* =========================
   OPEN CHAT
========================= */
function openChat(index) {
  currentChat = index;
  document.getElementById("chatName").innerText = chats[index].name;
  document.getElementById("chatAvatar").src = chats[index].avatar;
  renderMessages();
  renderChatList();

  if (window.innerWidth <= 768) {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("chatArea").classList.add("show");
  }
}

/* =========================
   BACK BUTTON
========================= */
function goBack() {
  document.getElementById("sidebar").style.display = "flex";
  document.getElementById("chatArea").classList.remove("show");
}

/* =========================
   MESSAGE RENDER
========================= */
function renderMessages() {
  const box = document.getElementById("messages");
  const typing = document.getElementById("typingIndicator");
  box.innerHTML = "";

  chats[currentChat].messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = `message ${msg.type}`;
    div.textContent = msg.text;
    box.appendChild(div);
  });

  box.scrollTop = box.scrollHeight;
  typing.style.display = 'none';
}

/* =========================
   SEND MESSAGE
========================= */
async function sendMessage() {
  const input = document.getElementById("messageInput");
  const sendBtn = document.getElementById("sendBtn");
  const text = input.value.trim();
  if (!text) return;

  // Add user message
  chats[currentChat].messages.push({ text, type: "sent", timestamp: Date.now() });
  input.value = "";
  renderMessages();
  renderChatList();
  saveChats();

  // Show typing
  const typing = document.getElementById("typingIndicator");
  typing.style.display = 'block';
  sendBtn.disabled = true;

  // Get AI response
  const response = await fetchOgaResponse(text);
  chats[currentChat].messages.push({ text: response, type: "received", timestamp: Date.now() });
  
  renderMessages();
  renderChatList();
  saveChats();
  sendBtn.disabled = false;
}

/* =========================
   EVENT LISTENERS
========================= */
document.addEventListener("DOMContentLoaded", () => {
  // No more auth modal - auto init
  initApp();

  // Enter key & Ctrl+Enter send
  document.addEventListener('keydown', (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Search chats
  document.getElementById('searchInput').addEventListener('input', renderChatList);
});

/* =========================
   RESIZE HANDLER
========================= */
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.getElementById("sidebar").style.display = "flex";
    document.getElementById("chatArea").classList.remove("show");
  }
});

