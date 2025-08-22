// app/(app)/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import ProtectedShell from "@/components/ProtectedShell";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedShell>
      <SidebarProvider>
        <div className="flex h-screen">
          <AppSidebar />
          <main className="flex-1 overflow-y-auto p-6">
            <div className="mb-4">
              <SidebarTrigger />
            </div>
            {children}
          </main>
        </div>
      </SidebarProvider>
    </ProtectedShell>
  );
}
