import type { NextConfig } from 'next'
import { resolve } from 'path'

const nextConfig: NextConfig = {
  outputFileTracingRoot: resolve(__dirname),
  turbopack: {},
}

export default nextConfig
