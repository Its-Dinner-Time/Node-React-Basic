export default async function env() {
  if (process.env.NODE_ENV === 'production') {
    return (await import('./prd.js')).default;
  }

  return (await import('./dev.js')).default;
}
