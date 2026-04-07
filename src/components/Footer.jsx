export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-white text-2xl font-bold mb-6">AyurCare</h3>
            <p className="text-sm leading-relaxed mb-6">
              Personalized, doctor-led Ayurvedic care in the Himalayas. For chronic conditions, deep healing, and authentic learning.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Treatments</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Consultations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Panchakarma</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chronic Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Learning</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Online Courses</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Immersion Programs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Clinical Workshops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Plan Your Visit</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
          <p>© {new Date().getFullYear()} AyurCare Clinic. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
