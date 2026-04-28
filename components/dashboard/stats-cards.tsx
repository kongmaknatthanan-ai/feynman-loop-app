"use client"

import { Bug, TrendingUp, CheckCircle, Flame, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const stats = [
  {
    icon: Bug,
    iconBg: "bg-pink/20",
    iconColor: "text-pink",
    value: "5",
    unit: "จุด",
    label: "จุดที่ต้องแก้",
    sublabel: "ยังไม่เข้าใจดีพอ",
    color: "pink"
  },
  {
    icon: TrendingUp,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    value: "23,450",
    unit: "",
    label: "คะแนนรวม",
    sublabel: "เพิ่มขึ้น 1,250 จากเมื่อวาน",
    color: "green"
  },
  {
    icon: CheckCircle,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    value: "12",
    unit: "จุด",
    label: "เข้าใจแล้ว",
    sublabel: "เก่งขึ้นมากเลย!",
    color: "green"
  },
  {
    icon: Flame,
    iconBg: "bg-orange/20",
    iconColor: "text-orange",
    value: "7",
    unit: "วัน",
    label: "ฝึกต่อเนื่อง",
    sublabel: "สู้ๆ! รักษาสถิตินี้ไว้!",
    color: "orange"
  }
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className="p-4 bg-card border border-border/50 rounded-2xl hover:shadow-md transition-shadow cursor-pointer group"
        >
          <div className="flex items-start justify-between">
            <div className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
              <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <div className="mt-3">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
              {stat.unit && <span className="text-sm text-muted-foreground">{stat.unit}</span>}
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
