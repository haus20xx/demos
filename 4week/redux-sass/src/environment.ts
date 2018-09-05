const dev = {
  context: 'http://localhost:3000/'
}

const prod = {
  context: 'http://52.15.87.153:3000/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev
