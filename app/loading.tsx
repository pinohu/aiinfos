import React from "react"
import { Loading } from "@/components/loading"

export default function PageLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
    </div>
  )
} 