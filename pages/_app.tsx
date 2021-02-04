import 'tailwindcss/tailwind.css'
import '../public/fonts/inter.css'

import { AppProps } from 'next/app'

import { Auth } from '@supabase/ui'

import { supabase } from '../utils/supabase'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900 text-gray-50">
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </main>
  )
}
