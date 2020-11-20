import Link from 'next/link'

export default function IndexPage() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {/* <li>
        <Link href="/[slug]" as="my-slug">
          <a>First route</a>
        </Link>
      </li> */}
      <li>
        <Link
          href="/[dynamic]/[id]" as="/my-folder/my-id">
          <a>Second Route</a>
        </Link>

      </li>
    </ul>
  )
}