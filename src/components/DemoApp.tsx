import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";

const Link = (props: JSX.IntrinsicElements['a']) => (
  <a
    className="text-pink-500 underline hover:no-underline dark:text-pink-400"
    {...props}
  />
);

const DemoApp = () => {
  const [count, setCount] = useState(0);

  return(
    <div
      className="mx-auto my-8 mt-10 w-8/12 rounded border border-gray-200 p-4 shadow-md dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-none">
      <h1 className="mb-4 text-4xl">Welcome</h1>
      <p className="my-4">
        <em>Minimal, fast, sensible defaults.</em>
      </p>
      <p className="my-4">
        Using <Link href="https://vitejs.dev/">Vite</Link>,{' '}
        <Link href="https://reactjs.org/">React</Link>,{' '}
        <Link href="https://www.typescriptlang.org/">TypeScript</Link> and{' '}
        <Link href="https://tailwindcss.com/">Tailwind</Link>.
      </p>
      <p className="my-4">
        Change{' '}
        <code
          className="border-1 2py-1 rounded border border-pink-500 bg-neutral-100 px-1 font-mono text-pink-500 dark:border-pink-400 dark:bg-neutral-700 dark:text-pink-400">
          src/App.tsx
        </code>{' '}
        for live updates.
      </p>

      <Button
        className="mt-4"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </Button>

      <p className="my-4">
        Count: {count}
      </p>
    </div>
  )
};

export default DemoApp
