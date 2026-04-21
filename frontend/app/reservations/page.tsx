import ReservationForm from "@/components/form/ReservationForm";
import ContactInfo from "@/components/ContactInfo";
import PageHeader from "@/components/PageHeader";


export default function ReservationsPage() {


  return (
    <div className="bg-stone-25 min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <PageHeader title="Reserve" src="/img/about-header.jpg" />

      {/* ── Main grid ────────────────────────────────────── */}
      <div className="site-container py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20">
          {/* ── Sidebar info ───────────────────────────── */}
          <ContactInfo />
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}
