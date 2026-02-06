/* =========================
   CHAT DATA
========================= */
const chats = [
  {
    name: "Linnie Frazier",
    avatar: "./avatars/linnie.jpg",
    messages: []
  },
  {
    name: "Victoria Mason",
    avatar: "./avatars/victoria.jpg",
    messages: []
  },
  {
    name: "Sue Saunders",
    avatar: "./avatars/sue.jpg",
    messages: []
  }
];


let currentChat = 0;

/* =========================
   TRAINED RESPONSES
========================= */
const responses = {
  // Greetings
  "hi": "Hello! How can I assist you today?",
  "hey": "Hey there! What’s up?",
  "good morning": "Good morning! Hope you have a productive day.",
  "good afternoon": "Good afternoon! How can I help?",
  "good evening": "Good evening! How was your day?",
  "what's up": "All good here. How about you?",
  "howdy": "Howdy! What can I do for you?",
  "are you there": "Yes, I’m here and ready to help.",

  // Small Talk
  "how is your day": "Pretty smooth so far. Thanks for asking!",
  "are you real": "I’m virtual, but my help is real.",
  "do you sleep": "Nope. I’m always awake for you.",
  "do you eat": "I survive on data, not food.",
  "are you human": "No, I’m an AI created to assist you.",
  "are you smart": "I try my best with what I’ve been trained on.",
  "are you single": "I’m married to code 😄",
  "do you have feelings": "I don’t have emotions, but I understand them.",
  "really": "Yes, really 😊",

  // Programming Basics
  "what is programming": "Programming is the process of giving instructions to a computer to perform tasks.",
  "what is coding": "Coding is writing instructions in a programming language to build software.",
  "what is an algorithm": "An algorithm is a step-by-step procedure to solve a problem.",
  "what is debugging": "Debugging is the process of finding and fixing errors in code.",
  "what is software": "Software is a collection of programs that tell a computer what to do.",
  "what is hardware": "Hardware refers to the physical components of a computer system.",

  // Web Development
  "what is html": "HTML is the standard markup language used to create web pages.",
  "what is css": "CSS styles web pages by controlling layout, colors, and fonts.",
  "what is javascript": "JavaScript is a programming language used to make web pages interactive.",
  "what is frontend": "Frontend is the part of a website users see and interact with.",
  "what is backend": "Backend handles server logic, databases, and APIs.",
  "what is full stack": "Full stack development includes both frontend and backend work.",

  // Databases
  "what is database": "A database is an organized collection of data.",
  "what is sql": "SQL is a language used to manage and query databases.",
  "what is nosql": "NoSQL databases store data in flexible formats like JSON.",
  "what is mongodb": "MongoDB is a NoSQL database that stores data as documents.",

  // Computer Science
  "what is data structure": "Data structures organize data efficiently for access and modification.",
  "what is array": "An array stores multiple values in a single variable.",
  "what is stack": "A stack follows LIFO (Last In, First Out).",
  "what is queue": "A queue follows FIFO (First In, First Out).",
  "what is oop": "OOP is a programming paradigm based on objects and classes.",

  // Interview Questions
  "what is your strength": "I am quick to adapt and always ready to help.",
  "what is your weakness": "I rely on the data I’ve been trained on.",
  "what motivates you": "Solving problems and learning new things.",
  "where do you see yourself in 5 years": "Growing my skills and contributing meaningfully.",

  // Tech Concepts
  "what is ai": "Artificial Intelligence enables machines to mimic human intelligence.",
  "what is machine learning": "Machine learning allows systems to learn from data.",
  "what is cloud computing": "Cloud computing delivers services over the internet.",
  "what is api": "An API allows different software systems to communicate.",
  "what is git": "Git is a version control system for tracking code changes.",
  "what is github": "GitHub is a platform for hosting and collaborating on code.",

  // General Knowledge
  "what is internet": "The internet is a global network connecting computers worldwide.",
  "what is computer": "A computer is an electronic device that processes data.",
  "what is smartphone": "A smartphone is a mobile device with computing capabilities.",
  "what is operating system": "An OS manages hardware and software resources.",

  // Fun
  "tell me something interesting": "Did you know honey never spoils?",
  "tell me a fact": "Octopuses have three hearts.",
  "make me smile": "You just did by asking that 😊",
  "are you funny": "I try—humor loading…",

  // Polite
  "sorry": "No problem at all.",
  "excuse me": "Yes, how can I help?",
  "please help": "Of course. Tell me what you need.",
  "ok": "Got it!",
  "cool": "Glad you think so!",

  // Closing
  "good night": "Good night! Sweet dreams.",
  "see you": "See you later!",
  "talk to you later": "I’ll be right here.",
  "exit": "Session ended. Take care!",

  // Ogaranya – General
// ======================
"what is ogaranya": "Ogaranya is a Nigerian message-commerce platform that allows users to buy, book, and pay for services using SMS, WhatsApp, or USSD without downloading an app.",
"about ogaranya": "Ogaranya enables commerce through text messages, helping users transact even without internet access.",
"what does ogaranya do": "Ogaranya allows users and businesses to sell, buy, and receive payments through messaging channels.",
"is ogaranya a fintech": "Ogaranya operates at the intersection of fintech and message-based commerce.",
"is ogaranya legit": "Yes, Ogaranya is a registered Nigerian technology company.",
"who founded ogaranya": "Ogaranya was founded by Olubodun Akinyele.",
"when was ogaranya founded": "Ogaranya was founded in 2015.",
"how do we subscribe to ogaranya": "To subscribe to or use Ogaranya, users primarily interact with the service via SMS or WhatsApp, as it is a text-to-commerce platform.",
"where is ogaranya located": "Ogaranya is based in Lagos, Nigeria.",
"is ogaranya Nigerian": "Yes, Ogaranya is a Nigerian company.",
"what problem does ogaranya solve": "Ogaranya enables digital transactions for users with limited or no internet access.",

// ======================
// How Ogaranya Works
// ======================

"how does ogaranya work": "Ogaranya works by allowing users to send simple text commands to buy, book, or pay for services.",
"does ogaranya need internet": "No, Ogaranya can be used via SMS or USSD without internet.",
"can i use ogaranya with sms": "Yes, Ogaranya supports SMS-based transactions.",
"what services does ogaranya provide": "Ogaranya is an Offline-to-Online (O2O) convenience commerce platform designed to facilitate transactions via text-based messaging (SMS), WhatsApp, and USSD, allowing businesses and individuals to buy, sell, and make payments without needing a dedicated app.",

"can i use ogaranya on whatsapp": "Yes, Ogaranya supports WhatsApp commerce.",
"what is message commerce": "Message commerce allows buying and selling through text or chat messages.",
"what is ussd payment": "USSD payment allows bank transactions using short codes on mobile phones.",
"how do payments work on ogaranya": "Payments are completed using USSD or supported digital payment channels.",
"is ogaranya an app": "No, Ogaranya does not require a mobile app.",
"can feature phones use ogaranya": "Yes, Ogaranya works on feature phones using SMS or USSD.",
"is ogaranya good for rural areas": "Yes, Ogaranya is designed for low-connectivity environments.",

// ======================
// Buying & Ordering
// ======================
"how to buy on ogaranya": "To buy on Ogaranya, send the product code and command via message and follow the prompts.",
"can i order products on ogaranya": "Yes, products can be ordered through text commands.",
"can i book services on ogaranya": "Yes, Ogaranya supports service bookings.",
"how do i confirm my order": "Order confirmation is sent via message after payment.",
"can i cancel an order": "Order cancellation depends on the merchant’s policy.",
"does ogaranya support subscriptions": "Yes, recurring payments and subscriptions are supported.",
"can i receive receipts": "Yes, receipts are sent via message.",
"can i track my order": "Order updates are communicated through messages.",

// ======================
// Payments & Finance
// ======================
"is ogaranya secure": "Ogaranya uses secure payment channels supported by Nigerian banks.",
"how safe is ogaranya": "Transactions rely on bank-level USSD security.",
"does ogaranya store card details": "No, payments are completed through secure banking channels.",
"what banks support ogaranya": "Most Nigerian banks support USSD payments used by Ogaranya.",
"how long does payment take": "Payments are completed instantly via USSD.",
"when do merchants get paid": "Merchant settlements are processed within business days.",
"does ogaranya charge fees": "Yes, Ogaranya charges small transaction fees.",
"are there hidden charges": "No, fees are transparent.",
"can ogaranya handle bulk payments": "Yes, Ogaranya supports bulk invoicing and collections.",

// ======================
// Business & Merchants
// ======================
"is ogaranya good for small businesses": "Yes, Ogaranya helps small businesses sell without websites or apps.",
"how do businesses use ogaranya": "Businesses use Ogaranya to accept orders and payments via messages.",
"can ogaranya replace a website": "For basic commerce, yes.",
"do merchants need technical skills": "No technical skills are required.",
"can ogaranya generate invoices": "Yes, invoices can be sent via SMS.",
"can ogaranya send payment reminders": "Yes, automated reminders are supported.",
"can i sell without internet": "Yes, sales can be completed offline using USSD.",
"does ogaranya support multiple products": "Yes, merchants can list multiple products.",
"can ogaranya manage orders": "Yes, orders are tracked within the system.",

// ======================
// API & Developers
// ======================
"does ogaranya have an api": "Yes, Ogaranya provides APIs for integration.",
"is ogaranya developer friendly": "Yes, Ogaranya offers APIs and webhooks.",
"can i integrate ogaranya into my app": "Yes, via Ogaranya APIs.",
"does ogaranya support webhooks": "Yes, for transaction updates.",
"can ogaranya be white labeled": "White-label options depend on enterprise plans.",
"does ogaranya support automation": "Yes, workflows can be automated via APIs.",

// ======================
// Use Cases
// ======================
"can ogaranya be used for schools": "Yes, schools can collect fees via Ogaranya.",
"can ogaranya be used for churches": "Yes, donations and payments are supported.",
"can ogaranya be used for transport": "Yes, ticketing and bookings are supported.",
"can ogaranya be used for utilities": "Yes, bill payments are supported.",
"can ogaranya be used for events": "Yes, event booking and ticket payments are supported.",
"can ogaranya be used for ecommerce": "Yes, it supports ecommerce via messaging.",
"can ogaranya be used for agriculture": "Yes, it helps farmers sell via SMS.",
"can ogaranya be used by ngos": "Yes, NGOs use it for collections and outreach.",

// ======================
// Advantages
// ======================
"why use ogaranya": "It works without internet and simplifies payments.",
"what makes ogaranya unique": "Its focus on message-based commerce.",
"what are ogaranya benefits": "Accessibility, simplicity, and low data usage.",
"who is ogaranya for": "Individuals, small businesses, and organizations.",
"does ogaranya save data": "Yes, it uses minimal or no data.",
"does ogaranya work on old phones": "Yes, feature phones are supported.",

// ======================
// Support & Help
// ======================
"how do i contact ogaranya": "Support is available through official channels.",
"does ogaranya have customer support": "Yes, customer support is available.",
"how do i get help on ogaranya": "Send a help command or contact support.",
"what if payment fails": "You will receive a message with next steps.",
"can i report an issue": "Yes, issues can be reported to support.",
"how do i reset my account": "Account issues are handled by support.",

// ======================
// General Clarifications
// ======================
"is ogaranya free": "Basic access is free; transaction fees apply.",
"does ogaranya require registration": "Some services require registration.",
"can anyone use ogaranya": "Yes, anyone with a phone can use it.",
"is ogaranya for nigeria only": "Primarily focused on Nigeria.",
"does ogaranya support international payments": "Currently focused on local payments.",
"is ogaranya scalable": "Yes, it supports high transaction volumes.",
"is ogaranya reliable": "Yes, it is built for high availability.",


  "how do i get started on ogaranya": `To get started on Ogaranya, users simply interact through SMS, WhatsApp, or USSD.
There is no app to download or complicated setup process.
Users follow simple text prompts to complete actions.
Some services may require basic registration.
The experience is designed to be simple and fast.`,

  "do i need a smartphone to use ogaranya": `No, a smartphone is not required to use Ogaranya.
Feature phones can access the service through SMS or USSD.
This makes Ogaranya accessible to a wider audience.
Internet access is not mandatory.
Any mobile phone can be used.`,

  "how do i register on ogaranya": `Registration on Ogaranya depends on the service being used.
Some services allow instant usage without registration.
Others may request basic information for verification.
All steps are communicated via messages.
The process is quick and user-friendly.`,

  // ======================
  // Transactions & Orders
  // ======================

  "what happens after i place an order": `After placing an order, Ogaranya sends a confirmation message.
The message includes order details and payment instructions.
Once payment is completed, the order is processed.
Users receive updates through messages.
No app notifications are required.`,

  "can i place multiple orders at once": `Yes, Ogaranya supports multiple orders.
Each order is processed individually through messages.
Users receive confirmations for each transaction.
This helps keep records clear and organized.
Bulk ordering depends on the merchant setup.`,

  "how do i know my payment was successful": `Ogaranya sends a payment confirmation message immediately.
The message includes transaction details.
If payment fails, instructions are also sent.
Users do not need to guess payment status.
Everything is communicated clearly via text.`,

  // ======================
  // USSD & SMS Experience
  // ======================

  "what is ussd used for on ogaranya": `USSD is used on Ogaranya to complete secure payments.
It connects directly to users’ bank accounts.
No internet or mobile app is required.
The process is fast and reliable.
It works on all types of phones.`,

  "what if my ussd session times out": `If a USSD session times out, the transaction is not completed.
Users can simply retry the payment.
Ogaranya will send guidance via message.
No money is deducted for incomplete sessions.
Support can be contacted if issues persist.`,

  "can i use ogaranya without airtime": `Basic airtime is required to send SMS or use USSD.
However, no data subscription is needed.
The airtime cost is minimal.
This keeps usage affordable.
It is designed for low-cost access.`,

  // ======================
  // Merchants & Sellers
  // ======================

  "how do merchants list products on ogaranya": `Merchants list products through Ogaranya’s merchant tools.
Products are assigned simple codes.
Customers order using those codes via message.
No website or app is required.
Product updates can be managed easily.`,

  "can merchants customize their offerings": `Yes, merchants can customize products and services.
Pricing, descriptions, and availability can be adjusted.
This helps businesses stay flexible.
Changes reflect in message-based ordering.
No technical knowledge is needed.`,

  "how do merchants receive payments": `Merchants receive payments through Ogaranya’s settlement process.
Payments are collected from customers via USSD or messaging.
Funds are settled to merchant accounts.
Settlement timing follows business schedules.
All transactions are tracked securely.`,

  // ======================
  // Reliability & Trust
  // ======================

  "what happens if there is a system issue": `If there is a system issue, Ogaranya notifies users.
Transactions are protected from partial processing.
Users receive clear instructions on next steps.
Support teams work to resolve issues quickly.
Reliability is a core focus of the platform.`,

  "can ogaranya handle high traffic": `Yes, Ogaranya is built to handle high transaction volumes.
It supports large numbers of simultaneous users.
The system is designed for scalability.
This makes it suitable for businesses and organizations.
Performance remains stable under load.`,

  "why should i trust ogaranya": `Ogaranya operates with regulated payment channels.
Transactions are processed through trusted banks.
The platform focuses on transparency and reliability.
Users receive confirmations for every action.
Trust and accessibility are key priorities.`,

  // ======================
  // Growth & Expansion
  // ======================

  "can ogaranya expand beyond nigeria": `Ogaranya is currently focused on Nigeria.
The platform is built with scalability in mind.
Expansion depends on regulatory and banking integrations.
Future growth is possible.
The model supports regional adaptation.`,

  "is ogaranya suitable for large organizations": `Yes, Ogaranya works for both small and large organizations.
It supports bulk payments and collections.
Automation and APIs enable scale.
Organizations can streamline operations.
No heavy infrastructure is required.`,

  // ======================
  // Education & Awareness
  // ======================

  "who benefits most from ogaranya": `Ogaranya benefits users with limited internet access.
Small businesses gain simple payment tools.
Organizations can reach wider audiences.
Rural and underserved communities are included.
It promotes financial inclusion.`,

  "how is ogaranya different from normal ecommerce": `Traditional ecommerce requires apps and internet.
Ogaranya works through messages.
It removes barriers like data and smartphones.
The experience is simpler and more inclusive.
Commerce happens through conversation.`

};

/* =========================
   THEME LOAD
========================= */
(function loadTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
})();

/* =========================
   SIDEBAR CHAT LIST
========================= */
function renderChatList() {
  const chatList = document.getElementById("chatList");
  chatList.innerHTML = "";

  chats.forEach((chat, index) => {
    const lastMsg = chat.messages.at(-1);

    const item = document.createElement("div");
    item.className = `chat-item ${index === currentChat ? "active" : ""}`;
    item.onclick = () => openChat(index);

    item.innerHTML = `
      <img src="./ogaranya-logo.png" />

      <div class="chat-meta">
        <strong>${chat.name}</strong>
        <div class="chat-preview">
          ${
            lastMsg
              ? `${lastMsg.type === "sent" ? "✓✓ " : ""}${lastMsg.text}`
              : "No messages yet"
          }
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
  document.getElementById("chatAvatar").src =
    `https://i.pravatar.cc/40?img=${chats[index].avatar}`;

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
  box.innerHTML = "";

  chats[currentChat].messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = `message ${msg.type}`;
    div.textContent = msg.text;
    box.appendChild(div);
  });

  box.scrollTop = box.scrollHeight;
}

/* =========================
   AI RESPONSE
========================= */
function getAIResponse(text) {
  const clean = text.toLowerCase().replace(/[^\w\s]/g, "").trim();
  return responses[clean] || "I’m not sure yet, but I’m learning every day 🙂";
}

/* =========================
   SEND MESSAGE
========================= */
function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (!text) return;

  chats[currentChat].messages.push({ text, type: "sent" });
  input.value = "";

  renderMessages();
  renderChatList();

  setTimeout(() => {
    chats[currentChat].messages.push({
      text: getAIResponse(text),
      type: "received"
    });

    renderMessages();
    renderChatList();
  }, 700);
}

/* =========================
   ENTER KEY
========================= */
document.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});

/* =========================
   INIT
========================= */
renderChatList();
openChat(0);
