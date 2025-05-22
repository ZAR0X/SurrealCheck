# ✨ SurrealCheck

**SurrealCheck** is a web interface that uses [Yakoa's API](https://yakoa.com) to verify the authenticity and originality of digital content (images). Built for the **Surreal World Assets Buildathon**, it helps users discover trustworthy content and explore ways to **extend, license, or attribute** it through Yakoa’s **Story** platform.

![SurrealCheck UI Demo](./demo/surrealcheck-preview.png) 

---

## 🚀 Features

- 🔍 **Content Verification** – Check if an image is original, AI-generated, or re-used
- 📈 **Originality Score** – View how likely the content is authentic
- 🪪 **Attribution Info** – See source, creator, and matching references
- 🔗 **Story Integration** – Prototype actions to license or extend the content
- ⚡ **Clean UI** – Simple, responsive frontend with fast feedback

---

## 🛠️ Tech Stack

| Layer     | Tech Used                       |
|-----------|---------------------------------|
| Frontend  | React.js, JavaScript, CSS       |
| Backend   | Django, Django REST Framework   |
| API       | Yakoa Content Authentication API|
| Integration | Mocked hooks to Story platform|
| Dev Tools | Vite, Axios, dotenv             |

---

## 🧠 How It Works

```

\[Frontend UI] → \[User submits image URL]
↓
\[Backend Server] → Calls Yakoa API with image URL
↓
\[Yakoa Response] → Contains originality score, attribution, etc.
↓
\[Frontend UI] → Displays results + links for Story (extend/license)

````

---

## 📦 Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/surrealcheck.git
cd surrealcheck
````

### 2. Backend Setup

```bash
cd backend
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt

# Create a .env file with:
YAKOA_API_KEY=your_actual_key

python manage.py migrate
python manage.py runserver
```

Backend runs on `http://localhost:8000`

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000` (with proxy to backend)

> Make sure your `.env` files are correctly configured both in backend and frontend.

---

## 🧪 Future Roadmap

* [ ] User login & verification history
* [ ] Public deployment (Vercel + Railway)
* [ ] Full Story API integration once available
* [ ] Upload-based input (not just URL)
* [ ] Improved attribution visuals & animations
* [ ] Support for batch checking multiple images

---

## 🏁 Built For

**Surreal World Assets Buildathon**
Organized by [Yakoa](https://yakoa.com)

SurrealCheck demonstrates how Yakoa’s API can enable a more **transparent and trustworthy digital media ecosystem**, with direct pathways for creators to manage their content.

---

## 👨‍💻 Author

**Zarox**
Computer Science Student • Builder @ Execal

* GitHub: [@zar0x](https://github.com/zar0x)
* LinkedIn: [linkedin.com/in/ramgour](https://linkedin.com/in/your-profile)
* Telegram: [@zarox](https://t.me/zarox)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

