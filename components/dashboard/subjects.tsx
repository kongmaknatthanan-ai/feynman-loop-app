"use client"

import Link from "next/link"
import { Atom, FlaskConical, Calculator, Leaf, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const subjects = [
  {
    icon: Atom,
    name: "ฟิสิกส์",
    progress: 68,
    color: "blue",
    bgColor: "bg-blue/10",
    iconColor: "text-blue",
    progressColor: "bg-blue",
    slug: "physics"
  },
  {
    icon: FlaskConical,
    name: "เคมี",
    progress: 45,
    color: "green",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    progressColor: "bg-green-500",
    slug: "chemistry"
  },
  {
    icon: Calculator,
    name: "คณิตศาสตร์",
    progress: 72,
    color: "orange",
    bgColor: "bg-orange/10",
    iconColor: "text-orange",
    progressColor: "bg-orange",
    slug: "math"
  },
  {
    icon: Leaf,
    name: "ชีวะ",
    progress: 80,
    color: "green",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    progressColor: "bg-green-500",
    slug: "biology"
  }
]

export function Subjects() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">วันนี้อยากเรียนอะไรดี?</h2>
        <button className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
          ดูทั้งหมด <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {subjects.map((subject, index) => (
          <Card 
            key={index}
            className="p-5 bg-card border border-border/50 rounded-2xl hover:shadow-md transition-all cursor-pointer group hover:border-primary/30"
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-14 h-14 rounded-2xl ${subject.bgColor} flex items-center justify-center mb-3`}>
                <subject.icon className={`w-7 h-7 ${subject.iconColor}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{subject.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">ความเข้าใจโดยรวม</p>
              
              <div className="w-full relative mb-2">
                <Progress 
                  value={subject.progress} 
                  className="h-2 bg-muted"
                />
              </div>
              <span className="text-2xl font-bold text-foreground">{subject.progress}<span className="text-sm text-muted-foreground">%</span></span>
              
              <Link 
                href={`/teach/${subject.slug}`}
                className="mt-3 w-full py-2 px-4 bg-green-50 text-green-600 rounded-xl text-sm font-medium flex items-center justify-center gap-1 hover:bg-green-100 transition-colors group-hover:bg-green-100"
              >
                ไปสอนน้องกันเลย <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
