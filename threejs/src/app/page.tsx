"use client"

import ThreeScene from "@/components/three-scene"

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="mb-8 text-3xl font-bold">Demo</h1>
        <div className="h-[500px] w-full max-w-3xl rounded-lg border border-gray-200 shadow-md">
          <ThreeScene />
        </div>
      </main>
  )
}

