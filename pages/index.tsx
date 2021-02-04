export default function Home() {
  return (
    <div className="flex justify-center">
      <h1 className="w-3/4 py-12 space-x-1 font-black text-center text-transparent bg-gradient-to-tr bg-clip-text from-yellow-400 via-red-500 to-pink-500 max-w-screen">
        Next.js
        <Separator />
        Tailwind
        <Separator />
        Typescript
        <Separator />
        Supabase
      </h1>
      <style jsx>{`
        h1 {
          font-size: 12vw;
          line-height: 0.5;
        }
        @media only screen and (min-width: 1024px) {
          h1 {
            font-size: 8rem;
          }
        }
      `}</style>
    </div>
  )
}

const Separator = () => (
  <>
    <span className="inline-block w-full">
      <span className="inline text-transparent select-none bg-gradient-to-l bg-clip-text from-blue-500 to-blue-200">
        +
      </span>
    </span>
    <style jsx>{`
      span.inline-block {
        font-size: 0.4em;
        margin-bottom: 0.55em;
      }
    `}</style>
  </>
)
