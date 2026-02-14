"use client";

import { useState } from "react";
import Image from "next/image";
import { Home, Hash, Search, Users, Sidebar, PlusCircle, Smile, Send } from "react-feather";

interface Message {
    id: number;
    author: string;
    avatar: string;
    content: string | string[];
    timestamp: string;
}

export function AppMockupChatArea() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            author: "Yuki",
            avatar: "/app-mockup/4d1efbde78c9d114a06a8cd8bba31c1c73baa724.png",
            content: "This is a message!",
            timestamp: "3h ago",
        },
        {
            id: 2,
            author: "Hai",
            avatar: "/app-mockup/fd95c14c3272d89c462e25cf7191e16f5b4cad10.png",
            content: "This is another message!",
            timestamp: "3h ago",
        },
        {
            id: 3,
            author: "Yuki",
            avatar: "/app-mockup/57cf8eb96a24250e52aabfa18b23dbffd36243cb.png",
            content: [
                "And this is",
                "A wall of text",
                "Made of several messages",
                "Mixed together!",
            ],
            timestamp: "3h ago",
        },
    ]);

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessage: Message = {
                id: messages.length + 1,
                author: "Yuki",
                avatar: "/app-mockup/4d1efbde78c9d114a06a8cd8bba31c1c73baa724.png",
                content: message,
                timestamp: "just now",
            };
            setMessages([...messages, newMessage]);
            setMessage("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="mockup-chat-area flex flex-col flex-1 h-full min-w-0">
            {/* Top Navigation */}
            <div className="h-[40px] relative shrink-0 w-full">
                <div className="flex items-center gap-[10px] px-4 size-full">
                    <Home size={12} className="text-[var(--muted-foreground)] shrink-0" />
                    <span className="font-mono font-light text-[10px] text-[var(--muted-foreground)]">Home</span>
                    <div className="h-[10px] w-0 relative">
                        <div className="absolute inset-0 w-px bg-[var(--muted-foreground)] opacity-30" />
                    </div>
                    <span className="flex-1 font-mono font-light text-[10px] text-[var(--muted-foreground)] truncate">bot updates</span>
                    <Hash size={12} className="text-[var(--muted-foreground)] shrink-0" />
                    <Search size={12} className="text-[var(--muted-foreground)] shrink-0" />
                    <Users size={12} className="text-[var(--muted-foreground)] shrink-0" />
                    <Sidebar size={12} className="text-[var(--foreground)] shrink-0" />
                </div>
                <div className="absolute inset-[-0.5px] border border-[var(--border)] pointer-events-none" />
            </div>

            {/* Messages Area */}
            <div className="flex flex-col flex-1 min-h-0 justify-end overflow-auto relative" style={{ scrollbarWidth: 'none' }}>
                {/* Background grid pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                    <svg className="size-full" preserveAspectRatio="none">
                        <defs>
                            <pattern id="mockup-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M40 0L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#mockup-grid)" />
                    </svg>
                </div>

                {messages.map((msg) => (
                    <div key={msg.id} className="relative shrink-0 w-full">
                        <div className="absolute inset-[-0.5px] border border-[var(--border)] pointer-events-none" />
                        <div className="flex gap-2 items-start p-2">
                            <div className="relative size-[40px] shrink-0 overflow-hidden">
                                <Image
                                    src={msg.avatar}
                                    alt={msg.author}
                                    fill
                                    className="object-cover"
                                    sizes="40px"
                                />
                            </div>
                            <div className="flex flex-col gap-1 min-w-0 overflow-hidden pb-2">
                                <div className="flex gap-[10px] items-center overflow-hidden">
                                    <span className="font-mono font-bold text-[12px] text-[var(--foreground)] shrink-0">{msg.author}</span>
                                    <span className="font-mono font-light text-[10px] text-[var(--foreground)] opacity-50 shrink-0">{msg.timestamp}</span>
                                </div>
                                {Array.isArray(msg.content) ? (
                                    <div className="font-sans font-light text-[12px] text-[var(--foreground)] leading-[16px]">
                                        {msg.content.map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="font-sans font-light text-[12px] text-[var(--foreground)]">{msg.content}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Message Input */}
            <div className="h-[40px] relative shrink-0 w-full">
                <div className="flex items-center gap-[10px] pl-4 size-full">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message #general"
                        className="flex-1 font-mono font-light text-[10px] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] bg-transparent border-none outline-none min-w-0"
                        onKeyDown={handleKeyDown}
                    />
                    <div className="flex flex-col h-full shrink-0 w-[40px]">
                        <div className="flex h-[20px] w-full">
                            <div className="flex flex-1 items-center justify-center relative cursor-pointer hover:opacity-80">
                                <div className="absolute inset-[-0.5px] border border-[var(--border)] pointer-events-none" />
                                <PlusCircle size={12} className="text-[var(--muted-foreground)]" />
                            </div>
                            <div className="flex flex-1 items-center justify-center relative cursor-pointer hover:opacity-80">
                                <div className="absolute inset-[-0.5px] border border-[var(--border)] pointer-events-none" />
                                <Smile size={12} className="text-[var(--muted-foreground)]" />
                            </div>
                        </div>
                        <div
                            className="flex items-center justify-center h-[20px] w-full relative cursor-pointer hover:opacity-80"
                            onClick={handleSendMessage}
                        >
                            <div className="absolute inset-[-0.5px] border border-[var(--border)] pointer-events-none" />
                            <Send size={12} className="text-[var(--muted-foreground)]" />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-[-0.5px] border border-[var(--border)] pointer-events-none" />
            </div>
        </div>
    );
}
