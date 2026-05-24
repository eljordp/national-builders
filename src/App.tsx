import { useEffect, useState } from 'react'

const brands = [
  'Nerolac',
  'Sirca (Italy)',
  'Kansai Paint',
  'Wigwam Excel',
  'Häfele',
  'Dorset',
  'Prince',
]

const categories = [
  {
    title: 'Paints',
    img: '/images/nerolac.jpg',
    blurb: 'Nerolac, Kansai, Prince, Dorset. Interior, exterior, textures and primers. Three decades of partnerships, wholesale shelf.',
  },
  {
    title: 'Wood Coatings',
    img: '/images/sirca.jpg',
    blurb: 'Sirca PU polish from Italy. Get your perfect shade tinted in five minutes — superior finish, market-beating price.',
  },
  {
    title: 'Plywood',
    img: '/images/plywood.jpg',
    blurb: 'Wigwam Excel ply with a lifetime warranty and a 300% cash-back guarantee. Built for furniture that lasts.',
  },
  {
    title: 'Kitchens & Wardrobes',
    img: '/images/kitchen.jpg',
    blurb: 'Modular kitchens, sliding-shutter wardrobes and every accessory under one roof. Designed to stay neat and clutter-free.',
  },
  {
    title: 'Laminates & Stone',
    img: '/images/marble.jpg',
    blurb: 'Marble textures, Dholpur exterior finishes and a deep laminate library. Pull the sample, see it in light, decide on site.',
  },
  {
    title: 'Hardware',
    img: '/images/hafele.jpg',
    blurb: 'Häfele biometric locks, louvers, fittings. Smart access, sleek design, and the reliability modern living demands.',
  },
]

const gallery = [
  { src: '/images/storefront.jpg', alt: 'National Builder storefront, Channi Himmat, Jammu' },
  { src: '/images/aantriq.jpg', alt: 'Interior install in Jammu' },
  { src: '/images/wardrobe.jpg', alt: 'Sliding-shutter wardrobe' },
  { src: '/images/louvers.jpg', alt: 'Wall louvers' },
  { src: '/images/dholpur.jpg', alt: 'Dholpur exterior texture' },
  { src: '/images/kitchen.jpg', alt: 'Modular kitchen install' },
]

const reels = [
  { id: 'DWGxdt2gmML', poster: '/images/sirca.jpg', label: 'Italian craftsmanship. Sirca PU coatings.' },
  { id: 'DXzqDfpTYF3', poster: '/images/nerolac.jpg', label: 'Three decades of Nerolac in Jammu.' },
  { id: 'DYoyjpxibXh', poster: '/images/plywood.jpg', label: 'Wigwam Excel ply. Lifetime warranty.' },
  { id: 'DXZPSGFAqMb', poster: '/images/hafele.jpg', label: 'Häfele biometric locks for the modern wardrobe.' },
  { id: 'DVjSuC0gjlt', poster: '/images/kitchen.jpg', label: 'Everything under one roof.' },
  { id: 'DQNDYgtk6k9', poster: '/images/marble.jpg', label: 'Marble textures at wholesale.' },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled ? 'bg-cream/95 backdrop-blur border-b border-ink/10' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className={`font-display text-2xl tracking-tight ${scrolled ? 'text-ink' : 'text-cream'}`}>
            National Builder
          </a>
          <nav className={`hidden md:flex items-center gap-8 text-sm ${scrolled ? 'text-ink' : 'text-cream/90'}`}>
            <a href="#catalog" className="hover:text-clay">Catalog</a>
            <a href="#brands" className="hover:text-clay">Brands</a>
            <a href="#showroom" className="hover:text-clay">Showroom</a>
            <a href="#watch" className="hover:text-clay">Watch</a>
            <a href="#visit" className="hover:text-clay">Visit</a>
          </nav>
          <a
            href="https://www.instagram.com/nationalbuilders92/"
            target="_blank"
            rel="noreferrer"
            className={`text-sm border px-4 py-2 rounded-full transition ${
              scrolled
                ? 'border-ink/30 text-ink hover:bg-ink hover:text-cream'
                : 'border-cream/50 text-cream hover:bg-cream hover:text-ink'
            }`}
          >
            @nationalbuilders92
          </a>
        </div>
      </header>

      <section id="top" className="relative">
        <div className="absolute inset-0">
          <img
            src="/images/storefront.jpg"
            alt="National Builder storefront at dusk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-cream" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-32 md:pt-56 md:pb-44">
          <p className="text-cream/90 uppercase tracking-[0.3em] text-xs mb-6">
            Channi Himmat · Jammu
          </p>
          <h1 className="font-display text-5xl md:text-7xl text-cream leading-[1.05] max-w-3xl">
            Paints, plywood, kitchens, coatings. Under one roof, at wholesale.
          </h1>
          <p className="mt-8 text-cream/85 text-lg max-w-2xl">
            Every brand we stock, we stand behind. Walk the showroom, pull samples, talk to people who know the materials. That is the difference at National Builder.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#visit"
              className="bg-cream text-ink px-7 py-3 rounded-full font-medium hover:bg-sand transition"
            >
              Visit the showroom
            </a>
            <a
              href="#catalog"
              className="border border-cream/60 text-cream px-7 py-3 rounded-full font-medium hover:bg-cream/10 transition"
            >
              See the catalog
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream py-10">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-display text-3xl text-sand">Wholesale shelf</div>
            <p className="mt-2 text-cream/70">Prices the trade gets, passed on to your project.</p>
          </div>
          <div>
            <div className="font-display text-3xl text-sand">Lifetime warranty ply</div>
            <p className="mt-2 text-cream/70">Wigwam Excel with a 300% cash-back guarantee. Furniture that holds up.</p>
          </div>
          <div>
            <div className="font-display text-3xl text-sand">Italian wood coatings</div>
            <p className="mt-2 text-cream/70">Sirca PU shades tinted in five minutes. Better finish, better price.</p>
          </div>
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl mb-14">
          <p className="uppercase tracking-[0.3em] text-xs text-clay mb-4">What we stock</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Six departments. One trip.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <article key={c.title} className="bg-white/60 border border-ink/10 rounded-2xl overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden bg-sand">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2">{c.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{c.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="brands" className="bg-sand/60 py-20 border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-clay mb-4">Brands on the floor</p>
              <h2 className="font-display text-4xl md:text-5xl">
                The names contractors already trust.
              </h2>
              <p className="mt-6 text-ink/70">
                We carry the brands working interior designers and builders in Jammu specify by name. If your client asks for it, odds are we have it in stock.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
              {brands.map((b) => (
                <div
                  key={b}
                  className="font-display text-2xl text-ink border-b border-ink/15 pb-3"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="showroom" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-clay mb-4">Inside the showroom</p>
            <h2 className="font-display text-4xl md:text-5xl max-w-xl">
              Photographed where the materials live.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/nationalbuilders92/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-clay hover:text-burnt underline underline-offset-4"
          >
            More on Instagram
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {gallery.map((g, i) => (
            <a
              key={g.src}
              href="https://www.instagram.com/nationalbuilders92/"
              target="_blank"
              rel="noreferrer"
              className={`relative block overflow-hidden rounded-xl bg-sand ${
                i === 0 ? 'col-span-2 row-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </a>
          ))}
        </div>
      </section>

      <section id="watch" className="bg-sand/60 py-24 border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-clay mb-4">From the floor</p>
              <h2 className="font-display text-4xl md:text-5xl max-w-xl">
                See the materials in motion.
              </h2>
            </div>
            <a
              href="https://www.instagram.com/nationalbuilders92/reels/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-clay hover:text-burnt underline underline-offset-4"
            >
              All reels on Instagram
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((r) => (
              <figure key={r.id} className="space-y-3">
                <div className="relative w-full overflow-hidden rounded-2xl border border-ink/10 bg-ink shadow-sm" style={{ aspectRatio: '9 / 16' }}>
                  <video
                    src={`/reels/${r.id}.mp4`}
                    poster={r.poster}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                  />
                </div>
                <figcaption className="text-sm text-ink/70">{r.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-ink text-cream py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-sand/70 mb-4">Find us</p>
            <h2 className="font-display text-4xl md:text-5xl">
              The showroom is the pitch.
            </h2>
            <p className="mt-6 text-cream/75 max-w-md">
              We do not sell over WhatsApp screenshots. Come walk the racks, feel the laminates, hold the Häfele hardware in your hand. Bring your designer.
            </p>
            <div className="mt-10 space-y-6 text-cream/85">
              <div>
                <div className="text-xs uppercase tracking-widest text-sand/60">Address</div>
                <div className="font-display text-2xl mt-1">Sector 4, Channi Himmat</div>
                <div className="font-display text-2xl">Jammu 180015</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-sand/60">Instagram</div>
                <a
                  href="https://www.instagram.com/nationalbuilders92/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-2xl mt-1 inline-block hover:text-sand"
                >
                  @nationalbuilders92
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-cream/15">
            <iframe
              title="National Builder location"
              src="https://www.google.com/maps?q=Channi+Himmat+Jammu+180015&output=embed"
              className="w-full h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="bg-ink text-cream/60 border-t border-cream/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="font-display text-xl text-cream">National Builder</div>
          <div>© {new Date().getFullYear()} National Builder, Jammu. All rights reserved.</div>
          <a
            href="https://www.instagram.com/nationalbuilders92/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cream"
          >
            Follow on Instagram
          </a>
        </div>
      </footer>
    </div>
  )
}
