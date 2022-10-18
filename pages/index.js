import useDarkMode from "../hooks/useDarkMode";
import Head from "next/head";
import Link from "next/link";
import ToggleLight from "../components/light/toggle";
import ToggleDark from "../components/dark/toggle";
import Question from "../components/common/question";

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="h-screen w-screen p-10 dark:bg-gray-900 bg-indigo-200">
      <Head>
        <title>Nick Work In Progress</title>
        <meta name="description" content="Nick's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {colorTheme === "light" ? (
        <ToggleLight setTheme={setTheme} />
      ) : (
        <ToggleDark setTheme={setTheme} />
      )}
      <div className="w-fit dark:text-indigo-200 text-gray-900 hover:text-indigo-500 dark:hover:text-gray-500" >
        <Link href="">Home</Link>
      </div>
      <Question />
    </div>
  );
}
