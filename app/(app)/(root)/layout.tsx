import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SiteHeader />
            {children}
            <SiteFooter />
        </div>
    )
}
