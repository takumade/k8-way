import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { ClusterClient } from '@/components/tables/cluster-tables/client';
import { Cluster } from '@/database/entities';
import { getClusters } from '@/repositories/clusterRepository';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Cluster', link: '/dashboard/clusters' }
];
export default async function page() {

  let clusters = await getClusters()

  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <ClusterClient data={clusters as Cluster[] | undefined} />
      </div>
    </PageContainer>
  );
}
