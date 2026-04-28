"use client"

import { Home, Map, GraduationCap, Target, Dumbbell, BarChart3, Trophy, Users, Calendar, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

const navItems = [
  { icon: Home, label: "หน้าหลัก", active: true },
  { icon: Map, label: "Road map", active: false },
  { icon: GraduationCap, label: "Teaching Room", active: false },
  { icon: Target, label: "Weak Point", active: false },
  { icon: Dumbbell, label: "Train", active: false },
  { icon: BarChart3, label: "สถิติ", active: false },
  { icon: Trophy, label: "รางวัล", active: false },
  { icon: Users, label: "เพื่อน", active: false },
  { icon: Calendar, label: "ปฏิทิน", active: false },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-card rounded-3xl p-4 flex flex-col h-full shadow-sm border border-border/50">
      {/* Logo */}
      <div className="flex items-center gap-2 px-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <Leaf className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-semibold text-foreground">Feynman<br/>Project</span>
      </div>

      {/* User Profile */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <Avatar className="w-24 h-24 border-4 border-green-200">
            <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kuAfIgsb7YIgrwMLXuxNZKrH7nhY3E.png" />
            <AvatarFallback className="bg-green-100 text-green-700 text-2xl">โบ๊ท</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
            <Leaf className="w-4 h-4 text-white" />
          </div>
        </div>
        <h3 className="mt-3 font-semibold text-lg text-foreground">โบ๊ท</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">Lv. 12</span>
          <Leaf className="w-4 h-4 text-green-500" />
        </div>
        <div className="w-full mt-3 px-4">
          <Progress value={54} className="h-2 bg-green-100" />
          <p className="text-xs text-center text-muted-foreground mt-1">650 / 1200 XP</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
              item.active 
                ? "bg-green-100 text-green-700" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </nav>

      {/* Motivational Card */}
      <div className="mt-4 rounded-2xl overflow-hidden">
        <Image 
          src="/images/mascot-sidebar.png" 
          alt="เรียนทุกวัน เก่งขึ้นทุกวัน!"
          width={240}
          height={200}
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </aside>
  )
}
