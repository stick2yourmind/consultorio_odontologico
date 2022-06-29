.env example:
```
VITE_BASE_URL = 'http://localhost:3000'
```

How to use:
```
// No import needed

const Component = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  return (
    <>
      ...
    <>
  )
}

export default Component
```