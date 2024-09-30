import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { ClusterClient } from '@/components/tables/cluster-tables/client';
import { NodesClient } from '@/components/tables/nodes-tables/client';
import { Cluster } from '@/database/entities';
import { getClusters } from '@/repositories/clusterRepository';
import { getNodes } from '@/repositories/k8Repository';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Nodes', link: '/dashboard/nodes' }
];
export default async function page() {

  let nodes = await getNodes()
  
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <NodesClient data={nodes} />
      </div>
    </PageContainer>
  );
}
