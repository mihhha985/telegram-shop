"use client";

import { useEffect } from "react";

export default function TelegramInit() {
  useEffect(() => {
    const initialize = () => {
      const webApp = window.Telegram?.WebApp;
      if (!webApp) return;

      webApp.ready();
      webApp.expand();
    };

    if (window.Telegram?.WebApp) {
      initialize();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js?63";
    script.async = true;
    script.onload = initialize;
    document.head.appendChild(script);
  }, []);

  return null;
}
