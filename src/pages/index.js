import { Hero } from '@components/index';

export default function Home() {
  console.log(process.env.TEST);

  return (
    <>
      <Hero />
    </>
  );
}
