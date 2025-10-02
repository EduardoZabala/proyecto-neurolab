const SECRET_KEYS = new Set([
  'password', 'passwordHash', 'accessToken', 'refreshToken',
  'authorization', 'cookie', 'cookies', 'set-cookie'
])


function redactValue(value: unknown): unknown {
  if (value == null) return value
  if (typeof value === 'string') {
    return value
      .replace(/(Authorization:\s*Bearer\s+)[^\s]+/ig, '$1<redacted>')
      .replace(/(accessToken|refreshToken)\s*[:=]\s*["']?[^"'\s]+/ig, '$1=<redacted>')
  }
  if (typeof value !== 'object') return value


  if (Array.isArray(value)) return value.map(redactValue)

  const result: Record<string, unknown> = {}
  for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
    result[key] = SECRET_KEYS.has(key.toLowerCase()) ? '<redacted>' : redactValue(val)
  }
  return result
}

function safe(...args: unknown[]) {
  return args.map(arg => {
    if (typeof arg === 'object' && arg !== null) {
      return JSON.stringify(redactValue(arg))
    }
    return redactValue(arg)
  })
}


export const logger = {
  info: (...args: unknown[]) => console.info(...safe(...args)),
  warn: (...args: unknown[]) => console.warn(...safe(...args)),
  error: (...args: unknown[]) => console.error(...safe(...args)),
}
