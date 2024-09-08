import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getClusters } from '@/repositories/clusterRepository';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async  function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {

  let clusters = await getClusters()
  return (
    <div className="flex">
      <Sidebar clusters={clusters}/>
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}
