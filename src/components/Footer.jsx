export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 text-sm py-6 text-center px-4">
      <p>
        &copy; {new Date().getFullYear()} Brian Bellanger &middot; Built with React &amp; Tailwind CSS
      </p>
    </footer>
  )
}
