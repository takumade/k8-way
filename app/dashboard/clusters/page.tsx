import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { ClusterClient } from '@/components/tables/cluster-tables/client';
import { clusters } from '@/constants/data';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Cluster', link: '/dashboard/clusters' }
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <ClusterClient data={clusters} />
      </div>
    </PageContainer>
  );
}
