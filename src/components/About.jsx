import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import headshot from '../assets/images/Law1.jpeg'

export default function About() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative aspect-[4/5] overflow-hidden bg-navy/5"
        >
          <img
            src={headshot}
            alt="Tshepo Tlotleng, founder and head attorney (placeholder — final portrait pending)"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-3 right-3 bg-navy/80 text-ivory text-xs font-body px-2.5 py-1 rounded">
            Placeholder photo
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <p className="font-body text-accent text-sm tracking-widest uppercase mb-4">
            About the Firm
          </p>
          <h2 className="font-display text-4xl text-navy mb-6">
            Founded by Tshepo Tlotleng
          </h2>
          <p className="font-body text-navy/80 leading-relaxed mb-4">
            Tshepo Tlotleng Attorneys is a black-owned law firm, founded and managed by a sole director, Tshepo Tlotleng, the award-winning lawyer who previously worked for Maponya Attorneys and has also won SA's first Constitutional Court Fantasy League, correctly predicting the 11 judges' individual rulings more accurately than any other lawyer.
            Tshepo Tlotleng Attorneys is a well-positioned, Klerksdorp-based full-service law practice that provides among other services - corporate, Criminal litigation, commercial law. We provide a range of specialised corporate and commercial, divorce proceedings, legal services to companies and individuals. 
            Tshepo Tlotleng Attorneys currently has a presence in the whole of North West Province and we intend to strategically expand our offices across South Africa in the future.
          </p>
          <p className="font-body text-navy/80 leading-relaxed mb-8">
            Our team consists of very competitive individuals with a very strong background in their respective fields, they are all graduates and have great work experience.
            We are a company that prides itself on its ‘family’ culture and we seek out high-calibre people. We are a company that has, at its core, a team philosophy that is clearly apparent each and every day – there is a real sense of being there for one another.
            We believe in nurturing the skills of our team members and providing growing levels of responsibility. Of all the things that we do and all the exciting projects that Tlotleng Attorneys undertakes on a daily basis, it’s our people who are the foundation of our success.
            Our people bring unique skills, energy, expertise, experience and perspectives to our workforce.
          </p>
          <Link
            to="/about"
            className="border border-navy/30 text-navy px-7 py-3 font-body text-sm hover:border-accent hover:text-accent transition-colors inline-block"
          >
            More About the Firm
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
