"use client";

import Image from "next/image";
import { Search } from "react-feather";

interface Member {
    id: number;
    name: string;
    avatar: string;
    status?: "online" | "offline";
}

function MemberAvatar({ member }: { member: Member }) {
    return (
        <div className="relative shrink-0 size-[32px]">
            <div className="relative rounded-[5px] size-[32px] overflow-hidden">
                <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="32px"
                />
            </div>
            {member.status === "online" && (
                <div className="absolute bg-[#44b700] bottom-[-2px] right-[-2px] size-2 rounded-full">
                    <div className="absolute border-2 border-[var(--background)] inset-0 pointer-events-none rounded-full" />
                </div>
            )}
        </div>
    );
}

export function AppMockupMemberSidebar() {
    const admins: Member[] = [
        { id: 1, name: "Yuki", avatar: "/app-mockup/092a28cefac460d7f224528c32e939ea003cd45c.png", status: "online" },
        { id: 2, name: "Hai", avatar: "/app-mockup/7ad031f3af39ba034e0778bbf5a69718dad0b740.png" },
        { id: 3, name: "Mika", avatar: "/app-mockup/c724460de1adf90dba6e9115df8014f0980ba19b.png" },
    ];

    const bots: Member[] = [
        { id: 4, name: "Bot1", avatar: "/app-mockup/62e7355eb76a472f502ac6f9038510ba840324e0.png" },
        { id: 5, name: "Bot2", avatar: "/app-mockup/fd95c14c3272d89c462e25cf7191e16f5b4cad10.png" },
    ];

    const members: Member[] = [
        { id: 6, name: "User1", avatar: "/app-mockup/57cf8eb96a24250e52aabfa18b23dbffd36243cb.png" },
        { id: 7, name: "User2", avatar: "/app-mockup/c2e6549cb53789c152c82080e10c269c08af2118.png" },
        { id: 8, name: "User3", avatar: "/app-mockup/4cbceb07d037495d1d3e30f84e0f9bfc468454aa.png" },
        { id: 9, name: "User4", avatar: "/app-mockup/737358764d77833d833ec6d161e1dc33baf557be.png" },
        { id: 10, name: "User5", avatar: "/app-mockup/cc1526687da50b42d0d445e32648d637c04710f2.png", status: "online" },
        { id: 11, name: "User6", avatar: "/app-mockup/f2e79d903d4265b15f928c1c615d410b0489ce73.png" },
        { id: 12, name: "User7", avatar: "/app-mockup/5a3c2333481bc50a2a4968e80e797954f487068d.png" },
        { id: 13, name: "User8", avatar: "/app-mockup/1ad6fd6298ae37f6250bdf04a49fd13cda22c966.png" },
        { id: 14, name: "User9", avatar: "/app-mockup/5333881e37bb7de28f335f589c88925761e4446b.png" },
        { id: 15, name: "User10", avatar: "/app-mockup/484d5dfd5434bb28aa1196561b2767f148bf80e9.png" },
        { id: 16, name: "User11", avatar: "/app-mockup/e70e5fbd918cb4c104ebb6bcfa571d5a0c89f517.png" },
    ];

    return (
        <div className="mockup-member-sidebar bg-white/[0.02] flex flex-col h-full shrink-0 w-[148px] overflow-auto relative" style={{ scrollbarWidth: 'none' }}>
            <div className="absolute inset-[-0.5px] border border-[var(--border)] pointer-events-none" />

            {/* Search */}
            <div className="h-[40px] opacity-80 relative shrink-0 w-full">
                <div className="flex items-center justify-center gap-[10px] px-2 py-[5px] size-full">
                    <span className="flex-1 font-mono font-light text-[10px] text-[var(--muted-foreground)] truncate">Search</span>
                    <Search size={12} className="text-[var(--muted-foreground)] shrink-0" />
                </div>
                <div className="absolute inset-0 border border-[var(--border)] pointer-events-none" />
            </div>

            <div className="h-px shrink-0 w-[100px]" />

            {/* Admins Section */}
            <div className="flex flex-col gap-2 px-2 shrink-0 w-full">
                <div className="flex flex-col gap-1 pb-1">
                    <span className="font-mono font-light text-[10px] text-[var(--muted-foreground)]">ADMINS - 1</span>
                    <div className="flex flex-wrap gap-2">
                        {admins.map((admin) => (
                            <MemberAvatar key={admin.id} member={admin} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-4 shrink-0" />

            {/* Bots Section */}
            <div className="flex flex-col gap-2 px-2 shrink-0 w-full">
                <div className="flex flex-col gap-1 pb-1">
                    <span className="font-mono font-light text-[10px] text-[var(--muted-foreground)]">BOT - 3</span>
                    <div className="flex flex-wrap gap-2">
                        {bots.map((bot) => (
                            <MemberAvatar key={bot.id} member={bot} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-4 shrink-0" />

            {/* Members Section */}
            <div className="flex flex-col gap-2 px-2 shrink-0 w-full">
                <div className="flex flex-col gap-1 pb-1">
                    <span className="font-mono font-light text-[10px] text-[var(--muted-foreground)]">MEMBERS - 2</span>
                    <div className="flex flex-wrap gap-2">
                        {members.map((member) => (
                            <MemberAvatar key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="h-4 shrink-0" />
        </div>
    );
}
