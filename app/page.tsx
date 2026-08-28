"use client";

import React, { useState } from "react";

interface Message {
  id: string;
  sender: "user" | "agent" | "system";
  text: string;
  skillUsed?: string;
  repoLink?: string;
  timestamp: string;
}

export default function AgentDashboard() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "system",
      text: "Hệ thống AI Agent đã sẵn sàng. Skill 'github-manager' đang hoạt động trên local runtime.",
      timestamp: "09:00:12",
    },
    {
      id: "2",
      sender: "user",
      text: "Tạo một repo private tên là spring-ecommerce-core kèm mô tả Backend API",
      timestamp: "09:01:05",
    },
    {
      id: "3",
      sender: "agent",
      text: "Đã phân tích yêu cầu. Kích hoạt Skill 'github-manager' để tạo repository trên tài khoản cá nhân.",
      skillUsed: "github-manager -> create_github_repo()",
      repoLink: "https://github.com/your-username/spring-ecommerce-core",
      timestamp: "09:01:08",
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isProcessing) return;

    const userText = inputVal;
    const now = new Date().toLocaleTimeString("vi-VN", { hour12: false });

    // Thêm tin nhắn của User
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
      timestamp: now,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsProcessing(true);

    // Giả lập luồng xử lý của Agent
    setTimeout(() => {
      const isGithubIntent =
        userText.toLowerCase().includes("tạo") ||
        userText.toLowerCase().includes("repo") ||
        userText.toLowerCase().includes("github");

      const agentMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "agent",
        text: isGithubIntent
          ? `Đã nhận diện lệnh tạo repo. Đang gọi Skill 'github-manager' thực thi... Repository mới đã được khởi tạo thành công!`
          : `Agent đã nhận lệnh: "${userText}". Bạn có thể thử lệnh: "Tạo repo private tên là task-manager"`,
        skillUsed: isGithubIntent ? "github-manager" : undefined,
        repoLink: isGithubIntent
          ? `https://github.com/your-username/demo-${Date.now().toString().slice(-4)}`
          : undefined,
        timestamp: new Date().toLocaleTimeString("vi-VN", { hour12: false }),
      };

      setMessages((prev) => [...prev, agentMsg]);
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-mono flex flex-col selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Top Navbar */}
      <header className="border-b border-neutral-800/80 bg-neutral-900/50 backdrop-blur-md px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold text-sm tracking-wider text-neutral-200 uppercase">
            Local AI Agent Dashboard
          </span>
          <span className="text-xs bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded border border-neutral-700">
            OpenClaw / Gemini Engine
          </span>
        </div>
        <div className="text-xs text-neutral-500 hidden sm:block">
          Runtime: Windows x64 • Target: GitHub API
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left / Sidebar: Agent Status & Skills */}
        <div className="space-y-6 lg:col-span-1">
          {/* Active Skills Card */}
          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-4">
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center justify-between">
              <span>Được trang bị Skills</span>
              <span className="text-emerald-400 font-normal">1 Active</span>
            </h2>

            <div className="p-3.5 rounded-lg border border-emerald-900/40 bg-emerald-950/20 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-emerald-300">github-manager</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                  CUSTOM
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Tự động trích xuất tên, chế độ Public/Private và tạo repository trên GitHub qua REST API.
              </p>
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 space-y-3">
            <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              Lệnh mẫu có thể thử
            </h2>
            <div className="space-y-2 text-xs">
              <button
                onClick={() =>
                  setInputVal(
                    "Tạo cho tôi một repo private tên là java-spring-backend với mô tả API quản lý đơn hàng"
                  )
                }
                className="w-full text-left p-2.5 rounded bg-neutral-800/60 hover:bg-neutral-800 text-neutral-300 transition border border-neutral-700/50"
              >
                ➔ Tạo repo Spring Boot Private
              </button>
              <button
                onClick={() =>
                  setInputVal("Tạo một repo public tên là ai-agent-demo")
                }
                className="w-full text-left p-2.5 rounded bg-neutral-800/60 hover:bg-neutral-800 text-neutral-300 transition border border-neutral-700/50"
              >
                ➔ Tạo repo Agent Public
              </button>
            </div>
          </div>
        </div>

        {/* Right / Main: Interactive Agent Terminal & Chat */}
        <div className="lg:col-span-2 flex flex-col rounded-xl border border-neutral-800 bg-neutral-900/30 overflow-hidden min-h-[500px]">
          {/* Terminal Titlebar */}
          <div className="bg-neutral-900/90 border-b border-neutral-800 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-xs text-neutral-400 ml-2">agent-session:main</span>
            </div>
            <span className="text-[11px] text-neutral-500">Autonomous Mode</span>
          </div>

          {/* Logs / Chat View */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
            {messages.map((m) => (
              <div key={m.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                  <span
                    className={
                      m.sender === "user"
                        ? "text-cyan-400 font-bold"
                        : m.sender === "agent"
                        ? "text-emerald-400 font-bold"
                        : "text-neutral-400 font-bold"
                    }
                  >
                    {m.sender === "user"
                      ? "👤 USER"
                      : m.sender === "agent"
                      ? "🤖 AGENT"
                      : "⚙️ SYSTEM"}
                  </span>
                  <span>•</span>
                  <span>{m.timestamp}</span>
                </div>

                <div
                  className={`p-3.5 rounded-lg border leading-relaxed ${
                    m.sender === "user"
                      ? "bg-neutral-800/50 border-neutral-700 text-neutral-200"
                      : m.sender === "agent"
                      ? "bg-neutral-900/80 border-neutral-800 text-neutral-200"
                      : "bg-neutral-950/60 border-neutral-800/80 text-neutral-400"
                  }`}
                >
                  <p>{m.text}</p>

                  {/* Chi tiết Skill được Agent gọi */}
                  {m.skillUsed && (
                    <div className="mt-3 pt-2.5 border-t border-neutral-800 flex flex-col gap-1.5">
                      <div className="text-[11px] text-neutral-400 font-mono">
                        🛠 <span className="text-yellow-400/90">Skill Triggered:</span>{" "}
                        <code>{m.skillUsed}</code>
                      </div>
                      {m.repoLink && (
                        <div className="text-[11px]">
                          🔗 <span className="text-neutral-400">GitHub URL:</span>{" "}
                          <a
                            href={m.repoLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-400 hover:underline"
                          >
                            {m.repoLink}
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isProcessing && (
              <div className="text-neutral-500 text-xs flex items-center gap-2 animate-pulse pt-2">
                <span>🤖 Agent đang xử lý ngôn ngữ và chuẩn bị gọi skill...</span>
              </div>
            )}
          </div>

            {/* Input Bar */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-neutral-900/70 border-t border-neutral-800 flex gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Nhập yêu cầu bằng tiếng Việt (VD: Tạo repo private tên là demo-project)..."
              className="flex-1 bg-neutral-950 border border-neutral-700/80 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition font-sans"
            />
            <button
              type="submit"
              disabled={isProcessing}
              className="px-4 py-2.5 rounded-lg bg-emerald-500 text-neutral-950 font-bold text-xs sm:text-sm hover:bg-emerald-400 transition disabled:opacity-50"
            >
              Gửi lệnh
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}