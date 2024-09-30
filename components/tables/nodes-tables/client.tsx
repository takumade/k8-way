'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';;
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';
import { Cluster } from '@/database/entities';


interface NodesClientProps {
  data:any[]
}

export const NodesClient: React.FC<NodesClientProps> = ({ data }) => {
  const router = useRouter();

  console.log("Data: ", data)


  let displayNodes = data.map(node => ({
    name: node.metadata.name,
    status: node.status.conditions[node.status.conditions.length - 1].type,
    version: node.status.nodeInfo.kubeletVersion
  }))

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Nodes (${data?.length})`}
          description="Manage nodes"
        />
        {/* <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/clusters/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button> */}
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={displayNodes} />
    </>
  );
};
