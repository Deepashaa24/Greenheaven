import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Heart, Leaf, Menu, Search, ShoppingBag, Sparkles, Sun, Truck, UserRound, X } from 'lucide-react'
import './App.css'

const products = [
  { name: 'Rubber Plant', type: 'Ficus elastica', price: '₹699', oldPrice: '₹899', image: 'https://images.unsplash.com/photo-1597055181300-df90c91f7e65?auto=format&fit=crop&w=900&q=80', tag: 'Beginner friendly', rating: '4.9' },
  { name: 'Monstera Deliciosa', type: 'Statement plant', price: '₹899', oldPrice: '₹1,199', image: 'https://images.unsplash.com/photo-1614594576172-7f7c2fb1c2e9?auto=format&fit=crop&w=900&q=80', tag: 'Bestseller', rating: '4.8' },
  { name: 'Peace Lily', type: 'Spathiphyllum', price: '₹549', oldPrice: '₹699', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=900&q=80', tag: 'Pet friendly', rating: '4.7' },
]

const needs = [
  { title: 'Low light', detail: 'Happy in cosy corners', icon: '◐', color: 'sand' },
  { title: 'Pet-safe', detail: 'Safe for curious paws', icon: '♡', color: 'rose' },
  { title: 'Air purifying', detail: 'Breathe a little easier', icon: '⌁', color: 'sky' },
  { title: 'Low maintenance', detail: 'Thrives on your schedule', icon: '✦', color: 'mint' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [wishlist, setWishlist] = useState([])
  const [cartCount, setCartCount] = useState(0)

  const toggleWishlist = (name) => setWishlist((items) => items.includes(name) ? items.filter((item) => item !== name) : [...items, name])

  return (
    <div className="site-shell">
      <div className="announcement"><Sparkles size={14} /> Free delivery on orders above ₹799 <span>•</span> 7-day plant survival guarantee</div>
      <header className="header">
        <a className="brand" href="/" aria-label="Green Heaven home"><span className="brand-mark"><Leaf size={20} fill="currentColor" /></span><span>green <b>heaven</b></span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#shop">Shop plants</a><a href="#needs">Shop by need</a><a href="#care">Plant care</a><a href="#story">Our story</a>
        </nav>
        <div className="header-actions"><button aria-label="Search"><Search size={19} /></button><button aria-label="Account"><UserRound size={19} /></button><button className="cart-button" aria-label={`Cart with ${cartCount} items`}><ShoppingBag size={19} />{cartCount > 0 && <span>{cartCount}</span>}</button><button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy"><p className="eyebrow"><span></span> Plants for real homes</p><h1>Bring home a little more <em>life.</em></h1><p className="hero-text">Beautiful, healthy plants chosen to thrive in your space. From first leaf to forever home, we’re here to help.</p><div className="hero-actions"><a className="button button-dark" href="#shop">Find my perfect plant <ArrowRight size={17} /></a><a className="text-link" href="#shop">Explore all plants <ArrowRight size={15} /></a></div><div className="hero-note"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span></div><p><strong>Loved by 12,000+ plant parents</strong><br /><span>★★★★★ 4.9 average rating</span></p></div></div>
          <div className="hero-visual"><div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1300&q=85" alt="A lush indoor monstera plant in a warm sunlit home" /></div><div className="floating-card care-card"><span className="care-icon"><Check size={16} /></span><div><b>Beginner friendly</b><small>Low effort, high joy</small></div></div><div className="floating-card size-card"><span>↕</span><div><b>Real size, always</b><small>45–55 cm tall</small></div></div></div>
        </section>

        <section className="trust-strip"><div><Truck size={22} /><span><b>Safe, careful delivery</b><small>Plants packed with love</small></span></div><div><Leaf size={22} /><span><b>7-day survival guarantee</b><small>We’ve got your back</small></span></div><div><Sun size={22} /><span><b>Expert plant guidance</b><small>Help from real humans</small></span></div></section>

        <section className="section needs-section" id="needs"><div className="section-heading"><div><p className="eyebrow"><span></span> Find your match</p><h2>Shop by what you need</h2></div><a className="text-link" href="#shop">View all needs <ArrowRight size={15} /></a></div><div className="needs-grid">{needs.map((need) => <a className={`need-card ${need.color}`} href="#shop" key={need.title}><span className="need-icon">{need.icon}</span><span><b>{need.title}</b><small>{need.detail}</small></span><ArrowRight size={17} /></a>)}</div></section>

        <section className="section product-section" id="shop"><div className="section-heading"><div><p className="eyebrow"><span></span> Grown with care</p><h2>Plants people are loving</h2></div><a className="text-link" href="#shop">Shop all plants <ArrowRight size={15} /></a></div><div className="product-grid">{products.map((product, index) => <motion.article className="product-card" key={product.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}><div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-tag">{product.tag}</span><button className="heart-button" aria-label={`Add ${product.name} to wishlist`} onClick={() => toggleWishlist(product.name)}><Heart size={18} fill={wishlist.includes(product.name) ? 'currentColor' : 'none'} /></button><button className="quick-add" onClick={() => setCartCount(cartCount + 1)}>Quick add <span>+</span></button></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.type}</p></div><span className="rating">★ {product.rating}</span></div><div className="price-row"><strong>{product.price}</strong><del>{product.oldPrice}</del><span>Save 17%</span></div></motion.article>)}</div></section>

        <section className="match-banner"><div className="match-copy"><p className="eyebrow"><span></span> Unsure where to start?</p><h2>There’s a plant<br /><em>made for your home.</em></h2><p>Tell us about your space, your light and your lifestyle. We’ll find your green match in under a minute.</p><a className="button button-light" href="#shop">Take the plant quiz <ArrowRight size={17} /></a></div><div className="match-art"><div className="circle-stamp"><Leaf size={24} /><span>good things<br />grow here</span></div><img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80" alt="Potted plant by a bright window" /></div></section>

        <section className="section story-section" id="story"><div className="story-image"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80" alt="Hands caring for a plant" /></div><div className="story-copy"><p className="eyebrow"><span></span> A little about us</p><h2>Plants should feel like a joy, not a gamble.</h2><p>We started Green Heaven after losing one too many plants to confusing care labels and careless delivery. Today, every plant is hand-picked, packed safely and sent with the guidance it needs to settle in.</p><a className="text-link" href="#story">Read our story <ArrowRight size={15} /></a><div className="story-sign"><Leaf size={18} /><span>Your plant is in good hands.</span></div></div></section>
      </main>
      <footer className="footer"><a className="brand" href="/"><span className="brand-mark"><Leaf size={20} fill="currentColor" /></span><span>green <b>heaven</b></span></a><p>Thoughtful plants for everyday spaces.</p><span>© 2026 Green Heaven</span></footer>
    </div>
  )
}

export default App
