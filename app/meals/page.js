import Link from "next/link";

export default function MealsPage() {
  return (
    <div>
      <h1>Meals</h1>
      <p>Meals page content...</p>
      <Link href="/meals/share">Share</Link>
    </div>
  );
}