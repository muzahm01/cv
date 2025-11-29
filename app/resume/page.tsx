import Header from '@/components/Header'
import Introduction from '@/components/Introduction'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import Publications from '@/components/Publications'
import References from '@/components/References'

export default function Resume() {
    return (
        <main className="min-h-screen">
            <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-8">
                <Header />
                <Introduction />
                <Skills />
                <Experience />
                <Education />
                <Certifications />
                <Publications />
                <References />
            </div>
        </main>
    )
}
