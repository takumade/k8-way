import { Breadcrumbs } from '@/components/breadcrumbs';
import { ClusterForm } from '@/components/forms/cluster.form';
import { ProductForm } from '@/components/forms/product-form';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Cluster', link: '/dashboard/clusters' },
  { title: 'Create', link: '/dashboard/clusters/create' }
];

export default function Page({
    params
}: {
    params: { clusterId: string }
}): React.JSX.Element {

    console.log("params: ", params)
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <ClusterForm
          initialData={params}
          key={null}
        />
      </div>
    </ScrollArea>
  );
}
