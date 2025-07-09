# 📖 TogetherCone

TogetherCone is a simple AI-powered application that allows users to store text in **Pinecone** and retrieve relevant information using **Together AI** for answering queries.

🔗 **Live Demo**: [[togethercone-jpq9.vercel.app](https://togethercone-jpq9.vercel.app)](https://togethercone.vercel.app)

---

## 🚀 Features

- **📂 Store text in Pinecone**: Save important text snippets for later retrieval.
- **💡 Ask AI**: Ask questions, and Together AI will generate answers based on relevant Pinecone-stored data.
- **🔑 API Key Management**: Securely store API keys in cookies (valid for 7 days).
- **⚡ Fast Vector Search**: Uses **Pinecone** for fast similarity-based document retrieval.

---

## 🛠️ Technical Specifications

- **Framework**: [Next.js (App Router)](https://nextjs.org/docs)
- **Frontend**: React with Tailwind CSS
- **Database**: [Pinecone](https://www.pinecone.io/) for vector storage and similarity search
- **LLM**: [Together AI](https://www.together.ai/) for text-based AI responses
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Data Storage**: API keys stored in **cookies** for security
- **Deployment**: Vercel ([Live URL](https://togethercone-jpq9.vercel.app))

---

## 🏗️ How to Run Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-repo/togethercone.git
   cd togethercone
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start the development server**  
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

4. **For production build & serve**  
   ```bash
   npm run build
   npm start
   ```

---

## ⚠️ Security Notice

- **Do not use the app on shared or public computers** since API keys are stored in cookies.
- **Cookies expire in 7 days** for security purposes.
- **Always keep your API keys private** and do not share them publicly.

---

## 📚 How to Use the App

### 🔑 **Step 1: Set API Keys**
1. Get **Pinecone API Key** & **Index** from [Pinecone.io](https://www.pinecone.io/)
2. Get **Together AI API Key** from [Together.ai](https://www.together.ai/)
3. Open the app and go to **API Keys** page (`/`)
4. Enter the keys and click **Save**

### 📂 **Step 2: Store Text in Pinecone**
1. Go to **Store in Pinecone** (`/store`)
2. Enter the text you want to save
3. Click **Store in Pinecone**

### 💡 **Step 3: Ask AI a Question**
1. Go to **Ask Together AI** (`/ask`)
2. Enter a question
3. Click **Ask AI**
4. The app will retrieve the most relevant stored text and generate an AI-powered answer.

---

## 📜 License

This project is **MIT Licensed** – free to use and modify.

---

🚀 **Enjoy using TogetherCone!** 🎉
