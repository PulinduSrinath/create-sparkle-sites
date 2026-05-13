import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Lands = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-background text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Lands
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our premium land offerings.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Lands;
