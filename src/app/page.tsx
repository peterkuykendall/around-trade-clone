import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 bg-[#fafafa]">
        <div className="flex items-center gap-8">
          <Link href="/" className="whitespace-nowrap">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-lg">Around</span>
            </div>
          </Link>
          <Link href="/company">
            <span className="font-semibold">Company</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-black hover:bg-gray-800">
            Sign Up
          </Button>
        </div>
      </header>

      <main className="flex flex-col items-center gap-24 mt-4 laptop:mt-16 laptop:gap-32">
        {/* Hero Section */}
        <section className="w-full max-w-[1200px] px-8">
          <div className="relative flex w-full justify-between rounded-3xl border border-gray-200">
            <div className="z-10 flex h-[554px] w-[480px] flex-col p-12">
              <div className="flex h-full flex-col justify-between">
                <div className="flex flex-col items-start justify-center">
                  <Badge variant="outline" className="mb-6 flex h-9 items-center gap-2 rounded-full pr-4 pl-1">
                    <div className="bg-black flex h-7 items-center rounded-full px-2">
                      <span className="text-white text-sm font-semibold">New</span>
                    </div>
                    <span className="text-gray-600 font-semibold">B2B Catalog</span>
                  </Badge>
                  <h1 className="text-6xl font-bold mb-4">Less Work, Faster Sales.</h1>
                  <p className="text-gray-600 mb-8">
                    Incomplete, or outdated catalogs slow down sales. Keep your buyers well informed and always up-to-date with a smart B2B catalog built for food CPG.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-black hover:bg-gray-800 h-10">
                    Get started, it's free
                  </Button>
                  <Button variant="outline" className="h-10">
                    Not in food CPG?
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-[720px] overflow-hidden">
              <Image
                src="https://ext.same-assets.com/2118439921/1670648663.png"
                alt="Product showcase"
                width={720}
                height={554}
                className="w-full h-full object-cover rounded-r-3xl"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 flex w-full justify-center pt-16 pb-6">
          <div className="w-[1200px] px-4 tablet:px-8">
            <div className="grid grid-cols-3 pb-16">
              <div className="flex min-h-25 flex-col justify-between">
                <span className="text-gray-600 text-sm">
                  Follow us on <span className="cursor-pointer font-semibold hover:underline">LinkedIn</span>
                </span>
              </div>
              <div className="w-full">
                <div className="flex flex-col items-start gap-3">
                  <Link href="/company">
                    <span className="text-gray-600 cursor-pointer text-sm font-semibold hover:underline">Company</span>
                  </Link>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col items-start gap-3">
                  <a href="https://around.breezy.hr/">
                    <span className="text-gray-600 cursor-pointer text-sm font-semibold hover:underline">Careers</span>
                  </a>
                  <a href="https://drive.google.com/drive/folders/1cGVLF4s8mzMQ9n7ZzsiycCLhQMpNc7xJ">
                    <span className="text-gray-600 cursor-pointer text-sm font-semibold hover:underline">Press kit</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 flex justify-between pt-6">
              <span className="text-gray-500 text-sm">Around Trade Technologies © 2025</span>
              <div className="flex gap-4">
                <a href="https://resources.around.trade/policies/privacy-policy">
                  <span className="text-gray-600 cursor-pointer text-sm font-semibold hover:underline">Policy</span>
                </a>
                <a href="https://resources.around.trade/policies/privacy-policy">
                  <span className="text-gray-600 cursor-pointer text-sm font-semibold hover:underline">Cookies</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}