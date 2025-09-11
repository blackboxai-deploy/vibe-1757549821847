export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 drop-shadow-lg">
          Hello World
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-md mx-auto">
          Welcome to your new Next.js application
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
      </div>
    </main>
  )
}