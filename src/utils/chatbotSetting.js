import favicon from "../asset/favicon.svg";

const chatbotSettings = {
  general: {
    embedded: false,
    showFooter: false,
  },
  chatHistory: {
    storageKey: "conversations_summary",
  },
  tooltip: {
    mode: "NEVER",
  },
  header: {
    title: <div>AMA BOT</div>,

    showAvatar: false,
  },
  notification: {
    disabled: true,
    showCount: false,
  },
  chatButton: {
    icon: favicon,
  },
};

const chatbotStyle = {
  headerStyle: {
    background: "linear-gradient(to right, #428EC5 100%, #90BFF9 10%)",
  },
  sendButtonStyle: {
    backgroundColor: "#428EC5",
    color: "white",
  },
  sendButtonHoveredStyle: {
    backgroundColor: "#90BFF9",
    color: "white",
  },
  botBubbleStyle: {
    backgroundColor: "#49494B",
    color: "#ffffff",
    borderRadius: "10px",
  },
  userBubbleStyle: {
    backgroundColor: "#428EC5",
    color: "#ffffff",
    borderRadius: "10px",
  },
};

export { chatbotSettings, chatbotStyle };
