"use client";

import Link from "next/link";

export default function CustomError() {
  return (
    <>
      <h1>Uh oh - something went wrong!</h1>
      <h2>It&apos;s not you, it&apos;s me.</h2>
      <Link href="/">Return home</Link>
    </>
  );
}
