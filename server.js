// server.js — простой вариант на CommonJS
const express = require('express');
const path = require('path');
require('dotenv').config(); // читает .env

const app = express();
app.use(express.json());

// Раздаём сайт (index.html, styles.css, script.js, images/)
app.use(express.static(__dirname));

// Эндпоинт, который отправляет заявку в Telegram
app.post('/api/booking', async (req, res) => {
  try {
    const BOT_TOKEN = process.env.TG_BOT_TOKEN;
    const CHAT_IDS = (process.env.TG_CHAT_IDS || '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const { message } = req.body || {};

    if (!BOT_TOKEN || !CHAT_IDS.length || !message) {
      return res.json({ ok: false });
    }

    // Шлём во все чаты
    await Promise.all(
      CHAT_IDS.map(id =>
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: id, text: message })
        })
      )
    );

    res.json({ ok: true });
  } catch (e) {
    console.error('Ошибка отправки в Telegram:', e);
    res.json({ ok: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});